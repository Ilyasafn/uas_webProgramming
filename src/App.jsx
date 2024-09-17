import { RouterProvider, createHashRouter } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import MainLayout from "./layout/MainLayout";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProductList />,
        index: true,
      },
    ],
  },
  {
    path: "/details/:productId",
    element: <ProductDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
