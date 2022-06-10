import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavoritesList from "../FavoritesList";

test("should render favorites list", async () => {
  render(<FavoritesList />);
  const headerElement = screen.getByText("Favorites List");
  expect(headerElement).toBeInTheDocument();
});
