import { useDirection } from "@base-ui/react/direction-provider";
import { type RowData, Subscribe, type Table } from "@tanstack/react-table";
import { cn } from "cn";
import { Settings2Icon } from "lucide-react";
import * as React from "react";
import { Button } from "uilab-core";
import type { DataGridFeatures } from "@/registry/base/lib/data-grid-features";
import {
  Faceted,
  FacetedContent,
  FacetedEmpty,
  FacetedGroup,
  FacetedInput,
  FacetedItem,
  FacetedItemIndicator,
  FacetedList,
  FacetedTrigger,
} from "@/registry/base/ui/faceted";

interface DataGridViewMenuProps<TData extends RowData>
  extends React.ComponentProps<typeof FacetedContent> {
  table: Table<DataGridFeatures, TData>;
  disabled?: boolean;
}

export function DataGridViewMenu<TData extends RowData>({
  table,
  disabled,
  className,
  ...props
}: DataGridViewMenuProps<TData>) {
  const dir = useDirection();

  const columns = React.useMemo(
    () =>
      table
        .getAllColumns()
        .filter(
          (column) =>
            typeof column.accessorFn !== "undefined" && column.getCanHide(),
        ),
    [table],
  );

  return (
    <Subscribe source={table.atoms.columnVisibility}>
      {(columnVisibility) => (
        <Faceted
          multiple
          value={columns
            .filter((column) => columnVisibility[column.id] !== false)
            .map((column) => column.id)}
        >
          <FacetedTrigger
            render={
              <Button
                aria-label="Toggle columns"
                role="combobox"
                dir={dir}
                variant="outline"
                className="ms-auto hidden lg:flex"
                disabled={disabled}
              />
            }
          >
            <Settings2Icon className="text-muted-foreground" />
            View
          </FacetedTrigger>
          <FacetedContent
            dir={dir}
            align="center"
            className={cn("w-44", className)}
            {...props}
          >
            <FacetedInput placeholder="Search columns..." />
            <FacetedList>
              <FacetedEmpty>No columns found.</FacetedEmpty>
              <FacetedGroup>
                {columns.map((column) => (
                  <FacetedItem
                    key={column.id}
                    value={column.id}
                    keywords={[column.columnDef.meta?.label ?? column.id]}
                    onSelect={() => column.toggleVisibility()}
                  >
                    <span className="truncate">
                      {column.columnDef.meta?.label ?? column.id}
                    </span>
                    <FacetedItemIndicator />
                  </FacetedItem>
                ))}
              </FacetedGroup>
            </FacetedList>
          </FacetedContent>
        </Faceted>
      )}
    </Subscribe>
  );
}
