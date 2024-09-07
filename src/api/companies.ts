import apiClient from ".";
import { Company } from "../types";

const routes: Record<string, string> = {
  list: "company/list",
  get: "company",
};

const list = async () => await apiClient.get(routes.list);

const get = async (id: string) => await apiClient.get(`${routes.get}/${id}`);

const createOrUpdate = async (company: Company) =>
  await apiClient.post(routes.get, company);

const companiesApi = {
  get,
  list,
  createOrUpdate,
};

export default companiesApi;
