import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="business_name" source="business_name" />
        <DateTimeInput label="date_created" source="date_created" />
        <DateTimeInput label="date_updated" source="date_updated" />
        <TextInput label="email" source="email" type="email" />
        <BooleanInput label="email_verified" source="email_verified" />
        <TextInput label="logo" source="logo" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="phone" source="phone" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
