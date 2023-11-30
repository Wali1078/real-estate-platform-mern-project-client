import { useQuery } from "@tanstack/react-query";
import { getUserReviews } from "../../../../api/review";
import useAuth from "../../../../hooks/useAuth";
import ReviewCard from "../../../../components/ReviewSection/ReviewCard";
import { Helmet } from "react-helmet-async";
import Title from "../../../../components/Title/Title";

const MyReviews = () => {
const isMyReview = true
  const { user, loading } = useAuth();
  const {
    data: myReviews = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["userReviews"],
    queryFn: async () => await getUserReviews(user?.email),
  });
  // console.log(myReviews);
  return (
    <>
    <Helmet>
      <title>My Reviews</title>
    </Helmet>
    <Title name={`My Reviews`}></Title>
    <div className="">
      {myReviews?.map((review, idx) => (
        <ReviewCard key={review._id} reviews={review} idx={idx} isMyReview={isMyReview} refetch={refetch}/>
      ))}
      
    </div>
         {myReviews.length === 0 && <p className="text-center flex items-center text-2xl justify-center h-[80vh]">No Data Available</p>}

    </>
  );
};

export default MyReviews;
