import useAllEmployees from "../../../hooks/useAllEmployees";

const AllEmployees = () => {
  const [allEmployees] = useAllEmployees();
  console.log(allEmployees);

  return <div></div>;
};

export default AllEmployees;
