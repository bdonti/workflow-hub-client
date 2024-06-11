import { useContext } from "react";
import useHR from "../hooks/useHR";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const HrRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isHR, isHRLoading] = useHR();
  const location = useLocation();

  if (loading || isHRLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isHR) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default HrRoute;
