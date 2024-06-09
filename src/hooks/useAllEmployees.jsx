import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllEmployees = () => {
  const axiosPublic = useAxiosPublic();
  const {
    refetch,
    data: allEmployees = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["allEmployees"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/all-employees");
      return res.data;
    },
  });
  return [allEmployees, refetch, loading];
};

export default useAllEmployees;
