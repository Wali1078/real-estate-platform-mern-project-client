import axiosSecure from ".";

// Add a property
export const addProperty = async (propertyData) => {
  const { data } = await axiosSecure.post(`/add-property`, propertyData);
  return data;
};

//find property of agent which he adds
export const getSingleProperty = async (email) => {
  const { data } = await axiosSecure(`/added-property/${email}`);
  return data;
};

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
  const { data } = await axiosSecure.post("/wishlist/single-property", wishlistData);
  return data;
};
//fetch all wishlist properties
export const getWishlistProperties = async (email) => {
  const { data } = await axiosSecure(`/wishlist/properties/${email}`);
  return data;
};