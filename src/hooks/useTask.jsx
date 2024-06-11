import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTask = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { refetch, data: tasks = [] } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?email=${user.email}`);
      return res.data;
    },
  });
  return [tasks, refetch];
};

export default useTask;
