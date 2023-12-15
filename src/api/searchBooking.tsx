import instance from "./instance";
const searchBooking = () => {
  return instance.get("/client/timkiem_booking");
};



export { searchBooking};
