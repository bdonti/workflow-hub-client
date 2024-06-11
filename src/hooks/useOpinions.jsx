import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOpinions = () => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: opinions = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["opinions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/opinions");
      return res.data;
    },
  });
  return [opinions, refetch, loading];
};

export default useOpinions;
