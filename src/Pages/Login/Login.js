
import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ScaleLoader } from "react-spinners";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider';

const googleProvider = new GoogleAuthProvider();



const Login = () => {

// Context
const { setUser, logIn, googleLogIn, loading, setLoading } =
useContext(AuthContext);

// Error State
const [error, setError] = useState("");

// Location
const navigate = useNavigate();



//  User login

const handleLogIn = (event) => {
event.preventDefault();
setLoading(true);
const form = event.target;
const email = form.email.value;
console.log(email);


const password = form.password.value;

logIn(email, password)
  .then((result) => {
    const user = result.user;
    console.log(user);
    setError("");
    form.reset();
    setLoading(false);
    
    navigate('/')
    toast.success("Login Successful", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  })
  .catch((error) => {
    console.error(error);
    setError(error.message);
    setLoading(false);
  });
};

// Login With google
const handleGoogleLogin = () => {
googleLogIn(googleProvider)
  .then((result) => {
    const user = result.user;
    setUser(user);
    console.log(user);

    setError("");
    setLoading(false);
    navigate('/')
    toast.success("Login Successful", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  })
  .catch((err) => {
    console.error(err);
    setError(err.message);
    setLoading(false);
  });
};




    return (
        <div className='flex items-center justify-center h-screen  bg-gray-800'>
        <div className="mx-auto bg-gray-800 pb-20">

{loading && (
    <div className="z-20 absolute top-40 left-[50%] ">
      <ScaleLoader color="blue" size={100} className="text-center" />
    </div>
  )}


    <div className="w-full max-w-md  mx-auto bg-white shadow-md dark:bg-gray-800">
    
<div className='flex justify-around bg-purple-900 px-0 py-4'>
<NavLink to='/register' 
className={({ isActive }) =>
isActive ? "font-medium text-xl md:text-2xl tracking-wide transition-colors duration-200 text-sky-400  ease-linear transform border-2 px-2 py-1 bg-gray-900 border-pink-600" : "font-medium text-xl md:text-2xl tracking-wide text-white border-transparent  transition-colors duration-200 hover:text-sky-400 ease-linear transform border-4"
}
>
   Register
      </NavLink>

      <NavLink to="/login" className={({ isActive }) =>
isActive ? "font-medium text-xl md:text-2xl tracking-wide transition-colors duration-200 text-sky-400  ease-linear transform border-2 px-2 py-1 bg-gray-900 border-pink-600" : "font-medium text-xl md:text-2xl tracking-wide text-white border-transparent transition-colors duration-200 hover:text-sky-400 ease-linear transform border-4 "
}
      >
        Login
      </NavLink>
</div>
<div className='px-20 py-12'>
    
<form className="mt-6 " onSubmit={handleLogIn} >
 

 <div className='mt-4'>
   <label
     htmlFor="email"
     className="block text-sm text-gray-800 dark:text-gray-200"
   >
     Email
   </label>
   <input
   name="email"
     type="email"
     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 
      border-blue-300
     dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
     required
   />
 </div>

<div className='flex'>
<div className="mt-4">
   <div className="flex items-center justify-between">
     <label
       htmlFor="password"
       className="block text-sm text-gray-800 dark:text-gray-200"
     >
       Password
     </label>
   </div>

   <input
     type="password"
     name="password"
     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-blue-300 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
     required
   />
 </div>


</div>

 {error && (
     <p className="text-red-500  text-sm font-bold text-center my-3">{error}</p>
   )}

 <div className="mt-4">
   <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
   Login
   </button>
 </div>
</form>
</div>

      <div className="flex items-center justify-between px-6">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <button className="text-xs text-center text-gray-900 uppercase dark:text-gray-400">
          or Login with Social Media
        </button>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div>

      <Link className="flex items-center mt-2 -mx-2 px-6 pb-6">
        <button
        onClick={handleGoogleLogin}
          type="button"
          className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-purple-800  focus:outline-none"
        >
          <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
          </svg>

          <span className="inline">Google</span>
        </button>
      </Link>


    </div>
  </div>
    </div>
    );
};

export default Login;