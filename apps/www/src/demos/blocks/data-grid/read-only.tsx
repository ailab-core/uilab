import { DataGrid } from "@/registry/base/components/data-grid/data-grid";
import { useDataGrid } from "@/registry/base/hooks/use-data-grid";
import { employeeColumns, employees } from "./data";

export function DataGridReadOnly() {
  const { table, ...dataGridProps } = useDataGrid({
    data: employees,
    columns: employeeColumns,
    getRowId: (row) => row.id,
    readOnly: true,
  });

  return (
    <DataGrid
      table={table}
      {...dataGridProps}
      height={320}
      stretchColumns
      className="w-full"
    />
  );
}
