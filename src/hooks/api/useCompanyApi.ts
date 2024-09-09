import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS } from "./queryKeys";

import companiesApi from "../../api/companies";
import { queryClient } from "../../queryClient";

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

export const useGetCompany = (id: string) =>
  useQuery([QUERY_KEYS.companies, id], () => companiesApi.get(id), {
    select: (res) => res?.data,
    enabled: !!id,
  });
