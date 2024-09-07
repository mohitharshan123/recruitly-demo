import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconGauge, IconProps, Icon } from "@tabler/icons-react";

export enum SELECTED_LINK {
  DASHBOARD = 0,
  SETTINGS = 1,
}

export const LINKS: Array<{
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  label: string;
}> = [{ icon: IconGauge, label: "Companies" }];
