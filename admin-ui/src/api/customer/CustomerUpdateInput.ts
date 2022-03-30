import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  billingAddress?: AddressWhereUniqueInput | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  shippingAdress?: AddressWhereUniqueInput | null;
};
