import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  line1?: string | null;
  line2?: string | null;
  billingAddress?: CustomerCreateNestedManyWithoutAddressesInput;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  postalCode?: string | null;
  province?: string | null;
};
