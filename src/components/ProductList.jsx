import ProductCard from "./ProductCard";

export default function ProductList({products, cart, setCart}){

    return(

        <div className="row">
            {
                products.map((product, index)=> (<ProductCard key={index} product={product} setCart={setCart} cart={cart}/>))
            }
        </div>
    )
}