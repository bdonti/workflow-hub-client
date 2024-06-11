import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useEmployee from "../hooks/useEmployee";
import { Navigate, useLocation } from "react-router-dom";

const EmployeeRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isEmployee, isEmployeeLoading] = useEmployee();
  const location = useLocation();

  if (loading || isEmployeeLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isEmployee) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default EmployeeRoute;
