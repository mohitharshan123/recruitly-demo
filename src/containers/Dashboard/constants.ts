import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconGauge, IconProps, Icon } from "@tabler/icons-react";
import { ROUTES } from "../../constants";

export enum SELECTED_LINK {
  DASHBOARD = 0,
  SETTINGS = 1,
}

export const LINKS: Array<{
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  label: string;
  to: string;
}> = [
  { icon: IconGauge, label: "Companies", to: `/dashboard${ROUTES.companies}` },
];
