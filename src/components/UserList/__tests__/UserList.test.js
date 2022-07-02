import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserList from "../UserList";
import { storeNames } from "../../../data";
import { userEmptyLists } from "../../../__mocks__/userEmptyLists";

const mockedFavorites = jest.fn();
const mockedGroceryList = jest.fn();
const mockedHandleClearClick = jest.fn();

describe("UserList", () => {
  test("should render user list", () => {
    render(
      <UserList
        userList={userEmptyLists.lists.grocList}
        listTitle="Grocery"
        listText="Click the plus to add to grocery list"
        storeNames={storeNames}
        favoritesList={userEmptyLists.lists.grocList}
        setFavoritesList={mockedFavorites}
        groceryList={userEmptyLists.lists.grocList}
        setGroceryList={mockedGroceryList}
        handleClearClick={mockedHandleClearClick}
        clearButtonName="Clear grocery list"
      />
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});

test("should render empty grocery list text", () => {
  render(
    <UserList
      userList={userEmptyLists.lists.grocList}
      listTitle="Grocery"
      listText="Click the plus to add to grocery list"
      storeNames={storeNames}
      favoritesList={userEmptyLists.lists.grocList}
      setFavoritesList={mockedFavorites}
      groceryList={userEmptyLists.lists.grocList}
      setGroceryList={mockedGroceryList}
      handleClearClick={mockedHandleClearClick}
      clearButtonName="Clear grocery list"
    />
  );

  expect(
    screen.getByText(/click the plus to add to grocery list/i).textContent
  ).toBe("Click the plus to add to grocery list");
});

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
