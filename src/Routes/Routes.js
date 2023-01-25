import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import AllCustomers from "../Pages/Dashboard/AllCustomers/AllCustomers";
import Main from '../layouts/Main' ;
import ErrorPage from '../Pages/ErrorPage/ErrorPage' ;
import Home from '../Pages/Home/Home' ;
import Login from '../Pages/Login/Login' ;
import Register from '../Pages/Register/Register' ;
import AllProducts from "../Pages/Dashboard/AllProducts.js/AllProducts";

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
    
        ]
    },
    {
     path:'/dashboard',
     element: <DashboardLayout />,
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