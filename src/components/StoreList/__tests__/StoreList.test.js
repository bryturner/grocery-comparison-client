import { fireEvent, render, screen } from "@testing-library/react";
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
        searchQuery={""}
        products={testProducts}
        user={testUser1}
        userFavoritesList={[]}
        setUserFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
        key="Coop"
      />
    );

    expect(screen.getByText(/coop/i)).toBeInTheDocument();
  });

  test("should render a list of products", () => {
    render(
      <StoreList
        storeName="Coop"
        category={"fruechte-gemuese"}
        searchQuery={""}
        products={testProducts}
        user={testUser1}
        userFavoritesList={[]}
        setUserFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
        key="Coop"
      />
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("should render products only from given store", () => {
    render(
      <StoreList
        storeName="Coop"
        category={"fruechte-gemuese"}
        searchQuery={""}
        products={testProducts}
        user={testUser1}
        userFavoritesList={[]}
        setUserFavoritesList={mockedFavorites}
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

// describe("Products on store list", () => {
//   test("should display filled favorite icon", () => {
//     render(
//       <StoreList
//         storeName="Coop"
//         category={"all"}
//         searchQuery={""}
//         products={allProducts}
//         favorites={userEmptyLists.favoritesList}
//         groceryList={userEmptyLists.groceryList}
//         setFavorites={mockedFavorites}
//         setGroceryList={mockedGroceryList}
//       />
//     );

//     fireEvent.click(screen.getByRole("button", { name: "favorite" }));
//     expect(screen.getByTestId("FavoriteIcon")).toBeInTheDocument();
//   });
