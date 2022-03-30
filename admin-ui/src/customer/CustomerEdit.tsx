import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { OrderTitle } from "../order/OrderTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="address.id"
          reference="Address"
          label="Billing Address"
        >
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="order"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="address.id"
          reference="Address"
          label="Shipping Address"
        >
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
