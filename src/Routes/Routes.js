import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import AllCustomers from "../Pages/Dashboard/AllCustomers/AllCustomers";
import Main from "../layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/HomePage/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProducts from "../Pages/Dashboard/AllProducts.js/AllProducts";
import Cart from "../Pages/Cart/Cart";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AddCustomer from "../Pages/Dashboard/AddCustomer/AddCustomer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        {" "}
        <DashboardLayout />{" "}
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AllCustomers />,
      },
      {
        path: "/dashboard/customers",
        element: <AllCustomers />,
      },
      {
        path: "/dashboard/products",
        element: <AllProducts />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/addCustomer",
        element: <AddCustomer />,
      },
    ],
  },
]);

export default router;
