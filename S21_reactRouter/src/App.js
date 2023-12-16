import {
  createBrowserRouter,
  RouterProvider,
  //createRoutesFromElements,
  //Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPages from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <ProductPages /> },
      { path: "/products/:productId", element: <ProductDetailsPage /> },
    ],
  },
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
