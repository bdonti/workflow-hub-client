import { useContext } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../providers/AuthProvider";
import InfiniteScroll from "react-infinite-scroll-component";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
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

  const fetchPayments = async ({ pageParam = 0 }) => {
    const res = await fetch(
      `http://localhost:5000/payments/?email=${user.email}&limit=5&offset=${pageParam}`
    );
    return res.json();
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["payments"],
    queryFn: fetchPayments,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 5 > lastPage.totalPayments) {
        return false;
      }
      return lastPage.prevOffset + 5;
    },
  });

  console.log(data);

  const payments = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.payments];
  }, []);

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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <InfiniteScroll
            dataLength={payments ? payments.length : 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            loading={<div>Loading...☝️</div>}
          >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Month
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Transaction Id
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments &&
                  payments.map((payment, idx) => (
                    <tr
                      key={payment._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4">{idx + 1}</td>
                      <td className="px-6 py-4">
                        {monthNames[payment.month]} {payment.year}
                      </td>
                      <td className="px-6 py-4">{payment.transactionId}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
