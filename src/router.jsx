import { createBrowserRouter } from "react-router";
import App from "./App";
import { ProductDetail } from "./pages/product/productDetail/ProductDetail";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Template } from "./components/Template/Template";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { AuthLayout } from "./components/AuthLayout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <AuthLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
