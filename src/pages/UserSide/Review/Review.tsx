import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Rate } from "antd";
import { addReview } from "../../../api/review";
import { IService } from "../../../interface/service";

interface IProps {
  bookingdetail?: [
    {
      id_booking: string;
    }
  ];
  service?: IService[];
}

const Review = ({ bookingdetail, service }: IProps) => {
  // console.log(bookingdetail);
  // console.log(service);
  const [rate, setRate] = useState(2);
  const [content, setContent] = useState("");
  const onHandleContent = (event: any) => {
    setContent(event.target.value);
  };

  const onHandleRate = (value: any) => {
    setRate(value);
  };

  const onCreateHandle = (event: any) => {
    event.preventDefault();
    const data = {
      user_id: id,
      service_name: serviceName,
      service_id: idService,
      content: content,
      rating: rate,
    };
    addReview(data);
  };

  const { id } = useParams();
  console.log(id);

  // const [review, setNews] = useState<any>([]);
  // console.log(review);

  const [filteredDetails, setFilteredDetails] = useState<
    { id_booking: string }[]
  >([]);
  useEffect(() => {
    const filtered = bookingdetail?.filter((detail) => detail.id_booking == id);
    setFilteredDetails(filtered!);
  }, [bookingdetail, id]);

  const idService =
    filteredDetails.length > 0 ? filteredDetails[0].id_booking : 0;

  const [filteredService, setFilteredService] = useState<IService[]>([]);
  useEffect(() => {
    const filtered = service?.filter((service) => service.id === idService);
    setFilteredService(filtered!);
  }, [service, idService]);

  // Lấy service_name
  const serviceName =
    filteredService.length > 0 ? filteredService[0].service_name : "";

  //   useEffect(() => {
  //     setNews(props.booking.find((review: { id: string | undefined; }) => review.id == id))
  // })
  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Đánh Giá Sản Phẩm</h2>

        <form onSubmit={onCreateHandle}>
          <div className="form-group">
            <input
              type="hidden"
              className="form-control"
              id="productName"
              value={id}
              disabled
              placeholder="Nhập tên sản phẩm"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Tên Dịch Vụ</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={serviceName}
              disabled
              placeholder="Nhập tên sản phẩm"
            />
          </div>
          <input
            type="hidden"
            className="form-control"
            id="productName"
            value={idService}
            disabled
            placeholder="Nhập tên sản phẩm"
          />
          <div className="form-group">
            <label htmlFor="review">Đánh Giá:</label>
            <textarea
              className="form-control"
              value={content}
              onChange={onHandleContent}
              id="review"
              rows={4}
              placeholder="Nhập đánh giá của bạn"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Điểm Đánh Giá </label>
            <Rate allowHalf onChange={onHandleRate} value={rate} />
          </div>
          <button type="submit" className="btn btn-primary">
            Gửi Đánh Giá
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
