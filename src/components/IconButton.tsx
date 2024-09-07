import React from "react";
import { Button, ButtonProps } from "@mantine/core";

/**
 * IconButton component that renders a button with an icon and optional text.
 *
 * @param {React.ReactElement} icon - A React component or element to be used as the icon.
 * @param {ButtonProps} props - Additional props to be passed to the Mantine Button component, including children for text or other content.
 *
 */
const IconButton: React.FC<{ icon: React.ReactElement } & ButtonProps> = ({
  icon: Icon,
  children,
  ...props
}) => (
  <Button leftSection={Icon} variant="default" radius="xl" {...props}>
    {children}
  </Button>
);

export default IconButton;
