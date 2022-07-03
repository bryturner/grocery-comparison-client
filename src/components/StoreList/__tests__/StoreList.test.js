import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StoreList from "../StoreList";
import { testProducts } from "../../../__mocks__/testProductsList";
import { testUser1, testUser2 } from "../../../__mocks__/users";
import { ThemeProvider } from "styled-components";
import { theme } from "../../ThemeProvider/Theme";

const mockedFavorites = jest.fn();
const mockedGroceryList = jest.fn();
const mockedSelectedProduct = jest.fn();

const MockStoreList = ({
  storeName,
  category,
  filteredProducts,
  products,
  user,
  favoritesList,
  setFavoritesList,
  groceryList,
  setGroceryList,
  selectedProduct,
  setSelectedProduct,
  key,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreList
        storeName={storeName}
        category={category}
        filteredProducts={filteredProducts}
        products={products}
        user={user}
        favoritesList={favoritesList}
        setFavoritesList={setFavoritesList}
        groceryList={groceryList}
        setGroceryList={setGroceryList}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        key={key}
      />
    </ThemeProvider>
  );
};
test("", () => {
  render();

  expect();
});

describe("StoreList", () => {
  test("should render store name", () => {
    render(
      <MockStoreList
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
      <MockStoreList
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

  //   test("should render products in the matching store", () => {
  //     render(
  //       <StoreList
  //         storeName="Coop"
  //         category={"fruechte-gemuese"}
  //         filteredProducts={testProducts}
  //         products={testProducts}
  //         user={testUser1}
  //         favoritesList={[]}
  //         setFavoritesList={mockedFavorites}
  //         groceryList={[]}
  //         setGroceryList={mockedGroceryList}
  //         selectedProduct={undefined}
  //         setSelectedProduct={mockedSelectedProduct}
  //         key="Coop"
  //       />
  //     );
  //     expect(screen.getAllByRole("listitem").length).toBe(5);
  //   });
});
