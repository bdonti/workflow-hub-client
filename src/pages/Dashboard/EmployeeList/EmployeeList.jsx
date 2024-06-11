import { useState } from "react";
import { Button, Modal, Table, TableCell } from "flowbite-react";
import useEmployees from "../../../hooks/useEmployees";
import { RxCross2 } from "react-icons/rx";
import { MdVerified } from "react-icons/md";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EmployeeList = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
  const [employees, refetch] = useEmployees();
  const [openModals, setOpenModals] = useState(
    Array(employees.length).fill(false)
  );
  const axiosSecure = useAxiosSecure();

  const handleVerify = async (id) => {
    const res = await axiosSecure.put(`/users/verify/${id}`);
    if (res.status === 200) {
      await refetch();
      toast.success("Successfully Verified");
    } else {
      toast.error("Failed to verify");
    }
  };

  const handlePayModal = (idx) => {
    const newOpenModals = [...openModals];
    newOpenModals[idx] = true;
    setOpenModals(newOpenModals);
  };

  const handleCloseModal = (idx) => {
    const newOpenModals = [...openModals];
    newOpenModals[idx] = false;
    setOpenModals(newOpenModals);
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
                  <TableCell className="text-[#353B6E]">{idx + 1}</TableCell>
                  <TableCell className="text-[#353B6E]">
                    {employee.name}
                  </TableCell>
                  <TableCell className="text-[#353B6E]">
                    {employee.email}
                  </TableCell>
                  <TableCell className="text-[#353B6E]">
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
                  </TableCell>
                  <TableCell className="text-[#353B6E]">
                    {employee.accountNumber
                      ? employee.accountNumber
                      : "Not Found"}
                  </TableCell>
                  <TableCell className="text-[#353B6E]">
                    {employee?.salary ? employee.salary : "Not Found"}
                  </TableCell>
                  <TableCell className="text-[#353B6E]">
                    {employee.isVerified === true ? (
                      <>
                        <Button onClick={() => handlePayModal(idx)}>Pay</Button>
                        <Modal
                          show={openModals[idx]}
                          onClose={() => handleCloseModal(idx)}
                        >
                          <Modal.Header>
                            Pay Salary for {employee.name}
                          </Modal.Header>
                          <Modal.Body>
                            <div className="space-y-6">
                              <Elements stripe={stripePromise}>
                                <Checkout
                                  salary={employee.salary}
                                  email={employee.email}
                                  name={employee.name}
                                  image={employee.image}
                                  designation={employee.designation}
                                />
                              </Elements>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </>
                    ) : (
                      <Button disabled>Pay</Button>
                    )}
                  </TableCell>
                  <TableCell className="text-[#353B6E]">
                    <Link to={`/dashboard/details/${employee.email}`}>
                      <Button>Details</Button>
                    </Link>
                  </TableCell>
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
