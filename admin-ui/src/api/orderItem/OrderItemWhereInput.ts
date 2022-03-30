import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderItemWhereInput = {
  discount?: FloatNullableFilter;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  qty?: IntNullableFilter;
};
