import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page content</p>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
    </div>
  );
}

export default HomePage;