import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePayments = () => {
  const axiosPublic = useAxiosPublic();
  const {
    refetch,
    data: payments = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allPayments");
      return res.data;
    },
  });
  return [payments, refetch, loading];
};

export default usePayments;
