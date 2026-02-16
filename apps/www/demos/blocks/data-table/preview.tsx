"use client"

import * as React from "react";
import { MailIcon, PlusIcon, RotateCcw, SearchIcon } from "lucide-react";
import { Badge, Button, InputGroup, InputGroupAddon, InputGroupInput, Tooltip, TooltipContent, TooltipTrigger } from "uilab-core";
import { AdvancedDataTable } from "@/registry/ionia/components/data-table";
import type { CellContext, ColumnDef } from "@tanstack/react-table";

type DataItem = {
  name: string;
  email: string;
  status: string;
  createdAt: string;
}

// columns.tsx
export const COLUMNS: ColumnDef<DataItem>[] = [
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: CellContext<DataItem, unknown>) => (
      <Badge variant="outline">{row.getValue('status')}</Badge>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Created At"
  }
]

export const SAMPLE_DATA: DataItem[] = [
  { name: "Alice", email: "alice@gmail.com", status: "Confirmed", createdAt: "2024-01-21" },
  { name: "Bob", email: "bob@gmail.com", status: "Is Pending", createdAt: "2024-01-30" },
  { name: "Cisne", email: "cisne@gmail.com", status: "Is Pending", createdAt: "2024-01-30" },
  { name: "Charlie", email: "charlie@gmail.com", status: "Success", createdAt: "2024-02-01" },
]

export function DataTablePreview() {
  const [emailFilter, setEmailFilter] = React.useState("");

  const paginationState = {
    pageIndex: 0,
    pageSize: 20,
  }

  return (
    <AdvancedDataTable
      columns={COLUMNS}
      data={SAMPLE_DATA.filter((item) =>
        item.name.toLowerCase().includes(emailFilter.toLowerCase())
      )}
      refetch={() => { }}
      leftHeader={
        <>
          <InputGroup>
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Filter emails..."
              value={emailFilter}
              onChange={(e) => setEmailFilter(e.target.value)}
            />
          </InputGroup>
          <Tooltip>
            <TooltipTrigger render={
              <Button variant="outline" size="icon">
                <RotateCcw />
              </Button>
            }>
            </TooltipTrigger>
            <TooltipContent>
              {"Reset filters"}
            </TooltipContent>
          </Tooltip>
          <Button type="submit">
            <SearchIcon />
            Search
          </Button>
        </>
      }
      rightHeader={<Button><PlusIcon />Add</Button>}
      pagination={paginationState}
    />
  );
}
