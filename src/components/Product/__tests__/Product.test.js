import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "../Product";
import {
  allProducts,
  testProduct,
  testProductOnFavorites,
  testProductOnGroceryList,
} from "../../../__mocks__/products";
import { userItemsOnLists, userEmptyLists } from "../../../__mocks__/user";
import userEvent from "@testing-library/user-event";

const mockedFavorites = jest.fn();
const mockedGroceryList = jest.fn();

describe("Product and product text content", () => {
  test("should render product", () => {
    render(
      <Product
        product={testProduct}
        favorites={userEmptyLists.favoritesList}
        setFavorites={mockedFavorites}
        groceryList={userEmptyLists.groceryList}
        setGroceryList={mockedGroceryList}
      />
    );
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  test("should render product title", () => {
    render(
      <Product
        product={testProduct}
        favorites={userEmptyLists.favoritesList}
        setFavorites={mockedFavorites}
        groceryList={userEmptyLists.groceryList}
        setGroceryList={mockedGroceryList}
      />
    );
    expect(screen.getByTestId("product-title").textContent).toBe(
      "Migros Bananen"
    );
  });

  test("should render product increment measurement", () => {
    render(
      <Product
        product={testProduct}
        favorites={userEmptyLists.favoritesList}
        setFavorites={mockedFavorites}
        groceryList={userEmptyLists.groceryList}
        setGroceryList={mockedGroceryList}
      />
    );
    expect(screen.getByTestId("product-increment").textContent).toBe(
      "2.80/1kg"
    );
  });

  test("should render product price as number string with 2 decimal places", () => {
    render(
      <Product
        product={testProduct}
        favorites={userEmptyLists.favoritesList}
        setFavorites={mockedFavorites}
        groceryList={userEmptyLists.groceryList}
        setGroceryList={mockedGroceryList}
      />
    );
    expect(screen.getByTestId("product-price").textContent).toBe("2.80");
  });
});

describe("Product displaying correct icons based on state", () => {
  test("should render product with favorites border outlined icon", () => {
    render(
      <Product
        product={testProduct}
        favorites={userEmptyLists.favoritesList}
        setFavorites={mockedFavorites}
        groceryList={userEmptyLists.groceryList}
        setGroceryList={mockedGroceryList}
      />
    );
    expect(
      screen.getByTestId("FavoriteBorderOutlinedIcon")
    ).toBeInTheDocument();
  });

  test("should render product with add icon", () => {
    render(
      <Product
        product={testProduct}
        favorites={userEmptyLists.favoritesList}
        setFavorites={mockedFavorites}
        groceryList={userEmptyLists.groceryList}
        setGroceryList={mockedGroceryList}
      />
    );
    expect(screen.getByTestId("AddIcon")).toBeInTheDocument();
  });

  test("should render product with favorites icon filled", () => {
    render(
      <Product
        product={testProductOnFavorites}
        favorites={userItemsOnLists.favoritesList}
        setFavorites={mockedFavorites}
        groceryList={userItemsOnLists.groceryList}
        setGroceryList={mockedGroceryList}
      />
    );
    expect(screen.getByTestId("FavoriteIcon")).toBeInTheDocument();
  });

  test("should render product with remove icon", () => {
    render(
      <Product
        product={testProductOnGroceryList}
        favorites={userItemsOnLists.favoritesList}
        setFavorites={mockedFavorites}
        groceryList={userItemsOnLists.groceryList}
        setGroceryList={mockedGroceryList}
      />
    );
    expect(screen.getByTestId("RemoveIcon")).toBeInTheDocument();
  });
});

describe("Product button icons change on click event", () => {
  test("should call handle favorites function", () => {
    render(
      <Product
        product={testProduct}
        favorites={userEmptyLists.favoritesList}
        setFavorites={mockedFavorites}
        groceryList={userEmptyLists.groceryList}
        setGroceryList={mockedGroceryList}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: "favorite" }));
    expect(mockedFavorites).toHaveBeenCalled();
  });
});
