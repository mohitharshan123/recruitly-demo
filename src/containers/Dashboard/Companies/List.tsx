import React, { useState } from "react";
import { Grid, Skeleton, TextInput, Button, Group, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { Company } from "../../../types";
import CompanyCard from "../../../components/CompanyCard";
import { useCompanies } from "../../../hooks/api/useCompanyApi";
import { COMPANY_CARD_HEIGHT } from "../../../constants";
import FormDrawer from "./Form";

const CompaniesList = () => {
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
        <Flex justify="flex-end">
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
                    handleEditClick={() => {
                      setSelectedCompany(company);
                      open();
                    }}
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
