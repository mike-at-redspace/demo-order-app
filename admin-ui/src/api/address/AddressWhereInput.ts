import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  line1?: StringNullableFilter;
  line2?: StringNullableFilter;
  billingAddress?: CustomerListRelationFilter;
  city?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  postalCode?: StringNullableFilter;
  province?: StringNullableFilter;
};
