import { jest } from "@jest/globals";
import { fireEvent, screen } from "@testing-library/react";

import BreadcrumbsNav from "../../components/BreadcrumbsNav";

import "@testing-library/jest-dom";
import { renderWithMantineProvider } from ".";
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
    renderWithMantineProvider(<BreadcrumbsNav breadcrumbs={breadcrumbs} />);

    breadcrumbs.forEach((breadcrumb) => {
      expect(screen.getByText(breadcrumb.title)).toBeInTheDocument();
    });
  });

  test("navigates to the correct route when breadcrumb is clicked", () => {
    renderWithMantineProvider(<BreadcrumbsNav breadcrumbs={breadcrumbs} />);

    breadcrumbs.forEach((breadcrumb) => {
      const breadcrumbElement = screen.getByText(breadcrumb.title);
      fireEvent.click(breadcrumbElement);
      expect(mockNavigate).toHaveBeenCalledWith(breadcrumb.to);
    });
  });
});
