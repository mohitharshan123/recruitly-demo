import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { Button, Flex, Grid, Group, Skeleton, TextInput } from "@mantine/core";

import FormDrawer from "./Form";
import { Company } from "../../../types";
import { COMPANY_CARD_HEIGHT } from "../../../constants";
import { COMPANIES_PAGE_BREADCRUMBS } from "./constants";
import CompanyCard from "../../../components/CompanyCard";
import { useCompanies } from "../../../hooks/api/useCompanyApi";
import BreadcrumbsNav from "../../../components/BreadcrumbsNav";

const CompaniesList = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useCompanies();
  const [searchQuery, setSearchQuery] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const filteredData = data?.filter((company: Company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
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
          {isLoading
            ? Array.from({ length: 20 }).map((_, index) => (
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={index} p={40}>
                  <Skeleton mt={6} height={COMPANY_CARD_HEIGHT} />
                </Grid.Col>
              ))
            : filteredData?.map((company: Company) => (
                <Grid.Col
                  span={{ base: 12, md: 6, lg: 3 }}
                  key={company.id}
                  p={40}
                >
                  <CompanyCard
                    imageUrl={company.imageUrl}
                    name={company.name}
                    phone={company.phone}
                    ownerName={company.ownerName}
                    website={company.website}
                    sectors={company.sectors}
                    handleEditClick={(
                      e: React.MouseEvent<HTMLButtonElement>
                    ) => {
                      e.stopPropagation();
                      setSelectedCompany(company);
                      open();
                    }}
                    handleCardClick={() =>
                      navigate(`/dashboard/companies/${company.id}`)
                    }
                  />
                </Grid.Col>
              ))}
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
