import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  billingAddress?: AddressWhereUniqueInput | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  shippingAdress?: AddressWhereUniqueInput | null;
};
