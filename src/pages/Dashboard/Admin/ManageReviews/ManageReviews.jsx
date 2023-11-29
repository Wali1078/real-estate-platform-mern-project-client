import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { getAllReviews } from "../../../../api/review";
import ReviewCard from "../../../../components/ReviewSection/ReviewCard";
import { Helmet } from "react-helmet-async";
import Title from "../../../../components/Title/Title";
import useAllReviews from "../../../../hooks/useAllreviews";

const ManageReviews = () => {
  const isManageReview = true;
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
  // const [allUsersReviews,isLoading,refetch]=useAllReviews()
  // console.log(allUsersReviews);
  return (
    <div>
    <Helmet>
      <title>Manage Reviews</title>
    </Helmet>
    <Title>Manage Reviews</Title>
      {allUsersReviews?.map((review, idx) => (
        <ReviewCard
          key={review._id}
          reviews={review}
          idx={idx}
          refetch={refetch}
          isManageReview={isManageReview}
        />
      ))}
    </div>
  );
};

export default ManageReviews;
