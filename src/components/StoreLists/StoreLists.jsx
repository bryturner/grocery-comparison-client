import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SearchBox from "../SearchBox/SearchBox";
import StoreList from "./StoreList";
import StoreListInputs from "./StoreListInputs";

const storeNames = ["Coop", "Migros", "Denner"];

const Container = styled.div``;

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

const StoresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
`;

// get products, filter, search, reset compare, compare
function StoreLists() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("fruechte-gemuese");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTestClick = () => {
    console.log(products);
  };

  const searchProducts = useCallback(() => {
    const queriedProducts = products.filter((product) => {
      return product.dictionaryTitle.toLowerCase().includes(searchQuery);
    });
    setFilteredProducts(queriedProducts);
  }, [searchQuery]);

  const fetchTestData = () => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.testProducts));
  };

  useEffect(() => {
    fetchTestData();
  }, []);

  useEffect(() => {
    searchProducts();
  }, [searchProducts]);

  return (
    <Container>
      <StoreListInputs
        setCategory={setCategory}
        setSearchQuery={setSearchQuery}
      />
      <StoresContainer>
        {storeNames.map((storeName) => (
          <StoreList storeName={storeName} key={storeName} />
        ))}
      </StoresContainer>
    </Container>
  );
}

export default StoreLists;
