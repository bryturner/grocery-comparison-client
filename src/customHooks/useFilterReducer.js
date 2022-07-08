import { useReducer } from "react";

export function useFilterReducer({ products }) {
  const searchProducts = (products, searchQuery) => {
    const queriedProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return queriedProducts;
  };

  const compareTwoProductTitles = (first, second) => {
    const re = /\s+|denner|coop|migros/gi;
    first = first.replace(re, "");
    second = second.replace(re, "");

    if (first === second) return 1;
    if (first.length < 2 || second.length < 2) return 0;

    let firstBigrams = new Map();
    for (let i = 0; i < first.length - 1; i++) {
      const bigram = first.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;

      firstBigrams.set(bigram, count);
    }

    let intersectionSize = 0;
    for (let i = 0; i < second.length - 1; i++) {
      const bigram = second.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;

      if (count > 0) {
        firstBigrams.set(bigram, count - 1);
        intersectionSize++;
      }
    }
    return (2.0 * intersectionSize) / (first.length + second.length - 2);
  };

  const compareProducts = (products, selectedProduct) => {
    const bestMatchingProducts = [];
    const selectedProductTitle = selectedProduct.title;

    products
      .map((product) => {
        const compareProductTitle = product.title;

        const similarityRating = compareTwoProductTitles(
          selectedProductTitle,
          compareProductTitle
        );
        return { similarityRating: similarityRating, product: product };
      })
      .sort((a, b) => b.similarityRating - a.similarityRating)
      .forEach((product) => {
        if (product.similarityRating > 0.1) {
          bestMatchingProducts.push(product.product);
        }
      });

    return bestMatchingProducts;
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "fetchProducts":
        return { ...state, products: payload.products };
      case "query":
        if (state.selectedProduct === undefined) {
          return {
            ...state,
            searchQuery: payload.searchQuery,
            products: searchProducts(products, payload.searchQuery),
          };
        }
        if (state.selectedProduct) {
          return {
            ...state,
            searchQuery: payload.searchQuery,
            products: searchProducts(
              compareProducts(products, state.selectedProduct),
              payload.searchQuery
            ),
          };
        }
        break;
      case "compare":
        if (state.searchQuery.length === 0) {
          return {
            ...state,
            selectedProduct: payload.selectedProduct,
            products: compareProducts(products, payload.selectedProduct),
          };
        }
        if (state.searchQuery.length > 0) {
          return {
            ...state,
            selectedProduct: payload.selectedProduct,
            products: compareProducts(
              searchProducts(products, state.searchQuery),
              payload.selectedProduct
            ),
          };
        }
        break;
      case "reset":
        return {
          searchQuery: "",
          selectedProduct: undefined,
          products: products,
        };
      default:
        throw new Error(`Unknown action type: ${type}`);
    }
  };

  const initialState = {
    searchQuery: "",
    selectedProduct: undefined,
    products: [],
  };

  const [state, dispatchFilter] = useReducer(reducer, initialState);

  return [state, dispatchFilter];
}
