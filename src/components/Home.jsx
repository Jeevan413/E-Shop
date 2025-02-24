import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to E-Shop</h1>
        <p>Discover the latest trends with the best prices</p>
        <button className="shop-now-btn" onClick={() => navigate("/shop")}>
      Shop Now
    </button>
      </section>

      {/* Featured Categories */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="9.jpg" alt="Electronics" />
            <p>Electronics</p>
          </div>
          <div className="category-card">
            <img src="10.jpg" alt="Fashion" />
            <p>Fashion</p>
          </div>
          <div className="category-card">
            <img src="11.jpg" alt="Home Decor" />
            <p>Home Decor</p>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="trending">
        <h2>Trending Products</h2>
        <div className="product-grid-home">
          <div className="product-card">
            <img src="1.jpg" alt="Product" />
            <h3>Smart Watch</h3>
            <p>$199.99</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="2.jpg" alt="Product" />
            <h3>Running Shoes</h3>
            <p>$89.99</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="3.jpg" alt="Product" />
            <h3>Wireless Headphones</h3>
            <p>$129.99</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
