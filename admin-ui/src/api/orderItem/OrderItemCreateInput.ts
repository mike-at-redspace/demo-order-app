import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemCreateInput = {
  discount?: number | null;
  item?: ItemWhereUniqueInput | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  qty?: number | null;
};
