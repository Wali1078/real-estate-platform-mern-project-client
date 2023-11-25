import axiosSecure from ".";

//fetch all properties
export const getAllProperties = async () => {
    const { data } = await axiosSecure("/properties");
    return data;
  };