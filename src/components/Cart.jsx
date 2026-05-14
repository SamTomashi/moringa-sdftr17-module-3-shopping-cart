import { UseCart } from "../context/CartContext"

export default function Cart(){
    const {cart} = UseCart()
    return(
      <div>
        <ul>
            {
                cart.map((product, index)=> (<li key={index}>{product.title}</li>))
            }
        </ul>
        <a className="btn btn-success btn-sm" href="/checkout">Checkout</a>
      </div>
    )
}