import { OrderItemUpdateManyWithoutItemsInput } from "./OrderItemUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutItemsInput;
  price?: number | null;
};
