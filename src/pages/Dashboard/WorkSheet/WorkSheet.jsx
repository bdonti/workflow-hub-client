import { Button, Dropdown, Label, Table, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import useTask from "../../../hooks/useTask";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const WorkSheet = () => {
  const [task, setTask] = useState("");
  const [tasks, refetch] = useTask();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [taskError, setTaskError] = useState("");
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
    const taskInfo = {
      email: user?.email,
      name: user?.name || user?.displayName,
      task: data.task,
      workHours: data.workHours,
      date: data.date,
    };

    axiosSecure
      .post("/tasks", taskInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Task Added Successfully");
        }
        setTask("");
        reset();
        refetch();
      })
      .catch((error) => setTaskError(error.message));
  };

  const sortedTasks = tasks
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="mt-10 mx-5 lg:mx-0 min-h-screen">
      <div>
        <p className="text-sm text-[#eb6ca9] text-center font-bold">
          Worksheet
        </p>
        <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-20 text-center">
          Please Add Your Work Hours Here
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="lg:w-1/3 w-full">
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
                <Label htmlFor="workHours" value="Hours Worked" />
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
                dateFormat="EEE MMM dd yyyy"
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
            {<span className="font-bold text-red-700 my-2">{taskError}</span>}
          </form>
        </div>
        <div className="lg:w-1/2 w-full mt-5 lg:mt-0">
          <div className="overflow-x-auto">
            <Table className="min-w-full divide-y divide-gray-200">
              <Table.Head>
                <Table.HeadCell>Task Name</Table.HeadCell>
                <Table.HeadCell>Hours Worked</Table.HeadCell>
                <Table.HeadCell>Submit Time</Table.HeadCell>
              </Table.Head>
              <Table.Body className="bg-white divide-y divide-gray-200">
                {sortedTasks.map((task) => (
                  <Table.Row
                    key={task._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="text-[#353B6E]">
                      {task.task}
                    </Table.Cell>
                    <Table.Cell className="text-[#353B6E]">
                      {task.workHours}
                    </Table.Cell>
                    <Table.Cell className="text-[#353B6E]">
                      {task.date}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSheet;
