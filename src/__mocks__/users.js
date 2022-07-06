export const testUser1 = {
  _id: "1234",
  name: "Bryan Turner",
  username: "email@email.com",
  password: "hashed password",
  //   lists store product objects with all data included because it is unlikely that the arrays will grow over 16MB for each user
  lists: {
    favorites: [
      {
        _id: "62c0ac7f70dc919f3598c6bc",
        productId: "271500513200migros",
        categories: ["fruechte-gemuese"],
        createdAt: "2022-07-02T20:37:19.101Z",
        title: "Gurke",
        incrStr: "1.70/1ST",
        price: 1.7,
        prodLink: "https://www.migros.ch/de/product/271500513200",
        qtyStr: "",
        storeTitle: "Migros",
        updatedAt: "2022-07-02T20:37:19.101Z",
      },
    ],
    grocList: [
      {
        _id: "62c0ae6970dc919f3599d0a1",
        productId: "3066950coop",
        categories: ["fleisch-fisch"],
        createdAt: "2022-07-02T20:45:27.818Z",
        title: "Naturafarm Pouletbrust 2 Stück",
        incrStr: "5.50/100g",
        price: 13.75,
        prodLink:
          "https://www.coop.ch/de/lebensmittel/fleisch-fisch/abgepacktes-frischfleisch/gefluegel/naturafarm-pouletbrust-2-stueck-ca/p/3066950",
        qtyStr: "250g",
        storeTitle: "Coop",
        updatedAt: "2022-07-02T20:45:27.818Z",
      },
    ],
  },
};
