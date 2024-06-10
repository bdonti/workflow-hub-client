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
import EmployeeProgress from "../pages/Dashboard/EmployeeProgress/EmployeeProgress";
import PrivateRoute from "../providers/PrivateRoute";
import AllEmployees from "../pages/Dashboard/AllEmployees/AllEmployees";
import ContactUs from "../pages/ContactUs/ContactUs";
import VisitorOpinions from "../pages/Dashboard/VisitorOpinions/VisitorOpinions";

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
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
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
      {
        path: "progress",
        element: <EmployeeProgress></EmployeeProgress>,
      },
      {
        path: "all-employee-list",
        element: <AllEmployees></AllEmployees>,
      },
      {
        path: "opinions",
        element: <VisitorOpinions></VisitorOpinions>,
      },
    ],
  },
]);

export default router;
