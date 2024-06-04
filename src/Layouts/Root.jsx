import { Outlet } from "react-router-dom";
import Navigation from "../pages/Shared/Navigation/Navigation";
import WebFooter from "../pages/Shared/WebFooter/WebFooter";

const Root = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="max-w-7xl mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>
      <div className="min-h-screen">
        <WebFooter></WebFooter>
      </div>
    </div>
  );
};

export default Root;
