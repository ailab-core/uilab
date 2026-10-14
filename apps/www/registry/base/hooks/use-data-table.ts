import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  type ColumnFiltersState,
  functionalUpdate,
  type PaginationState,
  type RowData,
  type SortingState,
  type TableOptions,
  type Updater,
  useTable,
} from "@tanstack/react-table";
import * as React from "react";

import { useDebouncedCallback } from "@/registry/base/hooks/use-debounced-callback";
import {
  type DataTableFeatures,
  dataTableFeatures,
} from "@/registry/base/lib/data-table-features";
import {
  getColumnFilters,
  getColumnFiltersKey,
  getIsSameSorting,
  parseColumnFilterParam,
  parseJoinOperator,
  parsePositiveInteger,
  parseSortingState,
  serializeColumnFilterParam,
  serializeSortingState,
  sortColumnFiltersBySearch,
} from "@/registry/base/lib/data-table-parsers";
import type {
  ColumnFilterItem,
  DataTableQueryKeys,
  FilterVariant,
  JoinOperator,
} from "@/registry/base/lib/data-table-types";
import {
  getActiveFilters,
  normalizeColumnFilter,
} from "@/registry/base/lib/data-table-utils";

const PAGE_KEY = "page";
const PER_PAGE_KEY = "perPage";
const SORT_KEY = "sort";
const JOIN_OPERATOR_KEY = "joinOperator";
const DEBOUNCE_MS = 300;
const DEFAULT_PAGE_SIZE = 10;
const EMPTY_SORTING: SortingState = [];

type SearchParams = Record<string, unknown>;

interface FiltersDraft {
  filters: ColumnFiltersState;
  urlFiltersKey: string;
}

type UseDataTableProps<TData extends RowData> = Omit<
  TableOptions<DataTableFeatures, TData>,
  | "state"
  | "pageCount"
  | "features"
  | "manualFiltering"
  | "manualPagination"
  | "manualSorting"
> & {
  queryKeys?: Partial<DataTableQueryKeys>;
  /**
   * Whether search param updates replace the current history entry or push a new one.
   * @default "replace"
   */
  history?: "push" | "replace";
  /**
   * Delay before filter changes are written to the URL.
   * @default 300
   */
  debounceMs?: number;
  /**
   * Remove search params from the URL when they equal their default value.
   * @default true
   */
  clearOnDefault?: boolean;
  /**
   * Scroll to the top of the page when the search params change.
   * @default false
   */
  scroll?: boolean;
} & (
    | {
        mode?: "server";
        pageCount: number;
      }
    | {
        mode: "client";
        pageCount?: never;
      }
  );

/**
 * Keeps pagination, sorting, and filters in the URL with TanStack Router.
 *
 * Must render inside a `RouterProvider`. It works on any route; add
 * `validateDataTableSearch` to the route's `validateSearch` for typed,
 * validated params and to refetch in the route `loader` (server mode).
 */
