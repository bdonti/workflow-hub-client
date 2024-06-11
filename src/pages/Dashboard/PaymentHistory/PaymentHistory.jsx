import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5;

  const fetchPayments = async (page = 0) => {
    const offset = page * perPage;
    const res = await fetch(
      `https://workflowhub-dbserver.vercel.app/payments/?email=${user.email}&limit=${perPage}&offset=${offset}`
    );
    const data = await res.json();

    return data;
  };

  const { data, refetch } = useQuery({
    queryKey: ["payments", currentPage],
    queryFn: () => fetchPayments(currentPage),
  });

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  const totalPages = Math.ceil(data?.totalCount / perPage);

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
              {data?.payments.map((payment, idx) => (
                <tr
                  key={payment._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">
                    {currentPage * perPage + idx + 1}
                  </td>
                  <td className="px-6 py-4">
                    {payment.month} {payment.year}
                  </td>
                  <td className="px-6 py-4">{payment.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {data && (
        <>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="< previous"
            className="flex justify-center items-center gap-4 mt-5"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default PaymentHistory;
