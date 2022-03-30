import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  billingAddressId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  shippingAdressId?: SortOrder;
  updatedAt?: SortOrder;
};
