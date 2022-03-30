import { Item } from "../item/Item";
import { Order } from "../order/Order";

export type OrderItem = {
  createdAt: Date;
  discount: number | null;
  id: string;
  item?: Item | null;
  order?: Order | null;
  price: number | null;
  qty: number | null;
  updatedAt: Date;
};
