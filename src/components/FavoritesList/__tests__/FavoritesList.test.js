import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavoritesList from "../FavoritesList";

test("should render favorites list", () => {
  render();
  expect();
});

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
