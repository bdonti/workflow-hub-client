import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEmployees = () => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: employees = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/employees");
      return res.data;
    },
  });
  return [employees, refetch, loading];
};

export default useEmployees;
