import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SpeakerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Speakers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="first_name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="last_name" source="lastName" />
        <TextField label="password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
