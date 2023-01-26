import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
// import logo from '../../assets/dashbaord.jpg'
import { toast } from "react-toastify";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);



  // Log out a user from the web app
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Lout Successful", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <React.Fragment>
      <li className="navitem">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
              : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
          }
        >
          Home
        </NavLink>
      </li>

      {user?.uid ? (
        <>
          <li>
       {
        !isAdmin &&      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive
            ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
            : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
        }
      >
        My Cart
      </NavLink>
        }

            {isAdmin && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
                    : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
                }
              >
                Dashboard
              </NavLink>
            )}
            
            <button
              onClick={handleLogOut}
              className="btn-sm mt-2 items-center text-black py-0 bg-myYellow ml-2 hover:bg-info"
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
                  : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
                  : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar  py-6 px-4 bg-gray-900 flex justify-between dark:text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn bg-gray-400 hover:bg-gray-500 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost hover:bg-transparent  normal-case text-xl md:text-2xl"
        >
          {/* <img src={logo} className="w-12 md:w-16" alt="" /> */}
          <p className="mx-1 pl-3 md:mx-3 text-blue-400">
            <span className="hover:text-blue-500 text-myPink">E</span>
            <span className="hover:text-blue-500  text-myPink">c</span>
            <span className="hover:text-blue-500  text-myPink">o</span>
            <span className="hover:text-blue-500  text-myPink">m</span>
            <span className="hover:text-blue-500  text-myPink">m</span>
            <span className="hover:text-blue-500  text-myPink">e</span>
            <span className="hover:text-blue-500  text-myPink">r</span>
            <span className="hover:text-blue-500  text-myPink">c</span>
            <span className="hover:text-blue-500  text-myPink">e</span>{" "}
            <span className="hover:text-myPink ">D</span>
            <span className="hover:text-myPink">a</span>
            <span className="hover:text-myPink">s</span>
            <span className="hover:text-myPink">h</span>
            <span className="hover:text-myPink">B</span>
            <span className="hover:text-myPink">o</span>
            <span className="hover:text-myPink">a</span>
            <span className="hover:text-myPink">r</span>
            <span className="hover:text-myPink">d</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
