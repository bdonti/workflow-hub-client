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
import AllEmployees from "../pages/Dashboard/AllEmployees/AllEmployees";
import ContactUs from "../pages/ContactUs/ContactUs";
import VisitorOpinions from "../pages/Dashboard/VisitorOpinions/VisitorOpinions";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../pages/Dashboard/AdminHome.jsx/AdminHome";
import EmployeeHome from "../pages/Dashboard/EmployeeHome/EmployeeHome";
import HrHome from "../pages/Dashboard/HrHome/HrHome";
import HrRoute from "./HrRoute";
import EmployeeRoute from "./EmployeeRoute";

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
        path: "",
        element: (
          <PrivateRoute>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "employeeHome",
        element: (
          <EmployeeRoute>
            <EmployeeHome></EmployeeHome>
          </EmployeeRoute>
        ),
      },
      {
        path: "work-sheet",
        element: (
          <EmployeeRoute>
            <WorkSheet></WorkSheet>
          </EmployeeRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <EmployeeRoute>
            <PaymentHistory></PaymentHistory>
          </EmployeeRoute>
        ),
      },
      {
        path: "HRHome",
        element: (
          <HrRoute>
            <HrHome></HrHome>
          </HrRoute>
        ),
      },
      {
        path: "employee-list",
        element: (
          <HrRoute>
            <EmployeeList></EmployeeList>
          </HrRoute>
        ),
      },
      {
        path: "details/:email",
        element: (
          <HrRoute>
            <EmployeeDetails></EmployeeDetails>
          </HrRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://workflowhub-dbserver.vercel.app/payments/${params.email}`
          ),
      },
      {
        path: "progress",
        element: (
          <HrRoute>
            <EmployeeProgress></EmployeeProgress>
          </HrRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "all-employee-list",
        element: (
          <AdminRoute>
            <AllEmployees></AllEmployees>
          </AdminRoute>
        ),
      },
      {
        path: "opinions",
        element: (
          <AdminRoute>
            <VisitorOpinions></VisitorOpinions>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
