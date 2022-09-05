import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SpeakerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="first_name" source="firstName" />
        <TextInput label="last_name" source="lastName" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
