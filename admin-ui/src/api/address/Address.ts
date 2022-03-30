import { Customer } from "../customer/Customer";

export type Address = {
  line1: string | null;
  line2: string | null;
  billingAddress?: Array<Customer>;
  city: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  postalCode: string | null;
  province: string | null;
  updatedAt: Date;
};
