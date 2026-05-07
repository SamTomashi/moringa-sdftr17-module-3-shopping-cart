import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/ProductContext";

export default function ProductList() {

    const {products} = useContext(ProductContext)

  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
}
