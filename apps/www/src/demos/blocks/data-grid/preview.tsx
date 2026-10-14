import * as React from "react";
import { DataGrid } from "@/registry/base/components/data-grid/data-grid";
import { DataGridFilterMenu } from "@/registry/base/components/data-grid/data-grid-filter-menu";
import { DataGridKeyboardShortcuts } from "@/registry/base/components/data-grid/data-grid-keyboard-shortcuts";
import { DataGridRowHeightMenu } from "@/registry/base/components/data-grid/data-grid-row-height-menu";
import { getDataGridSelectColumn } from "@/registry/base/components/data-grid/data-grid-select-column";
import { DataGridSortMenu } from "@/registry/base/components/data-grid/data-grid-sort-menu";
import { DataGridViewMenu } from "@/registry/base/components/data-grid/data-grid-view-menu";
import { useDataGrid } from "@/registry/base/hooks/use-data-grid";
import {
  type UndoRedoCellUpdate,
  useDataGridUndoRedo,
} from "@/registry/base/hooks/use-data-grid-undo-redo";
import { type Employee, employeeColumns, employees } from "./data";

const columns = [
  getDataGridSelectColumn<Employee>({ enableRowMarkers: true }),
  ...employeeColumns,
];

export function DataGridPreview() {
  const [data, setData] = React.useState(employees);

  const { trackCellsUpdate, trackRowsAdd, trackRowsDelete } =
    useDataGridUndoRedo({
      data,
      onDataChange: setData,
      getRowId: (row) => row.id,
    });

  const onDataChange = React.useCallback(
    (next: Employee[]) => {
      const updates: UndoRedoCellUpdate[] = [];
      for (let i = 0; i < data.length; i++) {
        const prev = data[i];
        const row = next[i];
        if (!prev || !row || prev === row) continue;
        for (const key of Object.keys(row) as (keyof Employee)[]) {
          if (!Object.is(prev[key], row[key])) {
            updates.push({
              rowId: prev.id,
              columnId: key,
              previousValue: prev[key],
              newValue: row[key],
            });
          }
        }
      }
      if (updates.length > 0) trackCellsUpdate(updates);
      setData(next);
    },
    [data, trackCellsUpdate],
  );

  const onRowAdd = React.useCallback(() => {
    const row: Employee = { id: crypto.randomUUID() };
    setData((prev) => [...prev, row]);
    trackRowsAdd([row]);
    return { rowId: row.id, columnId: "name" };
  }, [trackRowsAdd]);

  const onRowsAdd = React.useCallback(
    (count: number) => {
      const rows = Array.from({ length: count }, () => ({
        id: crypto.randomUUID(),
      }));
      setData((prev) => [...prev, ...rows]);
      trackRowsAdd(rows);
    },
    [trackRowsAdd],
  );

  const onRowsDelete = React.useCallback(
    (rows: Employee[]) => {
      trackRowsDelete(rows);
      const removed = new Set(rows);
      setData((prev) => prev.filter((row) => !removed.has(row)));
    },
    [trackRowsDelete],
  );

  const { table, ...dataGridProps } = useDataGrid({
    data,
    columns,
    onDataChange,
    onRowAdd,
    onRowsAdd,
    onRowsDelete,
    getRowId: (row) => row.id,
    initialState: {
      columnPinning: { start: ["select", "name"], end: [] },
    },
    enableSearch: true,
    enablePaste: true,
  });

  return (
    <div className="flex w-full flex-col gap-4">
      <div
        role="toolbar"
        aria-orientation="horizontal"
        className="flex items-center gap-2 self-end"
      >
        <DataGridFilterMenu table={table} />
        <DataGridSortMenu table={table} />
        <DataGridRowHeightMenu table={table} />
        <DataGridViewMenu table={table} />
      </div>
      <DataGridKeyboardShortcuts
        enableSearch
        enableUndoRedo
        enablePaste
        enableRowAdd
        enableRowsDelete
      />
      <DataGrid table={table} {...dataGridProps} height={420} />
    </div>
  );
}
