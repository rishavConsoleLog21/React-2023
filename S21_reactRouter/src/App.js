import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPages from "./pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductPages /> },
]);

// Alternative way to create routes
// const routeDefinitions = createRoutesFromElements(
//   <>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductPages />} />
//   </>
// );
// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
