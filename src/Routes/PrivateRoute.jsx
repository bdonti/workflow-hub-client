import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <Spinner
        className="flex justify-center items-center"
        aria-label="Extra large spinner example"
        size="xl"
      />
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default PrivateRoute;
