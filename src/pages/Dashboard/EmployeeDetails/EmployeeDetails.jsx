import { useLoaderData } from "react-router-dom";

const EmployeeDetails = () => {
  const details = useLoaderData();
  return (
    <div>
      <h1>Details for user: {details.length}</h1>
    </div>
  );
};

export default EmployeeDetails;
