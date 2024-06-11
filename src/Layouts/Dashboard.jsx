import { useContext, useState } from "react";
import { Button, List } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { FaHome, FaUsers, FaBars } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";
import useEmployee from "../hooks/useEmployee";
import useHR from "../hooks/useHR";
import useAdmin from "../hooks/useAdmin";
import { PiUsersThreeFill } from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";
import { GiProgression } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { CgLogOut } from "react-icons/cg";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const [isEmployee] = useEmployee();
  const [isHR] = useHR();
  const [isAdmin] = useAdmin();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const commonRoutes = (
    <>
      <List className="text-white text-lg list-none mb-16 lg:mb-48">
        <List.Item>
          <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </List.Item>
      </List>
      <List className="text-white text-lg list-none mb-16 lg:mb-48">
        <List.Item>
          <Link className="flex justify-start items-center gap-2" to="/">
            <FaHome className="mr-2" />
            Home
          </Link>
        </List.Item>
      </List>
      <List className="text-white text-lg list-none mb-16 lg:mb-48">
        <List.Item>
          <button onClick={handleLogOut}>
            <CgLogOut className="mr-2 inline" />
            Log Out
          </button>
        </List.Item>
      </List>
    </>
  );

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:hidden p-4">
        <Button
          className="text-white bg-[#323870] p-2 rounded"
          onClick={toggleSidebar}
        >
          <FaBars />
        </Button>
      </div>
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block lg:w-[240px] min-h-screen bg-[#323870] text-start p-4`}
      >
        <>
          {isEmployee && (
            <div className="space-y-4 mt-5">
              <List className="text-white text-lg list-none">
                <List.Item>
                  <Link
                    className="flex justify-start items-center gap-2"
                    to="/dashboard/employeeHome"
                  >
                    <FaHome className="mr-2" />
                    Employee Home
                  </Link>
                </List.Item>
              </List>
              <List className="text-white text-lg list-none">
                <List.Item>
                  <Link
                    className="flex justify-start items-center gap-2"
                    to="/dashboard/work-sheet"
                  >
                    <LuFileSpreadsheet className="mr-2" />
                    Work Sheet
                  </Link>
                </List.Item>
              </List>
              <List className="text-white text-lg list-none mb-16 lg:mb-48">
                <List.Item>
                  <Link
                    className="flex justify-start items-center gap-2"
                    to="/dashboard/payment-history"
                  >
                    <TfiMoney className="mr-2" />
                    Payment History
                  </Link>
                </List.Item>
              </List>
              {commonRoutes}
            </div>
          )}
          {isHR && (
            <div className="space-y-4 mt-5">
              <List className="text-white text-lg list-none">
                <List.Item>
                  <Link
                    className="flex justify-start items-center gap-2"
                    to="/dashboard/HRHome"
                  >
                    <FaHome className="mr-2" />
                    HR Home
                  </Link>
                </List.Item>
              </List>
              <List className="text-white text-lg list-none">
                <List.Item>
                  <Link
                    className="flex justify-start items-center gap-2"
                    to="/dashboard/employee-list"
                  >
                    <PiUsersThreeFill className="mr-2" />
                    Employee List
                  </Link>
                </List.Item>
              </List>
              <List className="text-white text-lg list-none">
                <List.Item>
                  <Link
                    className="flex justify-start items-center gap-2"
                    to="/dashboard/progress"
                  >
                    <GiProgression className="mr-2" />
                    Employee Progress
                  </Link>
                </List.Item>
              </List>
              {commonRoutes}
            </div>
          )}
          {isAdmin && (
            <div className="space-y-4 mt-5">
              <List className="text-white text-lg list-none">
                <List.Item>
                  <Link
                    className="flex justify-start items-center gap-2"
                    to="/dashboard/adminHome"
                  >
                    <FaHome className="mr-2" />
                    Admin Home
                  </Link>
                </List.Item>
              </List>
              <List className="text-white text-lg list-none">
                <List.Item>
                  <Link
                    className="flex justify-start items-center gap-2"
                    to="/dashboard/all-employee-list"
                  >
                    <FaUsers className="mr-2" />
                    All Employees
                  </Link>
                </List.Item>
              </List>
              <List className="text-white text-lg list-none">
                <List.Item>
                  <Link
                    className="flex justify-start items-center gap-2"
                    to="/dashboard/opinions"
                  >
                    <VscFeedback className="mr-2" />
                    Visitor Feedbacks
                  </Link>
                </List.Item>
              </List>
              {commonRoutes}
            </div>
          )}
        </>
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Dashboard;
