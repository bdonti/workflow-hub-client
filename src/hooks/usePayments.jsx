import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePayments = () => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: payments = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allPayments");
      return res.data;
    },
  });
  return [payments, refetch, loading];
};

export default usePayments;
