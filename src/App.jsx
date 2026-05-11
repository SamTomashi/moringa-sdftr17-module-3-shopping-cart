import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";
import ProductList from "./components/ProductList";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
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
      <Navbar/>
     <CartProvider>
       <div className="container">
        {/* <Login/> */}
        <div className="content">
          <ProductList />
        <Cart/>
        </div>
      </div>
     </CartProvider>
    </ProductProvider>
  );
}

export default App;
