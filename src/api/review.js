import axiosSecure from ".";

  //add a review
  export const addReview = async (reviewData) => {
    const { data } = await axiosSecure.post("/property/add-review", reviewData);
    return data;
  };
  //find user review by oldId
  export const getReviews = async (id) => {
    const { data } = await axiosSecure(`/property/get-review/${id}`);
    return data;
  };