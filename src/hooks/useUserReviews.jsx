import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../api/review";
import useAuth from "./useAuth";


const useUserReviews = (id) => {

    const { user, loading } = useAuth();

    const {
      data: userReviews = [],
      isLoading,
      refetch,
    } = useQuery({
      enabled: !loading && !!user?.email,
      queryKey: ["userReviews"],
      queryFn: async () => await getReviews(id),
    });

    return [userReviews, isLoading, refetch];
    
}

export default useUserReviews