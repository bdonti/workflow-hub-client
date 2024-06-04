import { Button, Label, TextInput } from "flowbite-react";
import Lottie from "lottie-react";
import loginBanner from "../../assets/login.json";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-6 mt-20 mb-5 lg:mb-0">
      <div>
        <Lottie animationData={loginBanner} loop={true} className="h-[500px]" />
      </div>
      <div>
        <form className="flex flex-col gap-4 w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              type="password"
              name="email"
              placeholder="Password"
              required
            />
          </div>
          <Link to="/register" className="text-indigo-400 font-semibold">
            Are you a new user? Please Register!!
          </Link>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
