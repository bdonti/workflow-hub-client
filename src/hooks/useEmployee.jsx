import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useEmployee = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: isEmployee, isPending: isEmployeeLoading } = useQuery({
    queryKey: [user?.email, "isEmployee"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/employee/${user.email}`);
      // console.log(res.data);
      return res.data?.employee;
    },
  });
  return [isEmployee, isEmployeeLoading];
};

export default useEmployee;
