import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useOpinions = () => {
  const axiosPublic = useAxiosPublic();
  const {
    refetch,
    data: opinions = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["opinions"],
    queryFn: async () => {
      const res = await axiosPublic.get("/opinions");
      return res.data;
    },
  });
  return [opinions, refetch, loading];
};

export default useOpinions;
