import { Avatar, Card } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import useEmployees from "../../../hooks/useEmployees";

const EmployeeDetails = () => {
  const details = useLoaderData();
  const { email } = useParams();
  const [employees, ,] = useEmployees();
  console.log(employees);
  const employee = employees.find((emp) => emp.email === email);

  const monthNames = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const employeeData = details.map((item) => ({
    monthYear: `${monthNames[item.month]}, ${item.year}`,
    salary: parseInt(item.employeeSalary),
  }));

  if (!employees) {
    return <div>Error fetching employee data...</div>;
  }

  if (!employee) {
    return <div>No employee found with the provided email</div>;
  }

  const shouldRotateLabels = employeeData.length > 7;

  return (
    <div>
      <div className="mt-10 mx-5 lg:mx-0">
        <p className="text-sm text-[#eb6ca9] text-center font-bold">
          Salary vs Month
        </p>
        <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-20 text-center">
          Detailed Report for {employee?.name}
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div>
          <Card className="max-w-sm">
            <div className="flex flex-col items-start pb-10">
              <Avatar img={employee?.image} size="lg" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {employee?.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {employee?.designation}
              </span>
            </div>
          </Card>
        </div>
        <div className="col-span-2">
          {details.length !== 0 ? (
            <>
              <ResponsiveContainer className="w-full" height={400}>
                <BarChart
                  data={employeeData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: shouldRotateLabels ? 40 : 10,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    className="md:block hidden"
                    dataKey="monthYear"
                    textAnchor="middle"
                    interval={0}
                    angle={shouldRotateLabels ? -45 : 0}
                    dy={shouldRotateLabels ? 10 : 0}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="salary" fill="#353B6E" />
                  <Legend align="center" />
                </BarChart>
              </ResponsiveContainer>
            </>
          ) : (
            <h3 className="text-2xl font-bold text-center my-4">
              No Data Found for this user. Please Start Paying.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
