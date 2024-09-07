import { Navigate, Route, Routes } from "react-router-dom";

import { Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger } from "@mantine/core";

import Navbar from "./Navbar";
import Logo from "../../assets/logo.svg";
import CompaniesList from "./Companies/List";
import { HEADER_HEIGHT, NAVBAR_WIDTH, ROUTES } from "../../constants";
import CompanyDetail from "./Companies/Detail";

const Dashboard: React.FC = () => {
  const [isNavbarOpened, { toggle }] = useDisclosure();

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
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/dashboard${ROUTES.companies}`} />}
          />
          <Route path={ROUTES.companies} Component={CompaniesList} />
          <Route path={ROUTES.company_detail} Component={CompanyDetail} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
