import  { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "../styles/signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up successfully with Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <div className="input-box">
          <FaUser className="icon" />
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <FaLock className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
