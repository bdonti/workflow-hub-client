import { useContext } from "react";
import useHR from "../hooks/useHR";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from "flowbite-react";

const HrRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isHR, isHRLoading] = useHR();
  const location = useLocation();

  if (loading || isHRLoading) {
    return (
      <Spinner
        className="flex justify-center items-center"
        aria-label="Extra large spinner example"
        size="xl"
      />
    );
  }

  if (user && isHR) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default HrRoute;
