import {
  GridColDef,
  GridRowParams,
} from "@mui/x-data-grid";

import { Company } from "../../../types";
import { CompanyListProps, DEFAULT_ROW_WIDTH } from "./List";

const columnMappings: {
  [key in keyof CompanyListProps]: string;
} = {
  name: "Company Name",
  phone: "Phone",
  ownerName: "Owner Name",
};

export const generateColumns = (
  data: Company[],
  getActions: (params: GridRowParams) => void
): GridColDef[] | null => {
  if (!data) return null;
  const columns: GridColDef[] = [];

  const fields =
    data.length > 0 ? (Object.keys(data[0]) as (keyof CompanyListProps)[]) : [];

  const actionColumn = {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: DEFAULT_ROW_WIDTH,
    getActions,
  };

  for (const key of fields) {
    if (columnMappings[key]) {
      columns.push({
        field: key,
        headerName: columnMappings[key],
        width: DEFAULT_ROW_WIDTH,
      });
    }
  }

  columns.push(actionColumn);

  return columns;
};
