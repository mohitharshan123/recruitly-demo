import { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { Button, Flex, Group, Skeleton, TextInput } from "@mantine/core";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
  GridRowsProp,
} from "@mui/x-data-grid";

import FormDrawer from "./Form";
import { Company } from "../../../types";
import { generateColumns } from "./utils";
import { COMPANIES_PAGE_BREADCRUMBS } from "./constants";
import { useCompanies } from "../../../hooks/api/useCompanyApi";
import BreadcrumbsNav from "../../../components/BreadcrumbsNav";
import StyledDataGrid from "../../../components/StyledDataGrid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});
export type CompanyListProps = Pick<Company, "name" | "phone" | "ownerName">;

export const DEFAULT_ROW_WIDTH = 300;
const DEFAULT_PAGE_SIZE = 12;

const PER_PAGE_OPTIONS = [5, 10, 25];

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
    () =>
      generateColumns(data, (params: GridRowParams) => [
        <GridActionsCellItem
          icon={<IconEdit color="white" />}
          onClick={() => {
            const selectedCompany = data?.find(
              (company: Company) => company.id == params.id
            );
            setSelectedCompany(selectedCompany);
            open();
          }}
          label="Edit"
        />,
      ]),
    [data]
  );

  return (
    <ThemeProvider {...{ theme }}>
      <div>
        <Flex justify="space-between" align="center">
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
        </Flex>
        <div>
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} mt={6} height={40} />
            ))
          ) : (
            <div className="mt-10" style={{ width: "100%" }}>
              <div
                className="m-10"
                style={{ height: 660, width: "calc(100% - 150px)" }}
              >
                <StyledDataGrid
                  initialState={{
                    pagination: {
                      paginationModel: { pageSize: DEFAULT_PAGE_SIZE },
                    },
                  }}
                  pageSizeOptions={PER_PAGE_OPTIONS}
                  rows={rows}
                  columns={columns ?? []}
                  onRowClick={(row) =>
                    navigate(`/dashboard/companies/${row.id}`)
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <FormDrawer
        selectedCompany={selectedCompany}
        isOpen={opened}
        onClose={() => {
          close();
          setSelectedCompany(null);
        }}
      />
    </ThemeProvider>
  );
};

export default CompaniesList;
