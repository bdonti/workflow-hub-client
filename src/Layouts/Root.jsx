import { Outlet } from "react-router-dom";
import Navigation from "../pages/Shared/Navigation/Navigation";

const Root = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
