import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
