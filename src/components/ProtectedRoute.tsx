import { useNavigate } from "react-router-dom";
import React from "react";

export const ProtectedRoute = ({ children, isAdmin=false }: any) => {
    const navigate = useNavigate();
    React.useEffect(() => {
        const isAccess = localStorage.getItem('isAccess');
        const admin = localStorage.getItem('admin');
    if (!isAccess) {
        navigate('/loginadmin',{replace:true});
    }
    if (isAccess && isAccess !== '1' && !isAdmin) {
      // Redirect to the login page if not equal to 1
      navigate('/loginadmin',{replace:true});
        }
        if (isAdmin) {
            if (!admin) {
                navigate('/loginadmin',{replace:true});
            }
            if (admin) {
                navigate('/admin',{replace:true});
            }
    }
    

    },[navigate])
  return children;
};