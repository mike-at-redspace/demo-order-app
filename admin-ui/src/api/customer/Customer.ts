import { Address } from "../address/Address";
import { Order } from "../order/Order";

export type Customer = {
  billingAddress?: Address | null;
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  shippingAdress?: Address | null;
  updatedAt: Date;
};
