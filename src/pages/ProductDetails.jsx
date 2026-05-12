// import { useContext } from "react"
import { useParams } from "react-router-dom"
import { UseProducts } from "../context/ProductContext"
import { UseCart } from "../context/CartContext"

export default function ProductDetails(){
    const {products}= UseProducts();
    const {cart , setCart}= UseCart();

    const {id} = useParams()//returns an object with all parameters passed to the URL
 const product = products.find((product)=>product.id === Number(id))
 if(!product){return <p>No product details</p>}

 function handleAddToCart(){
fetch("http://localhost:3001/cart",{
    method:"POST",
    heders:{
        "contetnt-type":"application/json"
    },
    body:JSON.stringify(product)
})
.then((res)=>res.json())
.then((newCartItems)=>{
    setCart([...cart, newCartItems])})
    console.log("item added")
 }
    return(
        <div className="card m-5 p-4 ">
    
         <h5>{product.title}</h5>
         <img  style={{width:"300px"}}  src={product.image} alt={product.name}/>
         <p>{product.description}</p>
         <p><strong>{product.price}</strong></p>
        {/* details of product id {id} */}
        <button style={{width:"100px",margin:"10px"}}  className="btn btn-primary btn-sm"  onClick={handleAddToCart}>Add To cart</button>
        <h2 className="m-4 text-warning">Cart</h2>
            {cart.map((product)=>(<li key = {product.id}>{product.title}</li>))}
        </div>
    )
}