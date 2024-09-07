import React from "react";

import { useParams } from "react-router-dom";

import { Card, Divider, Stack, Text } from "@mantine/core";

import Header from "./Header";
import { Company } from "../../../../types";
import HeadOfficeInfo from "./HeadOfficeInfo";
import { ROUTES } from "../../../../constants";
import AdditionalDetails from "./AdditionalDetails";
import { COMPANIES_PAGE_BREADCRUMBS } from "../constants";
import BreadcrumbsNav from "../../../../components/BreadcrumbsNav";
import { useGetCompany } from "../../../../hooks/api/useCompanyApi";
import DetailSkeleton from "./Skeleton";

const CompanyDetail: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();

  const { data, isLoading } = useGetCompany(companyId || "");

  const {
    name = "",
    description = "",
    imageUrl = "",
    website = "",
    phone = "",
    headOffice = {},
    ownerName = "",
    sectors = [],
    industries = [],
  } = data as Company || {};

  const breadcrumbs = [
    ...COMPANIES_PAGE_BREADCRUMBS,
    { title: name, to: `/dashboard${ROUTES.companies}/${companyId}` },
  ];

  return (
    <div>
      <BreadcrumbsNav breadcrumbs={breadcrumbs} />
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <Stack mt={20}>
          <Header {...{ name, imageUrl, website, phone, ownerName }} />

          <Divider my="sm" />

          <Card padding="lg" shadow="sm">
            <Text size="lg" fw={500}>
              Description
            </Text>
            <Text mt="md">{description || "No description available"}</Text>
          </Card>

          <Divider my="sm" />

          <HeadOfficeInfo {...{ headOffice }} />

          <Divider my="sm" />
          <AdditionalDetails {...{ sectors, industries }} />
        </Stack>
      )}
    </div>
  );
};

export default CompanyDetail;
