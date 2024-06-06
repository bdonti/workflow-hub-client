import { Button, Table } from "flowbite-react";
import useEmployees from "../../../hooks/useEmployees";
import { RxCross2 } from "react-icons/rx";
import { MdVerified } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const EmployeeList = () => {
  const [employees, refetch] = useEmployees();
  const axiosPublic = useAxiosPublic();

  const handleVerify = async (id) => {
    const res = await axiosPublic.put(`/users/verify/${id}`);
    if (res.status === 200) {
      await refetch();
      toast.success("Successfully Verified");
    } else {
      toast.error("Failed to verify");
    }
  };

  return (
    <div className="mt-10 mx-5 lg:mx-0">
      <div>
        <p className="text-sm text-[#eb6ca9] text-center font-bold">
          Employee List
        </p>
        <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-20 text-center">
          Please Manage Your Employees
        </h3>
      </div>
      <div>
        <div className="overflow-x-auto">
          <Table className="min-w-full divide-y divide-gray-200">
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Verified</Table.HeadCell>
              <Table.HeadCell>Bank Account</Table.HeadCell>
              <Table.HeadCell>Salary</Table.HeadCell>
              <Table.HeadCell>Pay</Table.HeadCell>
              <Table.HeadCell>Details</Table.HeadCell>
            </Table.Head>
            <Table.Body className="bg-white divide-y divide-gray-200">
              {employees.map((employee, idx) => (
                <Table.Row
                  key={employee._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="text-[#353B6E]">{idx + 1}</Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    {employee.name}
                  </Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    {employee.email}
                  </Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    {employee?.isVerified === true ? (
                      <MdVerified className="text-green-400 text-2xl" />
                    ) : (
                      <>
                        <div className="flex justify-center items-center gap-4">
                          <RxCross2 className="text-red-700 text-2xl" />
                          <Button onClick={() => handleVerify(employee._id)}>
                            Verify
                          </Button>
                        </div>
                      </>
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    {employee.accountNumber
                      ? employee.accountNumber
                      : "Not Found"}
                  </Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    {employee?.salary ? employee.salary : "Not Found"}
                  </Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    {employee.isVerified === true ? (
                      <Button>Pay</Button>
                    ) : (
                      <Button disabled>Pay</Button>
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    <Button>Details</Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
