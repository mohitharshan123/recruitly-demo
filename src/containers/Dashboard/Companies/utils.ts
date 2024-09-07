import { GridColDef } from "@mui/x-data-grid";
import { Company } from "../../../types";
import { CompanyListProps } from "./List";

const columnMappings: {
  [key in keyof CompanyListProps]: string;
} = {
  name: "Company Name",
  phone: "Phone",
  ownerName: "Owner Name",
};

export const generateColumns = (data: Company[]): GridColDef[] | null => {
  if (!data) return null;
  const columns: GridColDef[] = [];

  const fields =
    data.length > 0 ? (Object.keys(data[0]) as (keyof CompanyListProps)[]) : [];

  for (const key of fields) {
    if (columnMappings[key]) {
      columns.push({
        field: key,
        headerName: columnMappings[key],
        width: 300,
      });
    }
  }

  return columns;
};
