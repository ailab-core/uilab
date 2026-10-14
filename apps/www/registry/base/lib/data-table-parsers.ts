import { z } from "zod";

import type {
  ColumnFilterItem,
  ColumnSortItem,
  DataTableColumnConfig,
  DataTableColumnConfigs,
  DataTableColumnConfigsQuery,
  FilterableColumnId,
  FilterOperator,
  FilterVariant,
  JoinOperator,
  SortableColumnId,
} from "@/registry/base/lib/data-table-types";

import {
  FILTER_OPERATORS,
  getFilterOperators,
  getIsActiveFilter,
  getIsValuelessOperator,
  getPlainFilterOperator,
  JOIN_OPERATORS,
  normalizeColumnFilter,
} from "@/registry/base/lib/data-table-utils";

const sortingItemSchema = z.object({
  id: z.string(),
  desc: z.boolean(),
});

export function parseSortingState<TColumnId extends string = string>(
  value: unknown,
  columnIds?: readonly TColumnId[] | Set<TColumnId>,
): ColumnSortItem<TColumnId>[] | null {
  if (typeof value !== "string" || value === "") return null;

  const sorting = parseSorting(value);
  return sorting && getHasKnownIds(sorting, getIdSet(columnIds))
    ? sorting
    : null;
}

export function serializeSortingState(value: ColumnSortItem[]) {
  const compact = value
    .map((item) => `${item.id}.${item.desc ? "desc" : "asc"}`)
    .join(",");
  const parsed = parseSorting(compact);

  // Ids with a comma, or a first id starting with `[`, don't round-trip.
  return parsed && getIsSameSorting(parsed, value)
    ? compact
    : JSON.stringify(value);
}

export { getIsSameSorting };

const OPERATORS_BY_NAME = new Map(
  getKeys(FILTER_OPERATORS).flatMap((operator): [string, FilterOperator][] => [
    [FILTER_OPERATORS[operator], operator],
    [operator.toLowerCase(), operator],
  ]),
);

const MAX_OPERATOR_PART_COUNT = 3;

const LIST_OPERATORS = new Set<FilterOperator>([
  "inArray",
  "notInArray",
  "isBetween",
]);

export function parseColumnFilter<TColumnId extends string>(
  id: TColumnId,
  variant: FilterVariant,
  param: string,
): ColumnFilterItem<TColumnId> {
  const { operator, rawValue } = splitFilterOperator(param, variant);

  const filter = normalizeColumnFilter(
    {
      id,
      variant,
      operator,
      value: getIsValuelessOperator(operator)
        ? ""
        : LIST_OPERATORS.has(operator)
          ? parseListValue(rawValue, operator)
          : rawValue,
    },
    variant,
  );

  return { ...filter, id };
}

export function serializeColumnFilter(filter: ColumnFilterItem) {
  const name = FILTER_OPERATORS[filter.operator];
  if (getIsValuelessOperator(filter.operator)) return name;

  const rawValue = Array.isArray(filter.value)
    ? joinListValue(filter.value)
    : filter.value;

  if (filter.operator === getPlainFilterOperator(filter.variant)) {
    const implicit = parseColumnFilter(filter.id, filter.variant, rawValue);
    if (getIsSameFilter(implicit, filter)) return rawValue;
  }

  return `${name}.${rawValue}`;
}

/**
 * Reads a column's search param. One filter is stored as a string and
 * several filters on the same column as an array of strings.
 */
export function parseColumnFilterParam<TColumnId extends string>(
  id: TColumnId,
  variant: FilterVariant,
  value: unknown,
): ColumnFilterItem<TColumnId>[] {
  const params = Array.isArray(value) ? value : [value];

  return params.flatMap((param) => {
    // TanStack Router JSON-parses search values, so `?title=123` arrives as a number.
    if (!isSearchPrimitive(param)) return [];
    const filter = parseColumnFilter(id, variant, String(param));
    // Inactive filters are dropped, so `?title=` reads as no filter.
    return getIsActiveFilter(filter) ? [filter] : [];
  });
}

export function serializeColumnFilterParam(
  filters: ColumnFilterItem[],
): string | string[] | undefined {
  const params = filters.map(serializeColumnFilter);
  if (params.length === 0) return undefined;
  return params.length === 1 ? params[0] : params;
}

export function getColumnFilters<TColumnId extends string>(
  columnIds: readonly TColumnId[],
  getFilters: (id: TColumnId) => ColumnFilterItem<TColumnId>[],
) {
  return columnIds.flatMap((id) =>
    getFilters(id).map((filter, index) => ({
      ...filter,
      filterId: `${id}-${index}`,
    })),
  );
}

