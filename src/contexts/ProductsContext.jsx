import React, { createContext, useState } from "react";

import { allProducts, user } from "../assets/data";

const ProductsContext = createContext();

function ProductsContextProvider(props) {
  const [favoritesList, setFavoritesList] = useState(user.favoritesList);

  return (
    <ProductsContext.Provider value={{ favoritesList, setFavoritesList }}>
      {props.children}
    </ProductsContext.Provider>
  );
}
export default ProductsContext;
export { ProductsContextProvider };
