import {
  DataGridSkeleton,
  DataGridSkeletonGrid,
  DataGridSkeletonToolbar,
} from "@/registry/base/components/data-grid/data-grid-skeleton";

export function DataGridSkeletonDemo() {
  return (
    <DataGridSkeleton className="flex w-full flex-col gap-4">
      <DataGridSkeletonToolbar actionCount={4} />
      <DataGridSkeletonGrid />
    </DataGridSkeleton>
  );
}
