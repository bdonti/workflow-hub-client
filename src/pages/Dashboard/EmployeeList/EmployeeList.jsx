import useEmployees from "../../../hooks/useEmployees";

const EmployeeList = () => {
  const [employees] = useEmployees();
  return <div>Total Employees: {employees.length}</div>;
};

export default EmployeeList;
