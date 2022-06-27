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
        increment: { incrPrice: 0.64, incrQty: 1, incrStr: "0.64/1kg" },
        quantity: { qtyAmount: 500, qtyStr: "500g" },
        favorites: [],
        grocList: [],
      },
    ],
    grocList: [
      {
        _id: "1",
        storeName: "Denner",
        title: "Zucchetti",
        price: 3.2,
        categories: ["fruechte-gemuese"],
        increment: { incrPrice: 0.64, incrQty: 1, incrStr: "0.64/1kg" },
        quantity: { qtyAmount: 500, qtyStr: "500g" },
        favorites: [],
        grocList: [],
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
