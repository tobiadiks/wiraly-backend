import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SpeakerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="first_name" source="firstName" />
        <TextInput label="last_name" source="lastName" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Create>
  );
};
