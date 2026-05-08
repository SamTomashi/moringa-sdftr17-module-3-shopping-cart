import { UseCart } from "../context/CartContext"

export default function Cart(){
    const {cart} = UseCart()
    return(
        <ul>
            {
                cart.map((product, index)=> (<li key={index}>{product.title}</li>))
            }
        </ul>
    )
}