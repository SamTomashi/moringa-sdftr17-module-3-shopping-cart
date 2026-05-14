import ProductCard from "./ProductCard";
import { UseProducts } from "../context/ProductContext";

export default function ProductList() {

    const {products} = UseProducts()

  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
}
