import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DashboardNavbar from '../Shared/DashboardNavbar/DashboardNavbar';

const DashboardLayout = () => {
    return (
        <div className="bg-gray-200">
        <DashboardNavbar />
        <div className="drawer drawer-mobile">
          <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            
  
      <h3 className="mt-2 text-2xl lg:text-3xl text-center"><span className="badge badge-info">Welcome Admin</span></h3>
  
        <p className="text-center text-sm  text-blue-600 font-semibold mb-4">Browse options from  Menu bar</p>
  <div>
  <Outlet />
  </div>
  
          </div>

          <div className="drawer-side">
            <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-gray-300 text-base-content pt-24">
        
       
          

              <li className="border-gray-100 bg-gray-800 shadow-xl text-gray-50 mb-1 hover:bg-myPink">
                    <Link to="/dashboard/products">Products</Link>
                  </li>
  
                  <li className="border-gray-100 bg-gray-800 shadow-xl text-gray-50 mb-1 hover:bg-myPink">
                    <Link to="/dashboard/customers">Customers</Link>
                  </li>
                  <li className="border-gray-100 bg-gray-800 shadow-xl text-gray-50 mb-1 hover:bg-myPink">
                    <Link to="/dashboard/addProduct">Add Product</Link>
                  </li>

              <li className="border-gray-100 bg-gray-800 shadow-xl text-gray-50 mb-1 hover:bg-myPink">
                    <Link to="/dashboard/addCustomer">Add Customer</Link>
                  </li>

        
            </ul>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default DashboardLayout;