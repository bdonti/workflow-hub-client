import { useContext } from "react";
import useAdmin from "../../../hooks/useAdmin";
import useAllEmployees from "../../../hooks/useAllEmployees";
import useEmployee from "../../../hooks/useEmployee";
import useHR from "../../../hooks/useHR";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaHandHoldingDollar, FaUsers } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import useOpinions from "../../../hooks/useOpinions";
import useTasks from "../../../hooks/useTasks";
import { MdTaskAlt } from "react-icons/md";
import usePayments from "../../../hooks/usePayments";
import useTask from "../../../hooks/useTask";
import usePayment from "../../../hooks/usePayment";

const DashboardHome = () => {
  const [isEmployee] = useEmployee();
  const [isHR] = useHR();
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);

  const [allEmployees] = useAllEmployees();
  const [opinions] = useOpinions();
  const [tasks] = useTasks();
  const [payments] = usePayments();
  const [payment] = usePayment();
  const [task] = useTask();
  return (
    <div>
      <div>
        <div>
          <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-10 mt-10">
            Welcome {user?.displayName}
          </h3>
        </div>
        <>
          {isAdmin && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="flex flex-col items-center">
                  <FaUsers className="text-2xl lg:text-3xl" />
                  <h3 className="text-2xl lg:text-3xl text-[#353B6E] font-bold mb-10 mt-10">
                    Total Verified Employees
                  </h3>
                  <p className="text-xl font-semibold">{allEmployees.length}</p>
                </div>
                <div className="flex flex-col items-center mt-8 lg:mt-0">
                  <VscFeedback className="text-2xl lg:text-3xl" />
                  <h3 className="text-2xl lg:text-3xl text-[#353B6E] font-bold mb-10 mt-10">
                    Total Feedbacks
                  </h3>
                  <p className="text-xl font-semibold">{opinions.length}</p>
                </div>
              </div>
            </>
          )}
        </>
        <>
          {isHR && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="flex flex-col items-center">
                  <MdTaskAlt className="text-2xl lg:text-3xl" />
                  <h3 className="text-2xl lg:text-3xl text-[#353B6E] font-bold mb-10 mt-10">
                    Total Tasks Received
                  </h3>
                  <p className="text-xl font-semibold">{tasks.length}</p>
                </div>
                <div className="flex flex-col items-center mt-8 lg:mt-0">
                  <FaHandHoldingDollar className="text-2xl lg:text-3xl" />
                  <h3 className="text-2xl lg:text-3xl text-[#353B6E] font-bold mb-10 mt-10">
                    Total Payments By HR
                  </h3>
                  <p className="text-xl font-semibold">{payments.length}</p>
                </div>
              </div>
            </>
          )}
        </>
        <>
          {isEmployee && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="flex flex-col items-center">
                  <MdTaskAlt className="text-2xl lg:text-3xl" />
                  <h3 className="text-2xl lg:text-3xl text-[#353B6E] font-bold mb-10 mt-10">
                    Total Tasks Posted
                  </h3>
                  <p className="text-xl font-semibold">{task.length}</p>
                </div>
                <div className="flex flex-col items-center mt-8 lg:mt-0">
                  <FaHandHoldingDollar className="text-2xl lg:text-3xl" />
                  <h3 className="text-2xl lg:text-3xl text-[#353B6E] font-bold mb-10 mt-10">
                    Total Payments Received
                  </h3>
                  <p className="text-xl font-semibold">{payment.length}</p>
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default DashboardHome;
