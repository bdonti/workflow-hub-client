import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      const email = localStorage.getItem("email");
      const role = localStorage.getItem("role");
      // console.log("Request Stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token} with user info email: ${email} & role: ${role}`;
      return config;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      const status = error.response.status;
      console.log("Error in interceptor: ", status);
      if (status === 401 || status === 403) {
        logOut()
          .then(() => {
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
