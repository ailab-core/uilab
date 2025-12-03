import {
  DataList,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "@/registry/classic/blocks/data-list";
import { Badge } from "uilab-core";

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
          <Badge variant="destructive"> Inactive </Badge>
        </DataListValue>
      </DataListItem>
    </DataList>
  );
}
