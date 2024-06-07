import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import WorkSheet from "../pages/Dashboard/WorkSheet/WorkSheet";
import EmployeeList from "../pages/Dashboard/EmployeeList/EmployeeList";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import EmployeeDetails from "../pages/Dashboard/EmployeeDetails/EmployeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "work-sheet",
        element: <WorkSheet></WorkSheet>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "employee-list",
        element: <EmployeeList></EmployeeList>,
      },
      {
        path: "details/:email",
        element: <EmployeeDetails></EmployeeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/payments/${params.email}`),
      },
    ],
  },
]);

export default router;
