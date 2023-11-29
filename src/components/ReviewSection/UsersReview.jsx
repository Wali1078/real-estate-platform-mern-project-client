import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../api/review";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import useUserReviews from "../../hooks/useUserReviews";


const UsersReview = ({userReviews}) => {

  return (
    <div>

      {userReviews?.map((review,idx)=><ReviewCard key={review._id} reviews={review} idx={idx}/> )}
    </div>
  )
}

export default UsersReview