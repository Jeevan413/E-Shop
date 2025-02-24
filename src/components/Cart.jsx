import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import "../styles/Cart.css";

const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeItem }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const sendEmail = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const templateParams = {
      user_name: "Jeevan Ramesh", // Ye dynamic bana sakte ho
      user_email: "jiwan.r.dhatbale2003@gmail.com", // User ka actual email
      order_id: Math.floor(Math.random() * 10000), // Random order ID
      order_details: cart.map((item) => `✔ ${item.name} - ${item.quantity}x`).join("\n"),
      total_price: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(totalPrice),
    };

    console.log("📩 Email Template Params:", templateParams); // ✅ Debugging ke liye

    emailjs
      .send(
        "service_d72jf5f", // EmailJS Service ID
        "template_j96gwth", // EmailJS Template ID
        templateParams,
        "nk52v17DROs9EiMvy" // EmailJS User ID
      )
      .then(
        (response) => {
          console.log("✅ SUCCESS!", response.status, response.text);
          alert("🎉 Order Placed! Confirmation email sent.");
        },
        (error) => {
          console.log("❌ FAILED...", error);
          alert("⚠ Failed to send email. Please try again.");
        }
      );
  };

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
      <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
      
      {cart.length > 0 && (
        <button className="buy-now-btn" onClick={sendEmail}>Buy Now</button>
      )}
    </div>
  );
};

// ✅ PropTypes Validation (Best Practice)
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Cart;
