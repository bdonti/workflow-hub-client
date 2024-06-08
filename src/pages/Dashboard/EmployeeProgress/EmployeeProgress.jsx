import { useState, useEffect } from "react";
import useTasks from "../../../hooks/useTasks";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "flowbite-react";

const EmployeeProgress = () => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [employeeNames, setEmployeeNames] = useState([]);
  const [tasks, refetch, loading] = useTasks(selectedName, selectedMonth);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    if (tasks.length > 0) {
      const names = [...new Set(tasks.map((task) => task.name))];
      setEmployeeNames(names);
    }
  }, []);

  const handleNameChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedName(selectedValue);
    setSelectedMonth("");
    refetch();
  };

  const handleMonthChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMonth(selectedValue);
    refetch();
  };

  return (
    <div>
      <div className="mt-10 mx-5 lg:mx-0">
        <p className="text-sm text-[#eb6ca9] text-center font-bold">Progress</p>
        <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-10 text-center">
          Showing all the Progress
        </h3>
      </div>
      <div className="flex justify-center items-center space-x-4 mb-5">
        <select value={selectedName} onChange={handleNameChange}>
          <option value="">Select Employee</option>
          {employeeNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">Select Month</option>
          {monthNames.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div>
        {loading ? (
          <Spinner
            className="flex justify-center mt-20"
            aria-label="Extra large spinner example"
            size="xl"
          />
        ) : (
          <Table className="min-w-full divide-y divide-gray-200">
            <TableHead>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Submitted Work</Table.HeadCell>
              <Table.HeadCell>Work Type</Table.HeadCell>
              <Table.HeadCell>Work Hour</Table.HeadCell>
              <Table.HeadCell>Date Submitted</Table.HeadCell>
            </TableHead>
            <TableBody className="bg-white divide-y divide-gray-200">
              {tasks.map((task, idx) => (
                <TableRow
                  key={task._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="text-[#353B6E]">{idx + 1}</TableCell>
                  <TableCell className="text-[#353B6E]">{task.name}</TableCell>
                  <TableCell className="text-[#353B6E]">{task.task}</TableCell>
                  <TableCell className="text-[#353B6E]">
                    {task.workHours} hours
                  </TableCell>
                  <TableCell className="text-[#353B6E]">{task.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default EmployeeProgress;
