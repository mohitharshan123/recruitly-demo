export type Address = {
  addressLine: string | null;
  addressLine2: string | null;
  cityName: string | null;
  regionName: string | null;
  postCode: string | null;
  countryCode: string;
  countryName: string | null;
  cityOrRegionAndPostCode: string;
  country: string | null;
};

export type HeadOffice = {
  id: string | null;
  name: string | null;
  address: Address;
};

export type Category = {
  id: string;
  name: string;
};
export type Company = {
  id: string;
  reference: string;
  name: string;
  imageUrl: string | null;
  description: string | null;
  headOffice: HeadOffice;
  website: string;
  ownerName: string;
  email: string;
  phone: string;
  industries: Category[];
  sectors: Category[];
  parent: string | null;
  companySizeCode: string;
  udfList: string[];
  type: string;
  logoUrl: string | null;
  domain: string | null;
  languages: string | null;
  labels: string[];
  apolloRecord: string | null;
  createdOn: string;
  modifiedOn: string;
  additionalParams: string;
};
