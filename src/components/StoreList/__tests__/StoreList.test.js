import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StoreList from "../StoreList";
import { userEmptyLists } from "../../../__mocks__/user";
import { testProducts } from "../../../__mocks__/testProductsList";

const mockedFavorites = jest.fn();
const mockedGroceryList = jest.fn();

describe("StoreList", () => {
  test("should render store name", () => {
    render(
      <StoreList
        storeName="Coop"
        category={"fruechte-gemuese"}
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
        category={"fruechte-gemuese"}
        searchQuery={""}
        products={testProducts}
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
        category={"fruechte-gemuese"}
        searchQuery={""}
        products={testProducts}
        favorites={{}}
        groceryList={{}}
        setFavorites={mockedFavorites}
        setGroceryList={mockedGroceryList}
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
// });
