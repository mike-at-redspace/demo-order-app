import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  line1?: SortOrder;
  line2?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postalCode?: SortOrder;
  province?: SortOrder;
  updatedAt?: SortOrder;
};
