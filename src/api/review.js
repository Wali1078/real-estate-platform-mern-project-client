import axiosSecure from ".";

  //add a review
  export const addReview = async (reviewData) => {
    const { data } = await axiosSecure.post("/add-review", reviewData);
    return data;
  };