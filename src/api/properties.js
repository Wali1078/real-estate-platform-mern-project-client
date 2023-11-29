import axiosSecure from ".";
// for user
// Add a property
export const addProperty = async (propertyData) => {
  const { data } = await axiosSecure.post(`/add-property`, propertyData);
  return data;
};

//find property of agent which he adds
export const getAgentProperty = async (email) => {
  const { data } = await axiosSecure(`/added-property/${email}`);
  return data;
};
//update a property by agent who adds it
export const updateProperty = async (id,updatedData) => {
  const { data } = await axiosSecure.put(`/update-property/${id}`,updatedData);
  return data;
};

//delete a property
export const deleteProperty = async (id) => {
  const { data } = await axiosSecure.delete(`/delete-property/${id}`);
  return data;
};
//for agent
//find requested property from wishlistCollection
export const getRequestedProperty = async () => {
  const { data } = await axiosSecure(`/wishlist/properties`);
  return data;
};

// changed requested properties status
export const changeWishlistStatus = async (id,myData) => {
  const { data } = await axiosSecure.patch(`/wishlist/properties/${id}`,myData);
  return data;
};
//admin
//update verification status
export const updateProperties = async (id,status) => {
  const { data } = await axiosSecure.patch(`/properties/update/${id}`,{verificationStatus:status});
  return data;
};

//for all users
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
//fetch single wishlist by id
export const getSingleWishlist = async (id) => {
  const { data } = await axiosSecure(`/wishlist/single-property/${id}`);
  return data;
};
   //update wishlist after make an offer
export const updateSingleWishlist = async (id,updatingData) => {
  const { data } = await axiosSecure.put(`/wishlist/single-property/update/${id}`,updatingData);
  return data;
};
//get wishlist by email for property bought
export const getUserWishlistProperties = async (email) => {
  const { data } = await axiosSecure(`/user/wishlist/properties/${email}`);
  return data;
};

//delete wishlist data
export const deleteWishlist = async (id) => {
  const { data } = await axiosSecure.delete(`/wishlist/single-property/delete/${id}`);
  return data;
};