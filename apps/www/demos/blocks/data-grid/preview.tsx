"use client"

import { DataGridToolbar, DataGrid as ReactDataGrid } from "@/registry/ionia/components/data-grid";
import type { Column } from "react-data-grid";
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "uilab-core";
import { RefreshCcwIcon } from "lucide-react";
import "react-data-grid/lib/styles.css";

type DataItem = {
  name: string;
  email: string;
  status: string;
  createdAt: string;
}

const COLUMNS: Array<Column<DataItem>> = [
  {
    key: "name",
    name: "Name",
  },
  {
    key: "email",
    name: "Email",
  },
  {
    key: "status",
    name: "Status",
  },
  {
    key: "createdAt",
    name: "Created At",
  }
]

export const SAMPLE_DATA: DataItem[] = [
  { name: "Alice", email: "alice@gmail.com", status: "Confirmed", createdAt: "2024-01-21" },
  { name: "Bob", email: "bob@gmail.com", status: "Is Pending", createdAt: "2024-01-30" },
  { name: "Cisne", email: "cisne@gmail.com", status: "Is Pending", createdAt: "2024-01-30" },
  { name: "Charlie", email: "charlie@gmail.com", status: "Success", createdAt: "2024-02-01" },
]

export function DataGridPreview() {
  return (
    <div className="w-full">
      <DataGridToolbar>
        <Tooltip>
          <TooltipTrigger render={
            <Button
              variant="outline"
              size="icon"
              className="ml-auto"
              onClick={() => { }}
            >
              <RefreshCcwIcon />
            </Button>
          } />
          <TooltipContent side="bottom">
            Refresh
          </TooltipContent>
        </Tooltip>
      </DataGridToolbar>
      <ReactDataGrid
        columns={COLUMNS}
        rows={SAMPLE_DATA}
        rowKeyGetter={(row: any) => row.name}
      />
    </div>
  )
}
