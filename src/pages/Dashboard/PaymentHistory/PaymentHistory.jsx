import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "flowbite-react";
import usePayment from "../../../hooks/usePayment";

const PaymentHistory = () => {
  const [payments] = usePayment();
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
  return (
    <div className="mt-10 mx-5 lg:mx-0">
      <div>
        <div>
          <p className="text-sm text-[#eb6ca9] text-center font-bold">
            Payment History
          </p>
          <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-20 text-center">
            Please Check Your Monthly Payments
          </h3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHead>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Month</Table.HeadCell>
            <Table.HeadCell>Transaction Id</Table.HeadCell>
          </TableHead>
          <TableBody className="bg-white divide-y divide-gray-200">
            {payments.map((payment, idx) => (
              <TableRow
                key={payment._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="text-[#353B6E]">{idx + 1}</TableCell>
                <TableCell className="text-[#353B6E]">
                  {monthNames[payment.month]} {payment.year}
                </TableCell>
                <TableCell className="text-[#353B6E]">
                  {payment.transactionId}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistory;
