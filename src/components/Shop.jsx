import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/shop.css";

const products = [
  { id: 1, name: "Luxury Watch", price: 199, img: "4.jpg" },
  { id: 2, name: "Smartphone", price: 499, img: "5.jpg" },
  { id: 3, name: "Wireless Headphones", price: 129, img: "3.jpg" },
  { id: 4, name: "Gaming Laptop", price: 999, img: "6.jpg" },
  { id: 5, name: "Sneakers", price: 79, img: "7.jpg" },
  { id: 6, name: "Sunglasses", price: 59, img: "8.jpg" }
];

const Shop = ({ addToCart }) => {
  const [message, setMessage] = useState(""); // ✅ Alert message state
  const [showMessage, setShowMessage] = useState(false); // ✅ Control visibility

  const handleAddToCart = (product) => {
    addToCart(product); // ✅ Pehle cart me add karo
    setMessage(`${product.name} added to cart ✅`); // ✅ Message update karo
    setShowMessage(true); // ✅ Message show karne ke liye state update karo

    setTimeout(() => {
      setShowMessage(false); // ✅ 2 sec baad message hide kar do
    }, 2000);
  };

  return (
    <div className="shop-container">
      <h2 className="shop-title">🛍️ Fancy E-Commerce Shop</h2>

      {/* ✅ Alert Message UI */}
      {showMessage && <div className="alert-message">{message}</div>}

      <div className="product-grid-shop">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>

            {/* ✅ Call handleAddToCart which calls addToCart internally */}
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Shop.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Shop;
