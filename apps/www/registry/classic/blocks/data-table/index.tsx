import type {
  ColumnDef as TanColumnDef,
  PaginationState as TanPaginationState,
  Table as TanTable,
} from "@tanstack/react-table";

export type DataTable<T> = TanTable<T>;
export type DataColumn<T = unknown> = TanColumnDef<T>;
export type DataPaginationState = TanPaginationState;

export * from "./advanced";
export * from "./basic";
export * from "./filter-popover";
export * from "./merged-cell";
