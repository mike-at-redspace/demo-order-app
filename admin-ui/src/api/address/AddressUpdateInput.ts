import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  line1?: string | null;
  line2?: string | null;
  billingAddress?: CustomerUpdateManyWithoutAddressesInput;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  postalCode?: string | null;
  province?: string | null;
};
