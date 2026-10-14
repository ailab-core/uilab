import { type RowData, Subscribe, type Table } from "@tanstack/react-table";
import {
  AlignVerticalSpaceAroundIcon,
  ChevronsDownUpIcon,
  EqualIcon,
  MinusIcon,
} from "lucide-react";
import type * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "uilab-core";
import type { DataGridFeatures } from "@/registry/base/lib/data-grid-features";
import type { RowHeightValue } from "@/registry/base/lib/data-grid-types";

const rowHeights = [
  {
    label: "Short",
    value: "short" as const,
    icon: (props: React.ComponentProps<"svg">) => <MinusIcon {...props} />,
  },
  {
    label: "Medium",
    value: "medium" as const,
    icon: (props: React.ComponentProps<"svg">) => <EqualIcon {...props} />,
  },
  {
    label: "Tall",
    value: "tall" as const,
    icon: (props: React.ComponentProps<"svg">) => (
      <AlignVerticalSpaceAroundIcon {...props} />
    ),
  },
  {
    label: "Extra Tall",
    value: "extra-tall" as const,
    icon: (props: React.ComponentProps<"svg">) => (
      <ChevronsDownUpIcon {...props} />
    ),
  },
] as const;

interface DataGridRowHeightMenuProps<TData extends RowData>
  extends React.ComponentProps<typeof SelectContent> {
  table: Table<DataGridFeatures, TData>;
  disabled?: boolean;
}

export function DataGridRowHeightMenu<TData extends RowData>({
  table,
  disabled,
  ...props
}: DataGridRowHeightMenuProps<TData>) {
  return (
    <Subscribe source={table.atoms.rowHeight}>
      {(rowHeight) => {
        const selectedRowHeight =
          rowHeights.find((option) => option.value === rowHeight) ??
          rowHeights[0];

        return (
          <Select
            value={rowHeight}
            onValueChange={(value: RowHeightValue | null) => {
              if (value == null) return;
              table.setRowHeight(value);
            }}
            disabled={disabled}
          >
            <SelectTrigger className="[&_svg:nth-child(2)]:hidden">
              <SelectValue placeholder="Row height">
                <selectedRowHeight.icon />
                {selectedRowHeight.label}
              </SelectValue>
            </SelectTrigger>
            <SelectContent {...props}>
              <SelectGroup>
                {rowHeights.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <option.icon />
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        );
      }}
    </Subscribe>
  );
}
