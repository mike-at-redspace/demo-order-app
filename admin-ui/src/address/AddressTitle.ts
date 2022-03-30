import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "line1";

export const AddressTitle = (record: TAddress): string => {
  return record.line1 || record.id;
};
