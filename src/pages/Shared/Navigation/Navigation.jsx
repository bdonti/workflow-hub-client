import { Button, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/logo.png";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Website Logo" />
          </Link>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            WorkFlow Hub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 space-x-4">
          {user ? (
            <>
              <Button onClick={handleLogOut} className="bg-[#0c0833]">
                Logout
              </Button>
            </>
          ) : (
            <>
              <div className="flex gap-8">
                <Link to="/login">
                  <Button className="bg-[#0c0833]">Login</Button>
                </Link>
                <Link to="/register" className="hidden md:block">
                  <Button gradientMonochrome="teal">Register Now</Button>
                </Link>
              </div>
            </>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/">
            <Navbar.Link>Home</Navbar.Link>
          </Link>
          {user && (
            <Link to="/dashboard">
              <Navbar.Link>Dashboard</Navbar.Link>
            </Link>
          )}
          <Link to="/contact-us">
            <Navbar.Link>Contact Us</Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