export function sortColumnFiltersBySearch<TFilter extends ColumnFilterItem>(
  filters: TFilter[],
  searchKeys: Iterable<string>,
) {
  const positions = new Map<string, number>();
  for (const key of searchKeys) {
    if (!positions.has(key)) positions.set(key, positions.size);
  }

  return [...filters].sort(
    (a, b) =>
      (positions.get(a.id) ?? Number.POSITIVE_INFINITY) -
      (positions.get(b.id) ?? Number.POSITIVE_INFINITY),
  );
}

export function getColumnFiltersKey(filters: ColumnFilterItem[]) {
  return filters
    .map((filter) => `${filter.id}=${serializeColumnFilter(filter)}`)
    .sort()
    .join("&");
}

export function getFilterableColumns<
  TColumnConfigs extends DataTableColumnConfigs,
>(columnConfigs: TColumnConfigs) {
  const entries = getKeys<keyof TColumnConfigs & string>(columnConfigs).flatMap(
    (id) => {
      const variant = columnConfigs[id]?.variant;
      return variant ? [[id, variant] as const] : [];
    },
  );

  return Object.fromEntries(entries) as Record<
    FilterableColumnId<TColumnConfigs>,
    FilterVariant
  >;
}

export function getSortableColumns<
  TColumnConfigs extends DataTableColumnConfigs,
>(columnConfigs: TColumnConfigs) {
  return getKeys<keyof TColumnConfigs & string>(columnConfigs).filter(
    (id): id is SortableColumnId<TColumnConfigs> =>
      columnConfigs[id]?.isSortable !== false,
  );
}

export function getColumnOptions(config: DataTableColumnConfig) {
  return {
    enableColumnFilter: config.variant !== undefined,
    enableSorting: config.isSortable !== false,
  };
}

export interface DataTableSearchOptions<
  TColumnConfigs extends DataTableColumnConfigs,
> {
  columnConfigs: TColumnConfigs;
  defaultSorting?: ColumnSortItem<NoInfer<SortableColumnId<TColumnConfigs>>>[];
  defaultPerPage?: number;
}

/**
 * The data table's search params as they appear in the URL.
 * Every key is optional, so links to the route don't have to pass them.
 */
export type DataTableSearch<TColumnConfigs extends DataTableColumnConfigs> = {
  page?: number;
  perPage?: number;
  sort?: string;
  joinOperator?: JoinOperator;
} & Partial<Record<FilterableColumnId<TColumnConfigs>, string | string[]>>;

/**
 * Creates a TanStack Router `validateSearch` function for the data table's
 * search params. Invalid values are dropped, so the hook falls back to its defaults.
 *
 * @example
 * export const Route = createFileRoute("/tasks")({
 *   validateSearch: validateDataTableSearch(tasksSearchOptions),
 *   loaderDeps: ({ search }) => search,
 *   loader: ({ deps }) => getTasks(getDataTableQuery(deps, tasksSearchOptions)),
 * });
 */
export function validateDataTableSearch<
  TColumnConfigs extends DataTableColumnConfigs,
>({ columnConfigs }: DataTableSearchOptions<TColumnConfigs>) {
  const filterableColumns = getFilterableColumns(columnConfigs);
  const sortableColumns = getSortableColumns(columnConfigs);

  return (search: Record<string, unknown>): DataTableSearch<TColumnConfigs> => {
    const result: Record<string, unknown> = {};

    const page = parsePositiveInteger(search.page);
    if (page !== undefined) result.page = page;

    const perPage = parsePositiveInteger(search.perPage);
    if (perPage !== undefined) result.perPage = perPage;

    const sorting = parseSortingState(search.sort, sortableColumns);
    if (sorting?.length) result.sort = serializeSortingState(sorting);

    const joinOperator = parseJoinOperator(search.joinOperator);
    if (joinOperator) result.joinOperator = joinOperator;

    // Keep the URL's key order, which decides the order of the filters.
    for (const id of Object.keys(search)) {
      if (!Object.hasOwn(filterableColumns, id)) continue;
      const columnId = id as FilterableColumnId<TColumnConfigs>;
      const param = serializeColumnFilterParam(
        parseColumnFilterParam(
          columnId,
          filterableColumns[columnId],
          search[id],
        ),
      );
      if (param !== undefined) result[id] = param;
    }

    return result as DataTableSearch<TColumnConfigs>;
  };
}

/**
 * Turns the validated search params into a query for your data source.
 * Use it in a route `loader` with the search params from `loaderDeps`.
 */
export function getDataTableQuery<
  TColumnConfigs extends DataTableColumnConfigs,
>(
  search: Record<string, unknown>,
  {
    columnConfigs,
    defaultSorting = [],
    defaultPerPage = 10,
  }: DataTableSearchOptions<TColumnConfigs>,
): DataTableColumnConfigsQuery<TColumnConfigs> {
  const filterableColumns = getFilterableColumns(columnConfigs);

  return {
    page: parsePositiveInteger(search.page) ?? 1,
    perPage: parsePositiveInteger(search.perPage) ?? defaultPerPage,
    sorting:
      parseSortingState(search.sort, getSortableColumns(columnConfigs)) ??
      defaultSorting,
    filters: sortColumnFiltersBySearch(
      getColumnFilters(getKeys(filterableColumns), (id) =>
        parseColumnFilterParam(id, filterableColumns[id], search[id]),
      ),
      Object.keys(search),
    ),
    joinOperator: parseJoinOperator(search.joinOperator) ?? "and",
  };
}

