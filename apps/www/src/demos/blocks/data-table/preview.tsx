import type { ColumnDef } from "@tanstack/react-table";
import {
  CalendarIcon,
  CircleDashedIcon,
  ClockIcon,
  SignalIcon,
  TextIcon,
} from "lucide-react";
import * as React from "react";
import { Badge } from "uilab-core";
import { DataTable } from "@/registry/base/components/data-table/data-table";
import { DataTableColumnHeader } from "@/registry/base/components/data-table/data-table-column-header";
import { getDataTableSelectColumn } from "@/registry/base/components/data-table/data-table-select-column";
import { DataTableSortMenu } from "@/registry/base/components/data-table/data-table-sort-menu";
import { DataTableToolbar } from "@/registry/base/components/data-table/data-table-toolbar";
import { useDataTable } from "@/registry/base/hooks/use-data-table";
import type { DataTableFeatures } from "@/registry/base/lib/data-table-features";
import { TASKS, type Task } from "./data";

export function DataTablePreview() {
  const columns = React.useMemo<ColumnDef<DataTableFeatures, Task>[]>(
    () => [
      getDataTableSelectColumn(),
      {
        id: "code",
        accessorKey: "code",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} label="Task" />
        ),
        enableHiding: false,
      },
      {
        id: "title",
        accessorKey: "title",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} label="Title" />
        ),
        meta: {
          label: "Title",
          placeholder: "Search titles...",
          variant: "text",
          icon: TextIcon,
        },
        enableColumnFilter: true,
      },
      {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} label="Status" />
        ),
        cell: ({ row }) => (
          <Badge variant="outline" className="capitalize">
            {row.original.status.replace("-", " ")}
          </Badge>
        ),
        meta: {
          label: "Status",
          variant: "multiSelect",
          options: [
            { label: "Todo", value: "todo" },
            { label: "In progress", value: "in-progress" },
            { label: "Done", value: "done" },
            { label: "Canceled", value: "canceled" },
          ],
          icon: CircleDashedIcon,
        },
        enableColumnFilter: true,
      },
      {
        id: "priority",
        accessorKey: "priority",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} label="Priority" />
        ),
        cell: ({ row }) => (
          <span className="capitalize">{row.original.priority}</span>
        ),
        meta: {
          label: "Priority",
          variant: "multiSelect",
          options: [
            { label: "Low", value: "low" },
            { label: "Medium", value: "medium" },
            { label: "High", value: "high" },
          ],
          icon: SignalIcon,
        },
        enableColumnFilter: true,
      },
      {
        id: "estimatedHours",
        accessorKey: "estimatedHours",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} label="Est. hours" />
        ),
        meta: {
          label: "Est. hours",
          variant: "range",
          range: [1, 24],
          unit: "hr",
          icon: ClockIcon,
        },
        enableColumnFilter: true,
      },
      {
        id: "createdAt",
        accessorKey: "createdAt",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} label="Created at" />
        ),
        cell: ({ row }) => row.original.createdAt.toLocaleDateString("en-US"),
        meta: {
          label: "Created at",
          variant: "dateRange",
          icon: CalendarIcon,
        },
        enableColumnFilter: true,
      },
    ],
    [],
  );

  const { table } = useDataTable({
    // All rows are in the browser: sort, filter and paginate them client-side
    mode: "client",
    data: TASKS,
    columns,
    initialState: {
      sorting: [{ id: "createdAt", desc: true }],
      pagination: { pageIndex: 0, pageSize: 10 },
    },
    getRowId: (row) => row.id,
  });

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table}>
        <DataTableSortMenu table={table} />
      </DataTableToolbar>
    </DataTable>
  );
}
