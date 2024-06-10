import { List } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { FaHome, FaUsers } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";
import useEmployee from "../hooks/useEmployee";
import useHR from "../hooks/useHR";
import { PiUsersThreeFill } from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";
import { GiProgression } from "react-icons/gi";
import useAdmin from "../hooks/useAdmin";
import { VscFeedback } from "react-icons/vsc";

const Dashboard = () => {
  const [isEmployee] = useEmployee();
  const [isHR] = useHR();
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="flex gap-8">
        <div className="w-[150px] lg:w-[240px] min-h-screen bg-[#323870] text-start">
          <>
            {isEmployee && (
              <div className="space-y-4 mt-5">
                <List className="text-white text-xl list-none">
                  <List.Item>
                    <Link
                      className="flex justify-center items-center gap-2"
                      to="/"
                    >
                      <FaHome className="mr-2"></FaHome>
                      Employee Home
                    </Link>
                  </List.Item>
                </List>
                <List className="text-white text-xl list-none">
                  <List.Item>
                    <Link
                      className="flex justify-center items-center gap-2"
                      to="/dashboard/work-sheet"
                    >
                      <LuFileSpreadsheet className="mr-2" />
                      Work Sheet
                    </Link>
                  </List.Item>
                </List>
                <List className="text-white text-xl list-none">
                  <List.Item>
                    <Link
                      className="flex justify-center items-center gap-2"
                      to="/dashboard/payment-history"
                    >
                      <TfiMoney className="mr-2" />
                      Payment History
                    </Link>
                  </List.Item>
                </List>
              </div>
            )}
            {isHR && (
              <div className="space-y-4 mt-5">
                <List className="text-white text-xl list-none">
                  <List.Item>
                    <Link
                      className="flex justify-center items-center gap-2"
                      to="/"
                    >
                      <FaHome className="mr-2"></FaHome>
                      HR Home
                    </Link>
                  </List.Item>
                </List>
                <List className="text-white text-xl list-none">
                  <List.Item>
                    <Link
                      className="flex justify-center items-center gap-2"
                      to="/dashboard/employee-list"
                    >
                      <PiUsersThreeFill className="mr-2" />
                      Employee List
                    </Link>
                  </List.Item>
                </List>
                <List className="text-white text-xl list-none">
                  <List.Item>
                    <Link
                      className="flex justify-center items-center gap-2"
                      to="/dashboard/progress"
                    >
                      <GiProgression className="mr-2" />
                      Employee Progress
                    </Link>
                  </List.Item>
                </List>
              </div>
            )}
            {isAdmin && (
              <div className="space-y-4 mt-5">
                <List className="text-white text-xl list-none">
                  <List.Item>
                    <Link
                      className="flex justify-center items-center gap-2"
                      to="/"
                    >
                      <FaHome className="mr-2"></FaHome>
                      Admin Home
                    </Link>
                  </List.Item>
                </List>
                <List className="text-white text-xl list-none">
                  <List.Item>
                    <Link
                      className="flex justify-center items-center gap-2"
                      to="/dashboard/all-employee-list"
                    >
                      <FaUsers className="mr-2" />
                      All Employees
                    </Link>
                  </List.Item>
                </List>
                <List className="text-white text-xl list-none">
                  <List.Item>
                    <Link
                      className="flex justify-center items-center gap-2"
                      to="/dashboard/opinions"
                    >
                      <VscFeedback className="mr-2" /> Visitor Feedbacks
                    </Link>
                  </List.Item>
                </List>
              </div>
            )}
          </>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Dashboard;
