import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useHR = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosPublic();
  const { data: isHR, isPending: isHRLoading } = useQuery({
    queryKey: [user?.email, "isHR"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/hr/${user.email}`);
      // console.log(res.data);
      return res.data?.hr;
    },
  });
  return [isHR, isHRLoading];
};

export default useHR;
