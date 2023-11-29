import AddReviewThroughModal from "./AddReviewThroughModal";


const ReviewSection = ({property}) => {
  return (
    <div>
        <h1 className="border-b rounded-xl shadow-xl font-bold border-gray-700 dark:border-white border-dotted text-3xl dark:text-white text-center my-8 pb-6">--Review Section--</h1>
        {/* user review */}

        {/* add a review */}

<AddReviewThroughModal property={property}/>
    </div>
  )
}

export default ReviewSection