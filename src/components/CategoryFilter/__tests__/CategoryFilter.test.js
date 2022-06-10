import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryFilter from "../CategoryFilter";
import userEvent from "@testing-library/user-event";

const mockedCategorySelect = jest.fn();

describe("CategorySelect", () => {
  test("should render a select input dropdown", () => {
    render(<CategoryFilter setCategory={mockedCategorySelect} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
  });

  test("should display default value as 'all' ", () => {
    render(<CategoryFilter setCategory={mockedCategorySelect} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement.value).toBe("all");
  });

  test("should allow user to change category", () => {
    render(<CategoryFilter setCategory={mockedCategorySelect} />);
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Milchprodukte & Eier" })
    );
    const optionElement = screen.getByRole("option", {
      name: "Milchprodukte & Eier",
    });
    expect(optionElement.selected).toBe(true);
  });
});

describe("CategoryOption", () => {
  test("should correctly set default value", () => {
    render(<CategoryFilter setCategory={mockedCategorySelect} />);
    const optionElement = screen.getByRole("option", { name: "All" });
    expect(optionElement.selected).toBe(true);
  });

  test("should display the correct number of options", () => {
    render(<CategoryFilter setCategory={mockedCategorySelect} />);
    const optionElements = screen.getAllByRole("option");
    expect(optionElements.length).toBe(10);
  });
});
