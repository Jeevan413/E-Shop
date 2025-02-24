import PropTypes from "prop-types"; 
import "../styles/Cart.css";  

const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeItem }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <h3>{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="cart-actions">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="total-price">Total: ${totalPrice}</h3>
    </div>
  );
};

// ✅ Fix: PropTypes validation sahi likho
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired, // 🔥 Yaha pe `PropTypes.array.isRequired` hata diya hai

  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Cart;
