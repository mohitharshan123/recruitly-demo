import { Grid, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger } from "@mantine/core";

import Navbar from "./Navbar";
import { Company } from "../../types";
import Logo from "../../assets/logo.svg";
import CompanyCard from "../../components/CompanyCard";
import { useCompanies } from "../../hooks/api/useCompanyApi";
import { COMPANY_CARD_HEIGHT, HEADER_HEIGHT, NAVBAR_WIDTH } from "../../constants";

const Dashboard: React.FC = () => {
  const { data, isLoading } = useCompanies();
  const [isNavbarOpened, { toggle }] = useDisclosure();

  if (isLoading) return null;

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      navbar={{
        width: NAVBAR_WIDTH,
        breakpoint: "sm",
        collapsed: { mobile: !isNavbarOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group>
          <Burger
            opened={isNavbarOpened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            ml={10}
          />
          <img
            src={Logo}
            alt="logo-icon"
            height={50}
            width={150}
            className="object-fit p-2"
          />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
          {isLoading
            ? Array.from({ length: 20 }).map((_, index) => (
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={index} p={40}>
                  <Skeleton key={index} mt={6} height={COMPANY_CARD_HEIGHT} />
                </Grid.Col>
              ))
            : data?.map(
                ({
                  id,
                  imageUrl,
                  name,
                  phone,
                  ownerName,
                  website,
                  sectors,
                }: Company) => (
                  <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={id} p={40}>
                    <CompanyCard
                      {...{
                        imageUrl,
                        name,
                        phone,
                        ownerName,
                        website,
                        sectors,
                      }}
                    />
                  </Grid.Col>
                )
              )}
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
