import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { refetch, data: tasks = [] } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks?email=${user.email}`);
      return res.data;
    },
  });
  return [tasks, refetch];
};

export default useTask;
