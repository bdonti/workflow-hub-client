import { Outlet } from "react-router-dom";
import Navigation from "../pages/Shared/Navigation/Navigation";
import WebFooter from "../pages/Shared/WebFooter/WebFooter";

const Root = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <WebFooter></WebFooter>
    </div>
  );
};

export default Root;
