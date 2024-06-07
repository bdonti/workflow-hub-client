import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { refetch, data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  return [payments, refetch];
};

export default usePayment;
