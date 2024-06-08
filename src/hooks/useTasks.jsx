import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTasks = (name, month) => {
  const axiosPublic = useAxiosPublic();
  const {
    refetch,
    data: tasks = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["tasks", name, month],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (name) {
        params.append("name", name);
      }
      if (month) {
        params.append("month", month);
      }
      const res = await axiosPublic.get(`/tasks/details?${params.toString()}`);
      return res.data;
    },
  });
  return [tasks, refetch, loading];
};

export default useTasks;
