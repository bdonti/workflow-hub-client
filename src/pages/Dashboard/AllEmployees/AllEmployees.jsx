import { useState } from "react";
import { Button, Card, Spinner, Table, TextInput } from "flowbite-react";
import useAllEmployees from "../../../hooks/useAllEmployees";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { CiViewTable } from "react-icons/ci";
import { IoCardOutline } from "react-icons/io5";

const AllEmployees = () => {
  const [allEmployees, refetch, loading] = useAllEmployees();
  const axiosPublic = useAxiosPublic();
  const [viewMode, setViewMode] = useState("table");

  const handleSalaryChange = (e, employeeId) => {
    e.preventDefault();
    const form = e.target;
    const newSalary = form.newSalary.value;

    const employee = allEmployees.find((emp) => emp._id === employeeId);

    if (parseInt(newSalary) < parseInt(employee.salary)) {
      toast.error("New salary cannot be less than current one");
      form.newSalary.value = employee.salary;
      return;
    }

    axiosPublic
      .put(`/users/adjust-salary/${employeeId}`, { newSalary })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success("Salary updated successfully");
        } else {
          toast.error(`Failed to update the salary`);
        }
      });
  };

  const handleMakeHR = (employee) => {
    axiosPublic.put(`/users/make-hr/${employee._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${employee.name} has been promoted to HR!!!`);
      } else {
        toast.error(`Failed to promote ${employee.name}`);
      }
    });
  };

  const handleFire = (employee) => {
    Swal.fire({
      title: `Are you sure you want to fire ${employee.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .put(`http://localhost:5000/users/fire/${employee._id}`, {
            isFired: true,
          })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${employee.name} has been fired!!!`,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: `Failed to fire ${employee.name}`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            // Log the error and show an error message
            console.error("Error deleting item:", error);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "An error occurred while deleting the item",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  const showTableView = () => {
    setViewMode("table");
  };

  const showCardView = () => {
    setViewMode("card");
  };

  return (
    <div>
      <div className="mt-10 mx-5 lg:mx-0">
        <p className="text-sm text-[#eb6ca9] text-center font-bold">
          Company Status
        </p>
        <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-10 text-center">
          Handle Your Employees
        </h3>
      </div>
      <div className="flex justify-center items-center gap-8 mb-5">
        <Button onClick={showTableView} outline>
          <CiViewTable />
        </Button>
        <Button onClick={showCardView} outline>
          <IoCardOutline />
        </Button>
      </div>
      <div>
        {loading ? (
          <Spinner
            className="flex justify-center mt-20"
            aria-label="Extra large spinner example"
            size="xl"
          />
        ) : (
          <>
            {viewMode === "table" ? (
              <div>
                <Table className="min-w-full divide-y divide-gray-200">
                  <Table.Head>
                    <Table.HeadCell>#</Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Designation</Table.HeadCell>
                    <Table.HeadCell>Increase Salary</Table.HeadCell>
                    <Table.HeadCell>Make HR</Table.HeadCell>
                    <Table.HeadCell>Fire</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="bg-white divide-y divide-gray-200">
                    {allEmployees.map((employee, idx) => (
                      <Table.Row
                        key={employee._id}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="text-[#353B6E]">
                          {idx + 1}
                        </Table.Cell>
                        <Table.Cell className="text-[#353B6E]">
                          {employee.name}
                        </Table.Cell>
                        <Table.Cell className="text-[#353B6E]">
                          {employee?.designation
                            ? employee.designation
                            : "Not available"}
                        </Table.Cell>
                        <Table.Cell className="text-[#353B6E]">
                          <form
                            onSubmit={(e) =>
                              handleSalaryChange(e, employee._id)
                            }
                            className="space-y-4"
                          >
                            <TextInput
                              type="number"
                              name="newSalary"
                              defaultValue={employee.salary}
                              placeholder="Salary"
                              className="w-1/4"
                              required
                            />
                            <Button type="submit" color="dark" pill>
                              Adjust Salary
                            </Button>
                          </form>
                        </Table.Cell>
                        <Table.Cell className="text-[#353B6E]">
                          {employee?.role === "hr" ? (
                            <Button color="success" size="xs" disabled>
                              Already HR
                            </Button>
                          ) : (
                            <Button
                              onClick={() => handleMakeHR(employee)}
                              color="success"
                              size="xs"
                            >
                              Make HR
                            </Button>
                          )}
                        </Table.Cell>
                        <Table.Cell className="text-[#353B6E]">
                          {employee.isFired === true ? (
                            <h2 className="font-bold text-red-700">Fired</h2>
                          ) : (
                            <Button
                              onClick={() => handleFire(employee)}
                              color="failure"
                              pill
                            >
                              Fire
                            </Button>
                          )}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allEmployees.map((employee) => (
                  <Card key={employee._id} className="max-w-sm">
                    <div className="flex flex-col items-center pb-10">
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {employee.name}
                      </h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {employee?.designation
                          ? employee.designation
                          : "Designation Not available"}
                      </span>
                      <div className="my-2">
                        <form
                          onSubmit={(e) => handleSalaryChange(e, employee._id)}
                          className="space-y-4"
                        >
                          <TextInput
                            type="number"
                            name="newSalary"
                            defaultValue={employee.salary}
                            placeholder="Salary"
                            className="w-full"
                            required
                          />
                          <Button type="submit" color="dark" pill>
                            Adjust Salary
                          </Button>
                        </form>
                      </div>
                      <div className="mt-4 flex space-x-3 lg:mt-6">
                        {employee?.role === "hr" ? (
                          <Button color="success" pill disabled>
                            Already HR
                          </Button>
                        ) : (
                          <Button
                            onClick={() => handleMakeHR(employee)}
                            color="success"
                            pill
                          >
                            Make HR
                          </Button>
                        )}
                        {employee.isFired === true ? (
                          <h2 className="font-bold text-red-700">Fired</h2>
                        ) : (
                          <Button
                            onClick={() => handleFire(employee)}
                            color="failure"
                            pill
                          >
                            Fire
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllEmployees;
