import instance from "./instance";

const addReview = (review: any) => {
    return instance.post(`/client/review`, review);
  };
  const getReviewItem= (id: any) => {
    return instance.get(`/client/review/${id}` );
  };
  const getReview =()=>{
    return instance.get(`/client/review`)
  }
  export { addReview, getReviewItem, getReview}