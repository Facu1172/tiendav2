import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import CartBtn from './components/CartBtn';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/CartBtn" element={<CartBtn/>} />
      </Routes>
    </>
  )
}

export default App;
