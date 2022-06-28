import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StoreList from "../StoreList";
import { testProducts } from "../../../__mocks__/testProductsList";
import { testUser1, testUser2 } from "../../../__mocks__/users";

const mockedFavorites = jest.fn();
const mockedGroceryList = jest.fn();
const mockedSelectedProduct = jest.fn();

test("", () => {
  render();

  expect();
});

describe("StoreList", () => {
  test("should render store name", () => {
    render(
      <StoreList
        storeName="Coop"
        category={"fruechte-gemuese"}
        filteredProducts={testProducts}
        products={testProducts}
        user={testUser1}
        favoritesList={[]}
        setFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
        key="Coop"
      />
    );

    expect(screen.getByText(/coop/i)).toBeInTheDocument();
  });

  test("should render a list of fruit and vegetable products", () => {
    render(
      <StoreList
        storeName="Coop"
        category={"fruechte-gemuese"}
        filteredProducts={testProducts}
        products={testProducts}
        user={testUser1}
        favoritesList={[]}
        setFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
        key="Coop"
      />
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("should render products in the matching store", () => {
    render(
      <StoreList
        storeName="Coop"
        category={"fruechte-gemuese"}
        filteredProducts={testProducts}
        products={testProducts}
        user={testUser1}
        favoritesList={[]}
        setFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
        key="Coop"
      />
    );
    expect(screen.getAllByRole("listitem").length).toBe(5);
  });
});
