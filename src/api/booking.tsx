import instance from "./instance";
const getBooking = () => {
  return instance.get("/admin/bookings");
};
const getBookingdetail = () => {
  return instance.get("/bookingDetail");
};
const addBooking = (booking: any) => {
  return instance.post("/booking", booking);
};
const updateBooking = (booking: any) => {
  return instance.patch("admin/confirm-booking/" + booking.id, booking);
};
const cancelBooking = (booking: any) => {
  return instance.patch("admin/cancel-booking/" + booking.id, booking);
};
const deleteBooking = (id: any) => {
  return instance.delete("/booking/" + id);
};

export {
  getBooking,
  addBooking,
  updateBooking,
  deleteBooking,
  cancelBooking,
  getBookingdetail,
};
