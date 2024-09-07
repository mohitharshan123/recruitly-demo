import React from "react";
import { useNavigate } from "react-router-dom";
import { Anchor, Breadcrumbs } from "@mantine/core";

type Breadcrumb = {
  title: string;
  to: string;
};

type BreadcrumbsNavProps = {
  breadcrumbs: Breadcrumb[];
};

/**
 * A component that renders breadcrumbs for navigation.
 *
 * @param {Object} props - Component props.
 * @param {Breadcrumb[]} props.breadcrumbs - An array of breadcrumb items where each item has a title and a URL.
 * @returns {JSX.Element} The rendered breadcrumbs.
 */
const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ breadcrumbs }) => {
  const navigate = useNavigate();

  return (
    <Breadcrumbs>
      {breadcrumbs.map((item, index) => (
        <Anchor
          key={index}
          onClick={(e) => {
            e.preventDefault();
            navigate(item.to);
          }}
          href={item.to}
        >
          {item.title}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
