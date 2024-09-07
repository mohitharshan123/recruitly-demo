import apiClient from ".";
import { Company } from "../types";

const routes: Record<string, string> = {
  list: "company/list",
  update_or_create: "company",
};

const list = async () => await apiClient.get(routes.list);

const createOrUpdate = async (company: Company) =>
  await apiClient.post(routes.update_or_create, company);

const companiesApi = {
  list,
  createOrUpdate,
};

export default companiesApi;
