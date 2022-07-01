import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserList from "../UserList";

test("should render grocery list", () => {
  render(<UserList />);
  expect();
});

// describe("GroceryList", () => {
//   test("should render grocery list", () => {
//     render(<GroceryList favorites={{}} groceryList={{}} />);
//     expect(screen.getByRole("list")).toBeInTheDocument();
//   });

//   test("should render grocery list and empty grocery list with string", () => {
//     render(
//       <GroceryList favorites={{}} groceryList={userEmptyLists.groceryList} />
//     );
//     expect(screen.getByText(/add to grocery list/i).textContent).toBe(
//       "Add to grocery list"
//     );
//   });

//   test("should render grocery list item with title", () => {
//     render(
//       <GroceryList favorites={{}} groceryList={userItemsOnLists.groceryList} />
//     );
//     expect(screen.getByTestId("product-title").textContent).toBe(
//       "Knoblauch 1 Stuck"
//     );
//   });

//   test("should render grocery list item with store name", () => {
//     render(
//       <GroceryList favorites={{}} groceryList={userItemsOnLists.groceryList} />
//     );
//     expect(screen.getByTestId("product-store").textContent).toBe("Coop");
//   });

//   test("should render grocery list item with increment", () => {
//     render(
//       <GroceryList favorites={{}} groceryList={userItemsOnLists.groceryList} />
//     );
//     expect(screen.getByTestId("product-increment").textContent).toBe(
//       "0.55/1ST"
//     );
//   });

//   test("should render grocery list item with price", () => {
//     render(
//       <GroceryList favorites={{}} groceryList={userItemsOnLists.groceryList} />
//     );
//     expect(screen.getByTestId("product-price").textContent).toBe("0.55");
//   });
// });

// /////////////////////////////////////////////////////

// describe("FavoritesList", () => {
//   test("should render favorites list", () => {
//     render(<FavoritesList favorites={{}} groceryList={{}} />);
//     expect(screen.getByRole("list")).toBeInTheDocument();
//   });

//   test("should render an empty favorites list with text", () => {
//     render(
//       <FavoritesList
//         favorites={userEmptyLists.favoritesList}
//         groceryList={{}}
//       />
//     );
//     expect(screen.getByText(/add to favorites/i).textContent).toBe(
//       "Add to favorites"
//     );
//   });

//   test("should render a favorites list item with title", () => {
//     render(
//       <FavoritesList
//         favorites={userItemsOnLists.favoritesList}
//         groceryList={{}}
//       />
//     );
//     expect(screen.getByTestId("product-title").textContent).toBe("Denner Meat");
//   });

//   test("should render a favorites list item with increment", () => {
//     render(
//       <FavoritesList
//         favorites={userItemsOnLists.favoritesList}
//         groceryList={{}}
//       />
//     );
//     expect(screen.getByTestId("product-increment").textContent).toBe(
//       "1.40/1kg"
//     );
//   });

//   test("should render a favorites list item with price", () => {
//     render(
//       <FavoritesList
//         favorites={userItemsOnLists.favoritesList}
//         groceryList={{}}
//       />
//     );
//     expect(screen.getByTestId("product-price").textContent).toBe("1.40");
//   });
// });
