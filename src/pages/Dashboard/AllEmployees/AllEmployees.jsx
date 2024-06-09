import { Button, Spinner, Table } from "flowbite-react";
import useAllEmployees from "../../../hooks/useAllEmployees";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllEmployees = () => {
  const [allEmployees, refetch, loading] = useAllEmployees();
  const axiosPublic = useAxiosPublic();
  console.log(allEmployees);

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
            console.log("Response from server:", res.data);
            if (res.data.modifiedCount > 0) {
              // refetch to update the UI
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${employee.name} has been fired!!!`,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              // Handle the case where deletion was not successful
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

  return (
    <div>
      <div className="mt-10 mx-5 lg:mx-0">
        <p className="text-sm text-[#eb6ca9] text-center font-bold">Progress</p>
        <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-10 text-center">
          Showing all the Progress
        </h3>
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
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Designation</Table.HeadCell>
              <Table.HeadCell>Salary</Table.HeadCell>
              <Table.HeadCell>Make HR</Table.HeadCell>
              <Table.HeadCell>Fire</Table.HeadCell>
            </Table.Head>
            <Table.Body className="bg-white divide-y divide-gray-200">
              {allEmployees.map((employee, idx) => (
                <Table.Row
                  key={employee._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="text-[#353B6E]">{idx + 1}</Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    {employee.name}
                  </Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    {employee?.designation
                      ? employee.designation
                      : "Not available"}
                  </Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    {employee.salary}
                  </Table.Cell>
                  <Table.Cell className="text-[#353B6E]">
                    {employee?.role === "hr" ? (
                      <Button color="success" size="xs" disabled>
                        Already HR
                      </Button>
                    ) : (
                      <Button color="success" size="xs">
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
        )}
      </div>
    </div>
  );
};

export default AllEmployees;
