import { Link } from "react-router-dom";

const ProductList = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cranberry" },
];

function ProductPages() {
  return (
    <div>
      <h1>Product</h1>
      <p>Product page content</p>
      <ul>
        {ProductList.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPages;