export function parsePositiveInteger(value: unknown) {
  const number = typeof value === "string" ? Number(value) : value;
  return typeof number === "number" && Number.isInteger(number) && number > 0
    ? number
    : undefined;
}

export function parseJoinOperator(value: unknown): JoinOperator | undefined {
  return JOIN_OPERATORS.find((operator) => operator === value);
}

function isSearchPrimitive(value: unknown): value is string | number | boolean {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  );
}

function splitFilterOperator(param: string, variant: FilterVariant) {
  const parts = param.split(".");

  for (
    let count = Math.min(MAX_OPERATOR_PART_COUNT, parts.length);
    count > 0;
    count--
  ) {
    const operator = OPERATORS_BY_NAME.get(
      parts.slice(0, count).join(".").toLowerCase(),
    );
    if (!operator || !getIsVariantOperator(variant, operator)) continue;
    if (count === parts.length && !getIsValuelessOperator(operator)) continue;

    return { operator, rawValue: parts.slice(count).join(".") };
  }

  return { operator: getPlainFilterOperator(variant), rawValue: param };
}

function getIsVariantOperator(
  variant: FilterVariant,
  operator: FilterOperator,
) {
  return (
    operator === getPlainFilterOperator(variant) ||
    getFilterOperators(variant).some((option) => option.value === operator)
  );
}

function parseListValue(rawValue: string, operator: FilterOperator) {
  const items: string[] = [];
  let item = "";
  let isQuoted = false;
  let wasQuoted = false;

  for (let index = 0; index < rawValue.length; index++) {
    const char = rawValue[index];

    if (char === '"') {
      if (isQuoted && rawValue[index + 1] === '"') {
        item += char;
        index++;
      } else {
        isQuoted = !isQuoted;
        wasQuoted = true;
      }
    } else if (char === "," && !isQuoted) {
      items.push(wasQuoted ? item : item.trim());
      item = "";
      wasQuoted = false;
    } else {
      item += char;
    }
  }
  if (rawValue !== "") items.push(wasQuoted ? item : item.trim());

  if (operator === "isBetween") return [items[0] ?? "", items[1] ?? ""];
  return items.filter((value) => value !== "");
}

function joinListValue(values: string[]) {
  return values
    .map((value) =>
      /[,"]/.test(value) || value !== value.trim()
        ? `"${value.replaceAll('"', '""')}"`
        : value,
    )
    .join(",");
}

function getIsSameFilter(a: ColumnFilterItem, b: ColumnFilterItem) {
  if (a.operator !== b.operator) return false;
  if (!Array.isArray(a.value) || !Array.isArray(b.value)) {
    return a.value === b.value;
  }
  const otherValue = b.value;
  return (
    a.value.length === otherValue.length &&
    a.value.every((item, index) => item === otherValue[index])
  );
}

function getKeys<TKey extends string>(record: Record<TKey, unknown>) {
  return Object.keys(record).filter((key): key is TKey =>
    Object.hasOwn(record, key),
  );
}

function parseSorting(value: string): ColumnSortItem[] | null {
  if (value.startsWith("[")) {
    try {
      const result = z.array(sortingItemSchema).safeParse(JSON.parse(value));
      return result.success ? result.data : null;
    } catch {
      return null;
    }
  }

  const sorting: ColumnSortItem[] = [];

  for (const part of value.split(",")) {
    const index = part.lastIndexOf(".");
    const order = part.slice(index + 1);

    if (index <= 0 || (order !== "asc" && order !== "desc")) return null;

    sorting.push({ id: part.slice(0, index), desc: order === "desc" });
  }

  return sorting;
}

function getIsSameSorting(a: ColumnSortItem[], b: ColumnSortItem[]) {
  return (
    a.length === b.length &&
    a.every(
      (item, index) => item.id === b[index]?.id && item.desc === b[index]?.desc,
    )
  );
}

function getIdSet<TColumnId extends string>(
  ids?: readonly TColumnId[] | Set<TColumnId>,
) {
  if (!ids) return null;
  return ids instanceof Set ? ids : new Set(ids);
}

function getHasKnownIds<
  TColumnItem extends { id: string },
  TColumnId extends string,
>(
  items: TColumnItem[],
  ids: ReadonlySet<TColumnId> | null,
): items is (TColumnItem & { id: TColumnId })[] {
  const knownIds: ReadonlySet<string> | null = ids;
  return knownIds === null || items.every((item) => knownIds.has(item.id));
}
