import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import{ToastContainer} from  'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './pages/Cart';
import { useEffect } from 'react';

function App() {

  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage when the app starts
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  
  //hari nivsasaa 8595
  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark'/>
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/search" element = {<Home/>}/>
          <Route path="/product/:id" element = {<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path="/cart" element = {<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>

        </Routes>
        </div>  
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
