
import { useState, useEffect } from 'react'
import './App.css'
import ProductList from './components/ProductList'
// import Form from './components/Form'

function App() {
  // const products = []

  const [products, setProducts] = useState([])

  const [selectedProduct, setSelectedProduct] = useState()

  useEffect(()=> {
    fetch("http://localhost:3001/products")
  .then((response)=>response.json())
  .then(data => {
    setProducts(data)
    console.log("The dependency state was updated")
  })
  },[selectedProduct])


  function HandleOnChange(event){
    setSelectedProduct(event.target.value)
  }


  const [cart, setCart] = useState([])
        // console.log(cart)

  return (
    <div className='container'>
      <select className="form-select" onChange={HandleOnChange}>
       {products.map((product)=> ( <option key={product.id} value={product.id}>{product.name}</option>))}
      </select>

      <div className='content'>
        <ProductList products={products} cart={cart} setCart={setCart}/>
        <ul>
         {cart.map((product)=> (<li key={product}>{product}</li>))}
        </ul>
      </div> 

      {/* <Form/> */}
      
    </div>
  )
}

export default App
