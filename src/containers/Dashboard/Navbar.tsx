import { useLocation, useNavigate } from "react-router-dom";

import { useLocalStorage } from "@mantine/hooks";
import { IconHome2, IconLogout } from "@tabler/icons-react";
import { rem, Stack, Tooltip, UnstyledButton, Text } from "@mantine/core";

import { LINKS } from "./constants";
import classes from "../../styles/navbar.module.css";
import { API_KEY_LS, ROUTES } from "../../constants";

type NavbarLinkProps = {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
};

const NavbarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
}: NavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        mt={15}
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(50), height: rem(30) }} stroke={1.5} />
        <Text hiddenFrom="sm">{label}</Text>
      </UnstyledButton>
    </Tooltip>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // eslint-disable-next-line  @typescript-eslint/no-unused-vars
  const [_, __, removeApiKey] = useLocalStorage({ key: API_KEY_LS });

  const active = LINKS.findIndex((link) => pathname.startsWith(link.to));

  const links = LINKS.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        navigate(link.to);
      }}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink
          icon={IconLogout}
          label="Logout"
          onClick={() => {
            removeApiKey();
            navigate(ROUTES.authentication);
          }}
        />
      </Stack>
    </nav>
  );
};

export default Navbar;
