import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS } from "./queryKeys";

import companiesApi from "../../api/companies";
import { queryClient } from "../../App";

export const useCompanies = () =>
  useQuery([QUERY_KEYS.companies], companiesApi.list, {
    select: (res) => res?.data?.data,
  });

export const useCreateOrUpdateCompany = () =>
  useMutation(companiesApi.createOrUpdate, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.companies]);
    },
  });
