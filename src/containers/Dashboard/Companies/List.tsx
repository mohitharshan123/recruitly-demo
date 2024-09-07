import { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import {
  Button,
  Flex,
  Grid,
  Group,
  Skeleton,
  TextInput,
} from "@mantine/core";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";

import FormDrawer from "./Form";
import { Company } from "../../../types";
import { COMPANY_CARD_HEIGHT } from "../../../constants";
import { COMPANIES_PAGE_BREADCRUMBS } from "./constants";
import { useCompanies } from "../../../hooks/api/useCompanyApi";
import BreadcrumbsNav from "../../../components/BreadcrumbsNav";
import { generateColumns } from "./utils";
import { styled } from "@mui/material/styles";
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
        color:"black"
    },
    "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
      borderBottom: "1px solid #303030",
      color:"black",
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
  

export type CompanyListProps = Pick<
  Company,
  "name" | "phone" | "ownerName"
>;

const CompaniesList = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useCompanies();
  const [searchQuery, setSearchQuery] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const filteredData = data?.filter((company: Company) =>
    company.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const rows: GridRowsProp = filteredData;

  const columns: GridColDef[] | null = useMemo(
    () => generateColumns(data),
    [data]
  );

  return (
    <>
      <div>
        <BreadcrumbsNav breadcrumbs={COMPANIES_PAGE_BREADCRUMBS} />
        <Flex justify="flex-end" p={10}>
          <Group>
            <TextInput
              placeholder="Search companies"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.currentTarget.value)}
              leftSection={<IconSearch size={16} />}
              style={{ width: 250 }}
            />
            <Button leftSection={<IconPlus />} onClick={open}>
              Add Company
            </Button>
          </Group>
        </Flex>

        <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
          {isLoading ? (
            Array.from({ length: 20 }).map((_, index) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={index} p={40}>
                <Skeleton mt={6} height={COMPANY_CARD_HEIGHT} />
              </Grid.Col>
            ))
          ) : (
            <div className="mt-10" style={{ height: 650 }}>
              <div className="m-10" style={{ height: 600, width: "80vw" }}>
                <StyledDataGrid
                  initialState={{
                    ...data.initialState,
                    pagination: { paginationModel: { pageSize: 10 } },
                  }}
                  pageSizeOptions={[5, 10, 25]}
                  rows={rows}
                  columns={columns ?? []}
                />
              </div>
            </div>
          )}
        </Grid>
      </div>
      <FormDrawer
        selectedCompany={selectedCompany}
        isOpen={opened}
        onClose={() => {
          close();
          setSelectedCompany(null);
        }}
      />
    </>
  );
};

export default CompaniesList;
