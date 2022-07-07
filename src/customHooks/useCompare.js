import { useCallback, useEffect, useState } from "react";

// export const compareTwoProductTitles = (firstTitle, secondTitle) => {
//   //   const re = /\s+|denner|coop|migros/gi;
//   //   firstTitle = firstTitle.replace(re, "");
//   //   secondTitle = secondTitle.replace(re, "");

//   if (firstTitle === secondTitle) return 1;
//   if (firstTitle.length < 2 || secondTitle.length < 2) return 0;

//   let firstBigrams = new Map();
//   for (let i = 0; i < firstTitle.length - 1; i++) {
//     const bigram = firstTitle.substring(i, i + 2);
//     const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;

//     firstBigrams.set(bigram, count);
//   }

//   let intersectionSize = 0;
//   for (let i = 0; i < secondTitle.length - 1; i++) {
//     const bigram = secondTitle.substring(i, i + 2);
//     const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;

//     if (count > 0) {
//       firstBigrams.set(bigram, count - 1);
//       intersectionSize++;
//     }
//   }
//   return (
//     (2.0 * intersectionSize) / (firstTitle.length + secondTitle.length - 2)
//   );
// };

//   const findBestMatch = () => {
//     if (selectedProduct === undefined) {
//       setProducts(allProdsInCategory);
//       // getProducts();
//       return;
//     }
//     let bestMatchingProducts = [];
//     const selectedProductTitle = selectt;

//     products
//       .map((product) => {
//         const similarityRating = compareTwoProductTitles(
//           selectedProductTitle,
//           product.dictionaryTitle
//         );
//         return { similarityRating: similarityRating, product: product };
//       })
//       .sort((a, b) => b.similarityRating - a.similarityRating)
//       .forEach((product) => {
//         if (product.similarityRating > 0.25) {
//           bestMatchingProducts.push(product.product);
//         }
//       });
//     setProducts(bestMatchingProducts);
//   };
function useCompare(selectedProduct, products) {
  const [comparedProducts, setComparedProducts] = useState(products);

  const compareTwoProductTitles = (firstTitle, secondTitle) => {
    if (firstTitle === secondTitle) return 1;
    if (firstTitle.length < 2 || secondTitle.length < 2) return 0;

    let firstBigrams = new Map();
    let intersectionSize = 0;

    for (let i = 0; i < firstTitle.length - 1; i++) {
      const bigram = firstTitle.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;

      firstBigrams.set(bigram, count);
    }

    for (let i = 0; i < secondTitle.length - 1; i++) {
      const bigram = secondTitle.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;

      if (count > 0) {
        firstBigrams.set(bigram, count - 1);
        intersectionSize++;
      }
    }
    return (
      (2.0 * intersectionSize) / (firstTitle.length + secondTitle.length - 2)
    );
  };

  const findBestMatch = useCallback(
    (selectedProduct, products) => {
      if (selectedProduct === undefined) {
        setComparedProducts(products);
        return;
      }

      let bestMatchingProducts = [];
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
          if (product.similarityRating > 0.25) {
            bestMatchingProducts.push(product.product);
          }
        });
      setComparedProducts(bestMatchingProducts);
    },
    [setComparedProducts]
  );

  useEffect(() => {
    findBestMatch(selectedProduct, products);
  }, [findBestMatch, products, selectedProduct]);

  return comparedProducts;
}

export default useCompare;
