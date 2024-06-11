import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useEmployee from "../hooks/useEmployee";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";

const EmployeeRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isEmployee, isEmployeeLoading] = useEmployee();
  const location = useLocation();

  if (loading || isEmployeeLoading) {
    return (
      <Spinner
        className="flex justify-center items-center"
        aria-label="Extra large spinner example"
        size="xl"
      />
    );
  }

  if (user && isEmployee) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default EmployeeRoute;
