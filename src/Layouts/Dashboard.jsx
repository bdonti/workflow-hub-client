import { List } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { FaHome } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";
import useEmployee from "../hooks/useEmployee";
import useHR from "../hooks/useHR";

const Dashboard = () => {
  const [isEmployee] = useEmployee();
  const [isHR] = useHR();
  return (
    <div>
      <div className="flex gap-8">
        <div className="w-[150px] lg:w-[240px] min-h-screen bg-[#323870]">
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
                      to="/"
                    >
                      <FaHome className="mr-2"></FaHome>
                      Employee List
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
