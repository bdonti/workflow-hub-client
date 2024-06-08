import { useState, useEffect } from "react";
import useTasks from "../../../hooks/useTasks";

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

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task._id}>
                {task.name} - {task.task} - {task.monthName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EmployeeProgress;
