
import './App.css'
import ProductList from './components/ProductList'

function App() {
  const products = [
  {
    "id": 1,
    "name": "Laptop",
    "category": "Electronics",
    "price": 899.99,
    "inStock": true
  },
  {
    "id": 2,
    "name": "Smartphone",
    "category": "Electronics",
    "price": 599.99,
    "inStock": true
  },
  {
    "id": 3,
    "name": "Office Chair",
    "category": "Furniture",
    "price": 149.99,
    "inStock": false
  },
  {
    "id": 4,
    "name": "Running Shoes",
    "category": "Sportswear",
    "price": 79.99,
    "inStock": true
  },
  {
    "id": 5,
    "name": "Coffee Maker",
    "category": "Home Appliances",
    "price": 49.99,
    "inStock": true
  }
]
  return (
    <div className='container'>

      <div className='content'>
        <ProductList products={products}/>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
        </ul>
      </div>
      
      
    </div>
  )
}

export default App