function useDataTable<TData extends RowData>({
  columns,
  mode = "server",
  pageCount,
  initialState,
  queryKeys,
  history = "replace",
  debounceMs = DEBOUNCE_MS,
  clearOnDefault = true,
  scroll = false,
  ...props
}: UseDataTableProps<TData>) {
  const isServer = mode === "server";

  const pageKey = queryKeys?.page ?? PAGE_KEY;
  const perPageKey = queryKeys?.perPage ?? PER_PAGE_KEY;
  const sortKey = queryKeys?.sort ?? SORT_KEY;
  const joinOperatorKey = queryKeys?.joinOperator ?? JOIN_OPERATOR_KEY;

  const search: SearchParams = useSearch({ strict: false });
  const navigate = useNavigate();

  const [initialTableState] = React.useState(initialState);
  const defaultPerPage =
    initialTableState?.pagination?.pageSize ?? DEFAULT_PAGE_SIZE;
  const defaultSorting = initialTableState?.sorting ?? EMPTY_SORTING;
  const defaultJoinOperator = initialTableState?.joinOperator ?? "and";

  const setSearch = React.useCallback(
    (patch: SearchParams) =>
      navigate({
        to: ".",
        search: (prev: SearchParams) => {
          const next = { ...prev, ...patch };
          for (const key of Object.keys(patch)) {
            if (next[key] === undefined) delete next[key];
          }
          return next;
        },
        replace: history === "replace",
        resetScroll: scroll,
      }),
    [navigate, history, scroll],
  );

  const page = parsePositiveInteger(search[pageKey]) ?? 1;
  const perPage = parsePositiveInteger(search[perPageKey]) ?? defaultPerPage;

  const pagination = React.useMemo<PaginationState>(
    () => ({ pageIndex: page - 1, pageSize: perPage }),
    [page, perPage],
  );

  function getPaginationSearch(next: PaginationState): SearchParams {
    const nextPage = next.pageIndex + 1;
    return {
      [pageKey]: clearOnDefault && nextPage === 1 ? undefined : nextPage,
      [perPageKey]:
        clearOnDefault && next.pageSize === defaultPerPage
          ? undefined
          : next.pageSize,
    };
  }

  function onPaginationChange(updater: Updater<PaginationState>) {
    void setSearch(getPaginationSearch(functionalUpdate(updater, pagination)));
  }

  const columnIndex = React.useMemo(() => {
    const sortableIds = new Set<string>();
    const filterableVariants = new Map<string, FilterVariant>();

    for (const column of columns) {
      if (!column.id) continue;
      const hasAccessor = "accessorKey" in column || "accessorFn" in column;
      if (hasAccessor && column.enableSorting !== false) {
        sortableIds.add(column.id);
      }
      if (!column.enableColumnFilter) continue;

      filterableVariants.set(column.id, column.meta?.variant ?? "text");
    }

    return {
      sortableIds,
      filterableIds: [...filterableVariants.keys()],
      variantById: Object.fromEntries(filterableVariants),
      normalizeColumnFilters: (filters: ColumnFiltersState) =>
        filters.map((filter) =>
          normalizeColumnFilter(
            filter,
            filterableVariants.get(filter.id) ?? "text",
          ),
        ),
    };
  }, [columns]);

  const sortParam = search[sortKey];
  const sorting = React.useMemo(
    () =>
      parseSortingState(sortParam, columnIndex.sortableIds) ?? defaultSorting,
    [sortParam, columnIndex, defaultSorting],
  );

  function onSortingChange(updater: Updater<SortingState>) {
    const next = functionalUpdate(updater, sorting);
    void setSearch({
      [sortKey]:
        clearOnDefault && getIsSameSorting(next, defaultSorting)
          ? undefined
          : serializeSortingState(next),
    });
  }

  const joinOperator =
    parseJoinOperator(search[joinOperatorKey]) ?? defaultJoinOperator;

  function onJoinOperatorChange(updater: Updater<JoinOperator>) {
    const next = functionalUpdate(updater, joinOperator);
    void setSearch({
      [joinOperatorKey]:
        clearOnDefault && next === defaultJoinOperator ? undefined : next,
    });
  }

  // `search` is a new object on every navigation, so derive the filters from
  // a string key that only changes when a filter param (or its order) changes.
  const filterSearchKey = JSON.stringify(
    Object.keys(search)
      .filter((key) => Object.hasOwn(columnIndex.variantById, key))
      .map((key) => [key, search[key]]),
  );

  const urlFilters = React.useMemo(() => {
    const entries: [string, unknown][] = JSON.parse(filterSearchKey);
    const params = Object.fromEntries(entries);

    return sortColumnFiltersBySearch(
      getColumnFilters(columnIndex.filterableIds, (id) =>
        parseColumnFilterParam(
          id,
          columnIndex.variantById[id] ?? "text",
          params[id],
        ),
      ),
      entries.map(([key]) => key),
    );
  }, [columnIndex, filterSearchKey]);
  const urlFiltersKey = getColumnFiltersKey(urlFilters);

  const [filtersDraft, setFiltersDraft] = React.useState<FiltersDraft | null>(
    () => {
      const initialFilters = initialTableState?.columnFilters;
      if (urlFilters.length > 0 || !initialFilters?.length) return null;

      return {
        filters: columnIndex.normalizeColumnFilters(initialFilters),
        urlFiltersKey,
      };
    },
  );

  const columnFilters =
    filtersDraft?.urlFiltersKey === urlFiltersKey
      ? filtersDraft.filters
      : urlFilters;

  const debouncedWriteFilters = useDebouncedCallback(
    (columnFilters: ColumnFiltersState, sourceUrlFiltersKey: string) => {
      if (sourceUrlFiltersKey !== urlFiltersKey) return;

      const filters = getActiveFilters(
        columnIndex.normalizeColumnFilters(columnFilters),
      ).filter((filter) => Object.hasOwn(columnIndex.variantById, filter.id));
      const groups = new Map<string, ColumnFilterItem[]>();

      for (const filter of filters) {
        const group = groups.get(filter.id);
        if (group) group.push(filter);
        else groups.set(filter.id, [filter]);
      }

      // Clear every filterable column first so removed filters leave the URL.
      const params: SearchParams = Object.fromEntries(
        columnIndex.filterableIds.map((id) => [id, undefined]),
      );
      for (const [id, group] of groups) {
        params[id] = serializeColumnFilterParam(group);
      }

      const nextUrlFiltersKey = getColumnFiltersKey(filters);
      setFiltersDraft(
        (prev) => prev && { ...prev, urlFiltersKey: nextUrlFiltersKey },
      );
      // Go back to the first page in the same navigation as the filter change.
      void setSearch({
        ...params,
        ...getPaginationSearch({ ...pagination, pageIndex: 0 }),
      });
    },
    debounceMs,
  );

  function onColumnFiltersChange(updater: Updater<ColumnFiltersState>) {
    const filters = functionalUpdate(updater, columnFilters);
    setFiltersDraft({ filters, urlFiltersKey });
    debouncedWriteFilters(filters, urlFiltersKey);
  }

  const table = useTable(
    {
      ...props,
      features: dataTableFeatures,
      columns,
      initialState: initialTableState,
      pageCount: isServer ? pageCount : undefined,
      state: {
        pagination,
        sorting,
        columnFilters,
        joinOperator,
      },
      onPaginationChange,
      onSortingChange,
      onColumnFiltersChange,
      onJoinOperatorChange,
      manualPagination: isServer,
      manualSorting: isServer,
      manualFiltering: isServer,
    },
    (state) => ({
      columnFilters: state.columnFilters,
      joinOperator: state.joinOperator,
      pagination: state.pagination,
      sorting: state.sorting,
    }),
  );

  return React.useMemo(() => ({ table }), [table]);
}

export { type UseDataTableProps, useDataTable };
