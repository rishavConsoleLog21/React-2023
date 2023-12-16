import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateToProducts() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Home page content</p>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
      <button onClick={navigateToProducts}>Go to Products</button>
    </div>
  );
}

export default HomePage;