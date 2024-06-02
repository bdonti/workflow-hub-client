import { Outlet } from "react-router-dom";
import Navigation from "../pages/Shared/Navigation/Navigation";

const Root = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
