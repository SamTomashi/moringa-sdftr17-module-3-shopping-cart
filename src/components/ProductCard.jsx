import { UseCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { setCart } = UseCart();

  function AddProductToCart(productToAdd) {
    fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(productToAdd),
    });
  }

  function handleOnClick() {
    setCart((prev) => [product, ...prev]);
    AddProductToCart(product)
  }

  return (
    <div key={product.id} className="card col-4 m-1">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p>{product.pice}</p>
        <button onClick={() => handleOnClick()} className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
}
