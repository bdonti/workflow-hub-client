import { Avatar, Card, Dropdown, DropdownItem } from "flowbite-react";
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

const EmployeeDetails = () => {
  const details = useLoaderData();
  const { email } = useParams();
  const { employeeName, employeeImage, employeeDesignation } =
    details.length > 0 ? details[0] : {};

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

  return (
    <div>
      <div className="mt-10 mx-5 lg:mx-0">
        <p className="text-sm text-[#eb6ca9] text-center font-bold">
          Salary vs Month
        </p>
        <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-20 text-center">
          Detailed Report
        </h3>
      </div>
      <div className="my-3 flex justify-center">
        <Card className="max-w-sm">
          <div className="flex flex-col items-center pb-10">
            <Avatar img={employeeImage} className="rounded-xl" size="xl" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {employeeName}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {employeeDesignation}
            </span>
          </div>
        </Card>
      </div>
      {details.length !== 0 ? (
        <>
          <ResponsiveContainer className="w-full" height={400}>
            <BarChart
              data={employeeData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 40,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                className="md:block hidden"
                dataKey="monthYear"
                textAnchor="middle"
                interval={0}
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
  );
};

export default EmployeeDetails;
