import apiClient from ".";

const routes: Record<string, string> = {
  list: "company/list",
};

const list = async () => await apiClient.get(routes.list);

const companiesApi = {
  list,
};

export default companiesApi;
