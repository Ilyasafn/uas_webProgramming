import { RouterProvider, createHashRouter } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import MainLayout from "./layout/MainLayout";
import Beauty from "./pages/categories/Beauty";
import BeautyDetail from "./pages/categories/BeautyDetail";
import FragranceDetail from "./pages/categories/FragranceDetail";
import Fragrances from "./pages/categories/Fragrances";
import Furniture from "./pages/categories/Furniture";
import FurnitureDetail from "./pages/categories/FurnitureDetail";
import Groceries from "./pages/categories/Groceries";
import GroceriesDetail from "./pages/categories/GroceriesDetail";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProductList />,
        index: true,
      },
      {
        path: "/category/beauty",
        element: <Beauty />,
      },
      {
        path: "/category/fragrances",
        element: <Fragrances />,
      },
      {
        path: "/category/furniture",
        element: <Furniture />,
      },
      {
        path: "/category/groceries",
        element: <Groceries />,
      },
    ],
  },
  {
    path: "/details/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/category/beauty/:productId",
    element: <BeautyDetail />,
  },
  {
    path: "/category/fragrances/:productId",
    element: <FragranceDetail />,
  },
  {
    path: "/category/furniture/:productId",
    element: <FurnitureDetail />,
  },
  {
    path: "/category/groceries/:productId",
    element: <GroceriesDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
