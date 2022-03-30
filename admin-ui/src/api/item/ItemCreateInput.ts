import { OrderItemCreateNestedManyWithoutItemsInput } from "./OrderItemCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutItemsInput;
  price?: number | null;
};
