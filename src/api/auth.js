import axiosSecure from ".";

// Save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    name:user.displayName,
    email: user.email,
    role: "user",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};
// Update user data in database
export const updateUser = async (user) => {

  const { data } = await axiosSecure.patch(`/users/${user?.email}`, { name:user.displayName});

  return data;
};

// Get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post(`/jwt`, { email });
  console.log("Token received from server =>", data);
  return data;
};

// Clear token from browser
export const clearCookie = async () => {
  const { data } = await axiosSecure.post("/logout");
  return data;
};

// Get user role
export const getRole = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return data.role;
};

//update user role
export const updateRole = async (email,role) => {
  const updatedData = {
    status: role,
  };
  const { data } = await axiosSecure.patch(`/users/${email}`, updatedData);
  return data;
};


// get all users
export const getAllUsers = async () => {
  const { data } = await axiosSecure("/users");
  return data;
};

//delete a user
export const deleteUser = async (id) => {
  const { data } = await axiosSecure.delete(`/users/${id}`);
  return data;
};