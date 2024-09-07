import { useState } from "react";

import { IconHome2, IconLogout } from "@tabler/icons-react";
import { rem, Stack, Tooltip, UnstyledButton } from "@mantine/core";

import { LINKS, SELECTED_LINK } from "./constants";
import classes from "../../styles/navbar.module.css";
import { useLocalStorage } from "@mantine/hooks";
import { API_KEY_LS, ROUTES } from "../../constants";
import { useNavigate } from "react-router-dom";

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
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [_, __, removeApiKey] = useLocalStorage({ key: API_KEY_LS });
  const [active, setActive] = useState(SELECTED_LINK.DASHBOARD);

  const links = LINKS.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
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
