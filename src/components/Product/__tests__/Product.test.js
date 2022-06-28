import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "../Product";

// Testing with new product db schema
import { testProduct } from "../../../__mocks__/testProduct";
import { testUser1, testUser2 } from "../../../__mocks__/users";

const mockedFavorites = jest.fn();
const mockedGroceryList = jest.fn();
const mockedSelectedProduct = jest.fn();

describe("Product and product text content", () => {
  test("should render product", () => {
    render(
      <Product
        product={testProduct}
        user={testUser1}
        favoritesList={[]}
        setFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
      />
    );
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  test("should render product title 'Zucchetti'", () => {
    render(
      <Product
        product={testProduct}
        user={testUser1}
        favoritesList={[]}
        setFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
      />
    );
    expect(screen.getByTestId("product-title").textContent).toBe("Zucchetti");
  });

  test("should render product increment measurement as '0.64/1kg'", () => {
    render(
      <Product
        product={testProduct}
        user={testUser1}
        favoritesList={[]}
        setFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
      />
    );
    expect(screen.getByTestId("product-increment").textContent).toBe(
      "0.64/1kg"
    );
  });

  test("should render product price as '3.20'", () => {
    render(
      <Product
        product={testProduct}
        user={testUser1}
        favoritesList={[]}
        setFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
      />
    );
    expect(screen.getByTestId("product-price").textContent).toBe("3.20");
  });
});

describe("Product displaying correct icons", () => {
  test("should render product with favorites icon filled **testUser1**", () => {
    render(
      <Product
        product={testProduct}
        user={testUser1}
        favoritesList={testUser1.lists.favorites}
        setFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
      />
    );
    expect(screen.getByTestId("FavoriteIcon")).toBeInTheDocument();
  });

  test("should render product with remove icon **testUser1**", () => {
    render(
      <Product
        product={testProduct}
        user={testUser1}
        favoritesList={[]}
        setFavoritesList={mockedFavorites}
        groceryList={testUser1.lists.grocList}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
      />
    );
    expect(screen.getByTestId("RemoveIcon")).toBeInTheDocument();
  });

  test("should render product with favorites icon filled **testUser2**", () => {
    render(
      <Product
        product={testProduct}
        user={testUser2}
        favoritesList={testUser2.lists.favorites}
        setFavoritesList={mockedFavorites}
        groceryList={[]}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
      />
    );
    expect(
      screen.getByTestId("FavoriteBorderOutlinedIcon")
    ).toBeInTheDocument();
  });

  test("should render product with add icon **testUser2**", () => {
    render(
      <Product
        product={testProduct}
        user={testUser2}
        favoritesList={[]}
        setFavoritesList={mockedFavorites}
        groceryList={testUser2.lists.grocList}
        setGroceryList={mockedGroceryList}
        selectedProduct={undefined}
        setSelectedProduct={mockedSelectedProduct}
      />
    );
    expect(screen.getByTestId("AddIcon")).toBeInTheDocument();
  });
});

// describe("Product title comparisons", () => {
//   test("", () => {
//     render();

//     expect();
//   });
// });
