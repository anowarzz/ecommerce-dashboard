const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");
const { default: ErrorPage } = require("../Pages/ErrorPage/ErrorPage");
const { default: Home } = require("../Pages/Home/Home");
const { default: Login } = require("../Pages/Login/Login");
const { default: Register } = require("../Pages/Register/Register");

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
                element: <Register />
            }
        ]
    }
])



export default router ;