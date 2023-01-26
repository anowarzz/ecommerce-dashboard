import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import AllCustomers from "../Pages/Dashboard/AllCustomers/AllCustomers";
import Main from '../layouts/Main' ;
import ErrorPage from '../Pages/ErrorPage/ErrorPage' ;
import Home from '../Pages/Home/Home' ;
import Login from '../Pages/Login/Login' ;
import Register from '../Pages/Register/Register' ;
import AllProducts from "../Pages/Dashboard/AllProducts.js/AllProducts";
import Cart from "../Pages/Cart/Cart";
import DynamicProductModal from "../components/DynamicProductModal/DynamicProductModal";
import ProductDetails from "../Pages/Home/ProductList/ProductDetails/ProductDetails";
import AdminRoute from "./AdminRoute/AdminRoute";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
               element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
               path: '/cart',
               element: <Cart />
            },
            {
                path: '/products/:id',
                element: <ProductDetails />,
                loader: ({params}) => fetch(`https://ecommerce-dashboard-server.vercel.app/products/${params.id}`)
            }
    
        ]
    },
    {
     path:'/dashboard',
     element: <AdminRoute> <DashboardLayout /> </AdminRoute>,
     children: [
         {
             path: '/dashboard/customers',
             element: <AllCustomers />
            },
            {
                path: '/dashboard/products',
                element: <AllProducts />
            }
        ]
    },
])



export default router ;