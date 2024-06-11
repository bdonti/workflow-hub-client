import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdTaskAlt } from "react-icons/md";
import useTasks from "../../../hooks/useTasks";
import usePayments from "../../../hooks/usePayments";

const HrHome = () => {
  const [tasks] = useTasks();
  const [payments] = usePayments();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-20">
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
  );
};

export default HrHome;
