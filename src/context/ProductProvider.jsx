import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://mockerjson.xyz/api/v1/products/")
      .then((response) => response.json())
      .then((fetchedData) => {
        const { data } = fetchedData;
        setProducts(data);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
