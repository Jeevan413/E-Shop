

import "../styles/AboutUs.css";


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Welcome to <span className="highlight">E-Shop</span>, your ultimate destination for fashion and lifestyle.
          We strive to bring you the best products, focusing on quality, customer satisfaction, and uniqueness.
        </p>
        <div className="about-grid">
          <img src="3053975.jpg" alt="About Us" className="about-image" />
          <div>
            <h3 className="about-subtitle">Our Story</h3>
            <p className="about-text">
              Founded in 2023, YourStore was built with a passion for delivering the best online shopping experience.
              Starting from a small idea, we now serve customers worldwide and continue to grow every day.
            </p>
          </div>
        </div>
        <div className="about-box">
          <h3 className="about-subtitle">Our Mission</h3>
          <p className="about-text">
            To provide high-quality, trendy, and affordable products that enhance your lifestyle. We believe in empowering our customers
            with the best fashion choices and a seamless shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
