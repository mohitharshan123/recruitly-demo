import apiClient from ".";
import { FormValues } from "../containers/Dashboard/Companies/Form/constants";

const routes: Record<string, string> = {
  list: "company/list",
  get: "company",
};

const list = async () => await apiClient.get(routes.list);

const get = async (id: string) => await apiClient.get(`${routes.get}/${id}`);

const createOrUpdate = async (company: FormValues) =>
  await apiClient.post(routes.get, company);

const companiesApi = {
  get,
  list,
  createOrUpdate,
};

export default companiesApi;
