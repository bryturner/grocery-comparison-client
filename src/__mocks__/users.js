export const testUser1 = {
  _id: "1234",
  name: "Bryan Turner",
  username: "email@email.com",
  password: "hashed password",
  //   lists store product objects with all data included because it is unlikely that the arrays will grow over 16MB for each user
  lists: {
    favorites: [
      {
        _id: "1",
        storeName: "Denner",
        title: "Zucchetti",
        price: 3.2,
        categories: ["fruechte-gemuese"],
        incrStr: "0.64/1kg",
        qtyStr: "500g",
      },
    ],
    grocList: [
      {
        _id: "1",
        storeName: "Denner",
        title: "Zucchetti",
        price: 3.2,
        categories: ["fruechte-gemuese"],
        incrStr: "0.64/1kg",
        qtyStr: "500g",
      },
    ],
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
