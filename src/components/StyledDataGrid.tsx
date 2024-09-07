import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color: "rgba(255,255,255,0.85)",
  fontFamily: "Segoe UI Symbol",
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: "#1d1d1d",
    ...theme.applyStyles("light", {
      backgroundColor: "#fafafa",
    }),
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    border: "1px solid #303030",
    ...theme.applyStyles("dark", {
      borderColor: "#f0f0f0",
    }),
  },
  ".MuiDataGrid-columnHeaderTitleContainer": {
    color: "black",
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: "1px solid #303030",
    color: "black",
    ...theme.applyStyles("dark", {
      borderBottomColor: "#f0f0f0",
    }),
  },
  "& .MuiDataGrid-cell": {
    color: "white",
    ...theme.applyStyles("dark", {
      color: "rgba(0,0,0,.85)",
    }),
  },
  "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:active": {
    color: "white",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
    color: "white",
  },
  "& .MuiToolbar-root": {
    borderRadius: 0,
    color: "white",
  },
  ...theme.applyStyles("dark", {
    color: "rgba(0,0,0,.85)",
  }),
}));

export default StyledDataGrid;
