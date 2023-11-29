import AddReviewThroughModal from "./AddReviewThroughModal";
import UserReview from "./UserReview";



const ReviewSection = ({property}) => {
  return (
    <div>
        <h1 className="border-t pt-4 rounded-xl  font-bold border-gray-700 dark:border-white border-dotted text-3xl dark:text-white text-center my-8 pb-6">--Review Section--</h1>
        {/* add a review */}
<AddReviewThroughModal property={property}/>
        {/* user review */}
        <br />
<UserReview/>

    </div>
  )
}

export default ReviewSection