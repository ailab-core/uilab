import {
  DataList,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "@/registry/classic/blocks/data-list";

export default function DataListDemo() {
  return (
    <DataList className="max-w-md">
      <DataListItem>
        <DataListLabel>Name</DataListLabel>
        <DataListValue>John Doe</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Email</DataListLabel>
        <DataListValue>john.doe@example.com</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Phone</DataListLabel>
        <DataListValue>+1 (555) 123-4567</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Status</DataListLabel>
        <DataListValue>
          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            Active
          </span>
        </DataListValue>
      </DataListItem>
    </DataList>
  );
}
