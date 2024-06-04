import { Button, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

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
        <Navbar.Brand href="https://flowbite-react.com"></Navbar.Brand>
        <div className="flex md:order-2 space-x-4">
          {user ? (
            <>
              <div>
                <Button onClick={handleLogOut} className="bg-[#0c0833]">
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-8">
                <div>
                  <Link to="/login">
                    <Button className="bg-[#0c0833]">Login</Button>
                  </Link>
                </div>
                <div>
                  <Link to="/register">
                    <Button gradientMonochrome="teal">Register Now</Button>
                  </Link>
                </div>
              </div>
            </>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/">
            <Navbar.Link>Home</Navbar.Link>
          </Link>
          <Link to="/">
            <Navbar.Link>Dashboard</Navbar.Link>
          </Link>
          <Link to="/">
            <Navbar.Link>Contact Us</Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
