import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBox from "../SearchBox";

const mockSearch = jest.fn();

describe("SearchBox", () => {
  test("should render search box", () => {
    render(<SearchBox searchQuery={""} setSearchQuery={mockSearch} />);
    const inputElement = screen.getByRole("searchbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to enter search info by typing", () => {
    render(<SearchBox searchQuery={""} setSearchQuery={mockSearch} />);
    const inputElement = screen.getByRole("searchbox");
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "Banana" } });
    expect(inputElement.value).toBe("Banana");
  });
});
