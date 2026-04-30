import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({products}){
    const [cart, setCart] = useState([])

    return(

        <div className="row">
            {
                products.map((product, index)=> (<ProductCard key={index} product={product} setCart={setCart} cart={cart}/>))
            }
        </div>
    )
}