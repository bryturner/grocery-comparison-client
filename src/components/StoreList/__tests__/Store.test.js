import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StoreList from "../StoreList";
import { allProducts } from "../../../__mocks__/products";

const mockedFavorites = jest.fn();
const mockedGroceryList = jest.fn();

describe("StoreList", () => {
  test("should render store name", () => {
    render(
      <StoreList
        storeName="Coop"
        category={"all"}
        searchQuery={""}
        products={[]}
        favorites={{}}
        groceryList={{}}
        setFavorites={mockedFavorites}
        setGroceryList={mockedGroceryList}
      />
    );
    const headerElement = screen.getByText(/coop/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("should render a list of products", () => {
    render(
      <StoreList
        storeName=""
        category={"all"}
        searchQuery={""}
        products={allProducts}
        favorites={{}}
        groceryList={{}}
        setFavorites={mockedFavorites}
        setGroceryList={mockedGroceryList}
      />
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("should render products only from given store", () => {
    render(
      <StoreList
        storeName="Coop"
        category={"all"}
        searchQuery={""}
        products={allProducts}
        favorites={{}}
        groceryList={{}}
        setFavorites={mockedFavorites}
        setGroceryList={mockedGroceryList}
      />
    );
    expect(screen.getAllByRole("listitem").length).toBe(5);
  });
});
