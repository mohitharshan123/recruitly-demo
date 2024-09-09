import { screen } from "@testing-library/react";
import { IconX } from "@tabler/icons-react";
import IconButton from "../../components/IconButton";
import "@testing-library/jest-dom";
import { renderWithMantineProvider } from ".";

describe("IconButton", () => {
  test("renders button with icon and text", () => {
    renderWithMantineProvider(
      <IconButton icon={<IconX size={16} />}>Click Me</IconButton>
    );

    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("applies additional props correctly", () => {
    renderWithMantineProvider(
      <IconButton
        icon={<IconX size={16} />}
        className="custom-class"
        style={{ color: "red" }}
        aria-label="Custom Button"
      >
        Custom Button
      </IconButton>
    );

    const button = screen.getByRole("button", { name: /custom button/i });

    expect(button).toHaveClass("custom-class");
    expect(button).toHaveStyle("color: red");
    expect(button).toHaveAttribute("aria-label", "Custom Button");
  });
});
