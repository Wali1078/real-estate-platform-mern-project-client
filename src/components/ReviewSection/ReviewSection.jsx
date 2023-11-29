import { useParams } from "react-router-dom";
import useUserReviews from "../../hooks/useUserReviews";
import AddReviewThroughModal from "./AddReviewThroughModal";
import UsersReview from "./UsersReview";



const ReviewSection = ({property}) => {
  const {id} = useParams()
  const [userReviews, isLoading, refetch] = useUserReviews(id)
  return (
    <div>
        <h1 className="border-t pt-4 rounded-xl  font-bold border-gray-700 dark:border-white border-dotted text-3xl dark:text-white text-center my-8 pb-6">--Review Section--</h1>
        {/* add a review */}
<AddReviewThroughModal property={property} refetch={refetch}/>
        {/* user review */}
        <br />
<UsersReview userReviews={userReviews}/>

    </div>
  )
}

export default ReviewSection