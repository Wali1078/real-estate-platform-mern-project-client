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
  //find user review by user email
  export const getUserReviews = async (email) => {
    const { data } = await axiosSecure(`/property/user/get-review/${email}`);
    return data;
  };
  
   //delete user review by user id
   export const removeReview = async (id) => {
    const { data } = await axiosSecure(`/property/user/delete-review/${id}`);
    return data;
  };