import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../api/review";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import Loader from "../Shared/Loader";

const UserReview = () => {
  const { user, loading } = useAuth();
  const {id} = useParams()
  const {
    data: userReviews = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["userReviews"],
    queryFn: async () => await getReviews(id),
  });
console.log(userReviews);


if(isLoading) return <Loader/>
  return (
    <div>

      {userReviews?.map((review,idx)=><ReviewCard key={review._id} review={review} idx={idx}/>)}
    </div>
  )
}

export default UserReview