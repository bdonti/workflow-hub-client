import { Button, Label, TextInput } from "flowbite-react";
import Lottie from "lottie-react";
import loginBanner from "../../assets/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import useAllEmployees from "../../hooks/useAllEmployees";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [allEmployees] = useAllEmployees();

  const axiosPublic = useAxiosPublic();

  const { signUser, signInWithGoogle } = useContext(AuthContext);

  const isFired = (email) => {
    const employee = allEmployees.find((emp) => emp.email === email);
    return employee && employee.isFired;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const fired = isFired(email);

    if (fired) {
      toast.error("You are Fired!! Please Contact Support!!");
      return;
    }

    signUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(location.state ? location.state : "/");
        toast.success("Successfully Logged In");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => {
      console.log(res.user);
      const user = res.user;
      const fired = isFired(user.email);
      if (fired) {
        toast.error("You are Fired!! Please Contact Support!!");
        return;
      }
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        role: "employee",
        isVerified: false,
      };
      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          console.log(res.data);
          navigate(location.state ? location.state : "/");
          toast.success("Successfully Logged In");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setLoginError(errorMessage);
        });
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-6 mt-20 mb-5 lg:mb-0">
      <div>
        <Lottie animationData={loginBanner} loop={true} className="h-[500px]" />
      </div>
      <div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput name="email" type="email" placeholder="Email" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <Link to="/register" className="text-indigo-400 font-semibold">
            Are you a new user? Please Register!!
          </Link>
          {<span className="font-bold text-red-700 my-2">{loginError}</span>}
          <Button className="bg-[#0c0833]" type="submit">
            Login
          </Button>
        </form>

        <div className="my-4">
          <Button
            onClick={handleGoogleSignIn}
            className="w-full"
            gradientMonochrome="teal"
          >
            Google <FaGoogle className="ml-2"></FaGoogle>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
