import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Store from "../Store";

test("should render store name", async () => {
  render(<Store storeName="Coop" />);
  const headerElement = screen.getByText(/coop/i);
  expect(headerElement).toBeInTheDocument();
});
