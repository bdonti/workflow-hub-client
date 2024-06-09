import { Button, Spinner, Table } from "flowbite-react";
import useAllEmployees from "../../../hooks/useAllEmployees";

const AllEmployees = () => {
  const [allEmployees, refetch, loading] = useAllEmployees();
  console.log(allEmployees);

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
                    <Button color="failure" pill>
                      Fire
                    </Button>
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
