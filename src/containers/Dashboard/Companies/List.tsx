import { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { Button, Flex, Grid, Group, Skeleton, TextInput } from "@mantine/core";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
  GridRowsProp,
} from "@mui/x-data-grid";

import FormDrawer from "./Form";
import { Company } from "../../../types";
import { generateColumns } from "./utils";
import { COMPANY_CARD_HEIGHT } from "../../../constants";
import { COMPANIES_PAGE_BREADCRUMBS } from "./constants";
import { useCompanies } from "../../../hooks/api/useCompanyApi";
import BreadcrumbsNav from "../../../components/BreadcrumbsNav";
import StyledDataGrid from "../../../components/StyledDataGrid";

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
            <div className="mt-10" style={{ height: 750 }}>
              <div
                className="m-10"
                style={{ height: 660, width: DEFAULT_ROW_WIDTH * 4 }}
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
