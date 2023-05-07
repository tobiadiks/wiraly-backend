import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Businesses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="business_name" source="business_name" />
        <TextField label="date_created" source="date_created" />
        <TextField label="date_updated" source="date_updated" />
        <TextField label="email" source="email" />
        <BooleanField label="email_verified" source="email_verified" />
        <TextField label="ID" source="id" />
        <TextField label="logo" source="logo" />
        <TextField label="phone" source="phone" />
        <TextField label="Roles" source="roles" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
