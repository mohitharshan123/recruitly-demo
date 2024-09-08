import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  fontFamily: "Segoe UI Symbol",
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  height: "100%",
  width: "100%",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "dark" ? "#1d1d1d" : "#fafafa",
    borderBottom: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#303030" : "#f0f0f0",
  },

  "& .MuiDataGrid-columnHeader": {
    color: theme.palette.mode === "dark" ? "#e0e0e0" : "#000000",
    borderBottom: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#303030" : "#f0f0f0",
    backgroundColor: theme.palette.mode === "dark" ? "#2c2c2c" : "#f5f5f5",
  },

  "& .MuiDataGrid-columnHeaderTitle": {
    color: theme.palette.mode === "dark" ? "#e0e0e0" : "#000000",
  },

  "& .MuiDataGrid-cell": {
    color: theme.palette.mode === "dark" ? "#e0e0e0" : "#000000",
    borderBottom: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#303030" : "#f0f0f0",
  },

  "& .MuiDataGrid-cell:hover": {
    cursor: "pointer",
  },
  "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:active": {
    color: theme.palette.mode === "dark" ? "#e0e0e0" : "#000000",
  },

  "& .MuiPaginationItem-root": {
    borderRadius: 0,
    color: theme.palette.mode === "dark" ? "#e0e0e0" : "#000000",
  },

  "& .MuiToolbar-root": {
    color: theme.palette.mode === "dark" ? "#e0e0e0" : "#000000",
  },
}));

export default StyledDataGrid;
