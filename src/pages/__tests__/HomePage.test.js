import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../HomePage";
import { ThemeProvider } from "styled-components";
import { theme } from "../../components/ThemeProvider/Theme";

const MockHomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
};

describe("Homepage", () => {
  test("should only show products with high comparison match", () => {
    render(<MockHomePage />);

    expect();
  });

  //   test("should only show products with high comparison match", () => {
  // 	render(<HomePage />);
  // 	userEvent.selectOptions(
  // 	  screen.getByRole("combobox"),
  // 	  screen.getByRole("option", { name: "Fleisch & Fisch" })
  // 	);
  // 	expect(screen.getByTestId("product-15")).toBeInTheDocument();
  //  });
});
