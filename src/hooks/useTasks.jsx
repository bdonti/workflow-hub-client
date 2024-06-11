import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTasks = (name, month) => {
  const axiosSecure = useAxiosSecure();
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
      const res = await axiosSecure.get(`/tasks/details?${params.toString()}`);
      return res.data;
    },
  });
  return [tasks, refetch, loading];
};

export default useTasks;
