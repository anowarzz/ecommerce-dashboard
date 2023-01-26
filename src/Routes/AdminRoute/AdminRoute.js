import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading} = useContext(AuthContext);

  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  console.log(user);
  console.log(user?.email);
  

  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
      <LoadingSpinner />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to="/" state={{ from: location }} replace>
   
    </Navigate>
  );
};

export default AdminRoute;