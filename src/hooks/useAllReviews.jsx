import { useQuery } from "@tanstack/react-query";
import { getAllReviews } from "../api/review";
import useAuth from "./useAuth";

const useAllReviews = () => {
    const { user, loading } = useAuth();
    const {
      data: allUsersReviews = [],
      isLoading,
      refetch,
    } = useQuery({
      enabled: !loading && !!user?.email,
      queryKey: ["allUsersReviews"],
      queryFn: async () => await getAllReviews(),
    });
  return [allUsersReviews,isLoading,refetch];
}

export default useAllReviews