import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import CartProvider from "./context/CartProvider";
import ProductProvider from "./context/ProductProvider";
// import { ProductContext } from "./context/ProductContext";

/**
 * hooks:
 * - useState
 * - useEffect
 * State
 * context
 * useEffect
 * Making API requests
 */

function App() {
  return (
    <ProductProvider>
     <CartProvider>
       <div className="container content">
        <ProductList />
        <Cart/>
      </div>
     </CartProvider>
    </ProductProvider>
  );
}

export default App;
