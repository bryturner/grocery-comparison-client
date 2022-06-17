export const userEmptyLists = {
  firstName: "Bryan",
  favoritesList: {},
  groceryList: {},
};

export const userItemsOnLists = {
  firstName: "Bryan",
  favoritesList: {
    "629dd675d91cdfa88778db42": {
      storeName: "Denner",
      title: "Denner Meat",
      brand: "Denner",
      incrementPrice: 1.4,
      incrementQuantity: 1,
      incrementString: "1.40/1kg",
      quantityAmount: 1,
      quantityString: "1kg",
      price: 1.4,
      productCategory: ["all", "fleisch-fisch"],
      sale: "false",
      _id: "629dd675d91cdfa88778db42",
      createdAt: "2022-06-06T10:27:01.577Z",
      updatedAt: "2022-06-06T10:27:01.577Z",
      __v: 0,
      userFavorite: true,
      onGroceryList: false,
    },
  },
  groceryList: {
    "6299bc7e939c9c82ca84d6a1": {
      _id: "6299bc7e939c9c82ca84d6a1",
      storeName: "Coop",
      title: "Knoblauch 1 Stuck",
      brand: "Coop",
      incrementPrice: 0.55,
      incrementQuantity: 1,
      incrementString: "0.55/1ST",
      quantityAmount: 1,
      quantityString: "1ST",
      price: 0.55,
      createdAt: "2022-06-03T07:47:10.007Z",
      updatedAt: "2022-06-03T07:47:10.007Z",
      __v: 0,
      sale: "true",
      productCategory: ["all", "fruechte-gemuese"],
      userFavorite: false,
      onGroceryList: true,
    },
  },
};

export const testUser1 = {
  _id: "1234",
  name: "Bryan Turner",
  username: "email@email.com",
  password: "hashed password",
  //   lists store product objects with all data included because it is unlikely that the arrays will grow over 16MB for each user
  lists: {
    favorites: [],
    grocList: [],
  },
};

export const testUser2 = {
  _id: "2222",
  name: "Alexandra Wyder",
  username: "email@email.com",
  password: "hashed password",
  //   lists store product objects with all data included because it is unlikely that the arrays will grow over 16MB for each user
  lists: {
    favorites: [],
    grocList: [],
  },
};
