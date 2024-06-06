import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useEmployees = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: employees = [] } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/employees");
      return res.data;
    },
  });
  return [employees, refetch];
};

export default useEmployees;
