import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Cart from "./components/Cart";
import EcommerceNavbar from "./components/EcommerceNavbar"; 
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Get the current route
  
  // 🛒 Cart State
  const [cart, setCart] = useState([]);

  // 🛍️ Add item to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ➕ Increase Quantity
  const increaseQuantity = (id) => {
    setCart(cart.map((item) => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // ➖ Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    ));
  };

  // ❌ Remove Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Show Navbar only if the route is NOT /login or /register */}
      {location.pathname !== "/login" && location.pathname !== "/register" && <EcommerceNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route 
          path="/cart" 
          element={<Cart 
            cart={cart} 
            increaseQuantity={increaseQuantity} 
            decreaseQuantity={decreaseQuantity} 
            removeItem={removeItem} 
          />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
