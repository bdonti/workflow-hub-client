import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useHR = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: isHR, isPending: isHRLoading } = useQuery({
    queryKey: [user?.email, "isHR"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/hr/${user.email}`);
      // console.log(res.data);
      return res.data?.hr;
    },
  });
  return [isHR, isHRLoading];
};

export default useHR;
