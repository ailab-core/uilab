"use client"

import { BasicDataTable } from "@/registry/ionia/components/data-table";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { Badge } from "uilab-core";

type DataItem = {
  key: string;
  value: string;
  environment: string;
}

// columns.tsx
export const COLUMNS: ColumnDef<DataItem>[] = [
  {
    accessorKey: "key",
    header: "Key",
    cell: ({ row }: CellContext<DataItem, unknown>) => (
      <code>{row.getValue('key')}</code>
    )
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }: CellContext<DataItem, unknown>) => (
      <code>{row.getValue('value')}</code>
    )
  },
  {
    accessorKey: "environment",
    header: "Environment",
    cell: ({ row }: CellContext<DataItem, unknown>) => (
      <Badge variant="outline">{row.getValue('environment')}</Badge>
    )
  }
]

export const SAMPLE_DATA: DataItem[] = [
  { key: "API_KEY", value: "1234567890", environment: "Production" },
  { key: "DB_PASSWORD", value: "password123", environment: "Staging" },
  { key: "SECRET_KEY", value: "secretkey123", environment: "Development" },
]

export function DataTableBasic() {
  return (
    <BasicDataTable
      columns={COLUMNS}
      data={SAMPLE_DATA}
    />
  )
}
