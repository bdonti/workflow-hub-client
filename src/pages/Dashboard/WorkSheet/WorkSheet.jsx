import { Button, Dropdown, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WorkSheet = () => {
  const [task, setTask] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleTaskSelect = (selectedTask) => {
    setTask(selectedTask);
    setValue("task", selectedTask.toLowerCase(), { shouldValidate: true });
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setValue("date", date, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="mt-10">
      <div>
        <p className="text-sm text-[#eb6ca9] text-center font-bold">
          Worksheet
        </p>
        <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-10 text-center">
          Please Add Your Work Hours Here
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="task" value="Select Task" />
              </div>
              <Dropdown
                label={task || "Please Select Task"}
                dismissOnClick={true}
              >
                <Dropdown.Item onClick={() => handleTaskSelect("Sales")}>
                  Sales
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleTaskSelect("Support")}>
                  Support
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleTaskSelect("Content")}>
                  Content
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleTaskSelect("Paper Work")}>
                  Paper Work
                </Dropdown.Item>
              </Dropdown>
              <input
                type="hidden"
                {...register("task", { required: true })}
                value={task}
              />
              {errors.task && (
                <span className="font-bold text-red-700 py-2">
                  Task field is required
                </span>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Hours Worked" />
              </div>
              <TextInput
                {...register("workHours", { required: true })}
                type="number"
                placeholder="Work Hours"
              />
              {errors.workHours && (
                <span className="font-bold text-red-700 py-2">
                  Work Hour is required
                </span>
              )}
            </div>
            <div>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                className="w-full"
              />
              <input
                type="hidden"
                {...register("date", { required: true })}
                value={startDate}
              />
              {errors.date && (
                <span className="font-bold text-red-700 py-2">
                  Please Fill the date
                </span>
              )}
            </div>
            <Button className="bg-[#0c0833]" type="submit">
              Submit
            </Button>
            {/* {
              <span className="font-bold text-red-700 my-2">
                {errorMessage}
              </span>
            } */}
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WorkSheet;
