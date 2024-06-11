import { FaUsers } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import useAllEmployees from "../../../hooks/useAllEmployees";
import useOpinions from "../../../hooks/useOpinions";

const AdminHome = () => {
  const [allEmployees] = useAllEmployees();
  const [opinions] = useOpinions();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-20">
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
  );
};

export default AdminHome;
