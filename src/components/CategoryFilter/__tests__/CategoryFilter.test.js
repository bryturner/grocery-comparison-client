import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryFilter from "../CategoryFilter";
import userEvent from "@testing-library/user-event";

const mockedCategorySelect = jest.fn();

describe("CategorySelect", () => {
  test("should render a select input dropdown", () => {
    render(<CategoryFilter setCategory={mockedCategorySelect} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("should display default value as 'fruechte-gemuese' ", () => {
    render(<CategoryFilter setCategory={mockedCategorySelect} />);
    expect(screen.getByRole("combobox").value).toBe("fruechte-gemuese");
  });

  test("should allow user to change category", () => {
    render(<CategoryFilter setCategory={mockedCategorySelect} />);
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Milchprodukte & Eier" })
    );
    expect(
      screen.getByRole("option", {
        name: "Milchprodukte & Eier",
      }).selected
    ).toBe(true);
  });
});

describe("CategoryOption", () => {
  test("should correctly set default value", () => {
    render(<CategoryFilter setCategory={mockedCategorySelect} />);
    expect(
      screen.getByRole("option", {
        name: /Früchte & Gemüse/i,
      }).selected
    ).toBe(true);
  });

  test("should display the correct number of options", () => {
    render(<CategoryFilter setCategory={mockedCategorySelect} />);
    expect(screen.getAllByRole("option").length).toBe(9);
  });
});
