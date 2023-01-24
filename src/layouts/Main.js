import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <ToastContainer position="top-center" autoClose={1500}> 

            </ToastContainer>
        </div>
    );
};

export default Main;