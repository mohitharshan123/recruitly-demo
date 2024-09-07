import { useQuery } from "react-query";
import { QUERY_KEYS } from "./queryKeys";

import companiesApi from "../../api/companies";

export const useCompanies = () =>
  useQuery([QUERY_KEYS.companies], companiesApi.list);
