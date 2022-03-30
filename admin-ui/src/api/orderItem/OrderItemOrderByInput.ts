import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  qty?: SortOrder;
  updatedAt?: SortOrder;
};
