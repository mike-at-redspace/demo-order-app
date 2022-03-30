import { OrderItem } from "../orderItem/OrderItem";

export type Item = {
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  updatedAt: Date;
};
