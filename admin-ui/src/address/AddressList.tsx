import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Addresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address Line 1" source="line1" />
        <TextField label="Address Line 2" source="line2" />
        <TextField label="City" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Postal Code" source="postalCode" />
        <TextField label="Province" source="province" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
