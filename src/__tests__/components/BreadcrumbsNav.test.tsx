import { jest } from "@jest/globals";
import { MantineProvider } from "@mantine/core";
import { fireEvent, render, screen } from "@testing-library/react";

import BreadcrumbsNav from "../../components/BreadcrumbsNav";

import "@testing-library/jest-dom";
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("BreadcrumbsNav", () => {
  const breadcrumbs = [
    { title: "Home", to: "/" },
    { title: "Products", to: "/products" },
    { title: "Electronics", to: "/products/electronics" },
  ];

  test("renders breadcrumbs correctly", () => {
    render(
      <MantineProvider>
        <BreadcrumbsNav breadcrumbs={breadcrumbs} />
      </MantineProvider>
    );

    breadcrumbs.forEach((breadcrumb) => {
      expect(screen.getByText(breadcrumb.title)).toBeInTheDocument();
    });
  });

  test("navigates to the correct route when breadcrumb is clicked", () => {
    render(
      <MantineProvider>
        <BreadcrumbsNav breadcrumbs={breadcrumbs} />
      </MantineProvider>
    );

    breadcrumbs.forEach((breadcrumb) => {
      const breadcrumbElement = screen.getByText(breadcrumb.title);
      fireEvent.click(breadcrumbElement);
      expect(mockNavigate).toHaveBeenCalledWith(breadcrumb.to);
    });
  });
});
