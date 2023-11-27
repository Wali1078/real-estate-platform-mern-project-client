import axiosSecure from ".";

//fetch all properties
export const getAllProperties = async () => {
    const { data } = await axiosSecure("/properties");
    return data;
  };
//fetch single properties
export const getSingleProperty = async (id) => {
    const { data } = await axiosSecure(`/property/${id}`);
    return data;
  };
  //add property to wishlist
export const addToWishList = async (wishlistData) => {
  const { data } = await axiosSecure.post("/single-property", wishlistData);
  return data;
};