import React, { createContext, useEffect, useState } from "react";

const UserListsContext = createContext();

function UserListsContextProvider({ children }) {
  const [favoritesList, setFavoritesList] = useState({});
  const [groceryList, setGroceryList] = useState({});

  const getGroceryList = () => {
    const groceryListData = JSON.parse(localStorage.getItem("groceryList"));
    if (!groceryListData) return;
    setGroceryList(groceryListData);
  };

  const getFavoritesList = () => {
    const favoritesListData = JSON.parse(localStorage.getItem("favoritesList"));
    if (!favoritesListData) return;
    setFavoritesList(favoritesListData);
  };

  useEffect(() => {
    getGroceryList();
    getFavoritesList();
  }, []);
  return (
    <UserListsContext.Provider
      value={{ groceryList, setGroceryList, favoritesList, setFavoritesList }}
    >
      {children}
    </UserListsContext.Provider>
  );
}

export { UserListsContextProvider, UserListsContext };
