import axiosSecure from ".";

// create payment intent
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);
  return data;
};

// save booking info in db
export const saveBookingInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/bookings", paymentInfo);
  return data;
};
// update room status after booking in db
export const updateStatus = async (id, bought) => {
    const { data } = await axiosSecure.patch(`/booking/status/${id}`, { status:bought });
    return data;
  };
  
  // get all bookings for a user by email
export const getUserBookings = async (email) => {
    const { data } = await axiosSecure(`/bookings/user?email=${email}`);
    return data;
  };
  // get all bookings for a host by email
  export const getHostBookings = async (email) => {
    const { data } = await axiosSecure(`/bookings/agent?email=${email}`);
    return data;
  };
  