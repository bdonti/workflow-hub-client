import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <div>
          <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-10 mt-10">
            Welcome {user?.displayName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
