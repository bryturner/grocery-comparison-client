import { useState, useEffect, useRef, useLayoutEffect } from "react";
import axios from "axios";

export const useFetchProducts = ({ category }) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/product?category=${category}`
      );
      setProducts(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [category]);

  return { products, error, loading };
};

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//   const getProducts = async () => {
//     try {
//       const productResponse = await axios.get(
//         `http://localhost:8000/product?category=${category}`
//       );
//       setProducts(productResponse.data);
//       // Store all products on initial db call for reset compare click
//       setAllProdsInCategory(productResponse.data);
//       setIsLoading(false);
//     } catch (err) {
//       console.error(err);
//       setIsLoading(false);
//       return [];
//       // setProducts(testProducts);
//       // setAllProdsInCategory(testProducts);
//       // use test products for app functionality if fetch error
//       // display message: Products being displayed are not real....
//     }
//   };

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const useCallbackRef = (callback) => {
//   const callbackRef = useRef(callback);
//   useLayoutEffect(() => {
//     callbackRef.current = callback;
//   }, [callback]);
//   return callbackRef;
// };

// export const useFetch = (options) => {
//   const [data, setData] = useState(null);

//   //   const savedOnSuccess = useCallbackRef(options.onSuccess);

//   useEffect(() => {
//     if (options.url) {
//       let isCancelled = false;
//       fetch(options.url)
//         .then((response) => response.json())
//         .then((json) => {
//           if (!isCancelled) {
//             savedOnSuccess.current?.(json);
//             setData(json);
//           }
//         });
//       return () => {
//         isCancelled = true;
//       };
//     }
//   }, [options.url]);

//   return {
//     data,
//   };
// };

// const [url, setUrl] = useState(null);
// const { data } = useFetch({ url, onSuccess: () => console.log("success") });
