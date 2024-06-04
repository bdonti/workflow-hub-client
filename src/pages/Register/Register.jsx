import { Button, Dropdown, Label, TextInput } from "flowbite-react";
import Lottie from "lottie-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const [role, setRole] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setValue("role", selectedRole, { shouldValidate: true });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-6 mt-20 mb-5 lg:mb-5">
      {/* <div>
        <Lottie animationData={loginBanner} loop={true} className="h-[500px]" />
      </div> */}
      <div className="w-full mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <span className="font-bold text-red-700">
                Name field is required
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              required
            />
            {errors.email && (
              <span className="font-bold text-red-700">
                Email field is required
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/,
              })}
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <span className="font-bold text-red-700">
                Password field is required
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="font-bold text-red-700">
                Password Must be greater or equal to 6 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="font-bold text-red-700">
                Password must contain one capital letter & one special character
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="role" value="Your Role" />
            </div>
            <Dropdown
              label={role || "Please Select Role"}
              dismissOnClick={false}
            >
              <Dropdown.Item onClick={() => handleRoleSelect("Employee")}>
                Employee
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleRoleSelect("HR")}>
                HR
              </Dropdown.Item>
            </Dropdown>
            <input
              type="hidden"
              {...register("role", { required: true })}
              value={role}
            />
            {errors.role && (
              <span className="font-bold text-red-700">
                Role field is required
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="accountNumber" value="Bank Account Number" />
            </div>
            <TextInput
              {...register("accountNumber", { required: true })}
              type="number"
              placeholder="Account Number"
            />
            {errors.accountNumber && (
              <span className="font-bold text-red-700">
                Account Number Field is Required
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="salary" value="Salary" />
            </div>
            <TextInput
              {...register("salary", { required: true })}
              type="number"
              placeholder="Salary"
            />
            {errors.salary && (
              <span className="font-bold text-red-700">
                Salary Field is Required
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="designation" value="Designation" />
            </div>
            <TextInput
              {...register("designation", { required: true })}
              type="text"
              placeholder="Designation"
            />
            {errors.designation && (
              <span className="font-bold text-red-700">
                Designation Field is Required
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="image" value="Image" />
            </div>
            <TextInput {...register("image", { required: true })} type="file" />
            {errors.image && (
              <span className="font-bold text-red-700">
                Please Insert Your Image
              </span>
            )}
          </div>
          <Link to="/login" className="text-indigo-400 font-semibold">
            Are you a old user? Please Login!!
          </Link>
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
