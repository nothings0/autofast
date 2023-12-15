import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination, Rate } from "antd";
import serviceItemClone from "../../../assets/img/img_item/ServiceItemClone.png";
import { getReview } from "../../../api/review";

const itemsPerPage = 8;

const ServiceDetailV = (props: any) => {
  //   const slideStyle = {
  //     marginTop: "20px",
  //     width: "100%",
  //     maxWidth: "1300px", /* Điều chỉnh chiều rộng tối đa của danh sách */
  //     margin: "0 auto"
  //   }
  //   const slideStyle2 = {
  //     marginBottom: "20px",
  //     border: "1px solid #ddd",
  //     borderRadius: "8px",
  //     padding: "15px"
  //   }
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [review, setReview] = useState([]);

  useEffect(() => {
    // Assuming getReview is a function that fetches reviews, replace it with your actual implementation

    const fetchReviews = async () => {
      const reviews = await getReview();
      console.log({ reviews });
      const filteredReviews = reviews.data.reviews.filter(
        (item: any) => item.service_id == id
      );

      setReview(filteredReviews);
    };

    fetchReviews();
  }, [id]);

  const numericId = parseInt(id!, 10);

  const filteredItems = props.serviceItem.filter(
    (item: any) => item.id_service === numericId
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: any) => setCurrentPage(pageNumber);
  // const slideStyle3 ={
  //     borderBottom: "none"
  //   }

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const imgElement = e.target as HTMLImageElement;
    imgElement.onerror = null;
    imgElement.src = serviceItemClone;
  };
  return (
    <div className="container">
      <h1
        className="text-center"
        style={{ margin: "60px 0", borderBottom: "none" }}
      >
        <span>Chi Tiết Các Dịch Vụ Sửa Chữa</span>
      </h1>

      <div className="row g-4 row-cols-lg-4 row-cols-md-2 row-cols-1 mb-4">
        {currentItems.map((item: any) => (
          <div
            key={item.id}
            className="col sal-animate"
            data-sal="slide-up"
            data-sal-duration="1600"
            data-sal-delay="0"
          >
            <div className="accessory-item">
              <a
                title={item.item_name}
                className="img auto-scale img-scaledown img-effect zoom-in-1"
              >
                <img
                  src={`/src/assets/img/img_item/${item.image}`}
                  className=" ls-is-cached lazyloaded"
                  alt={item.item_name}
                  onError={handleImageError}
                />
              </a>
              <h3 className="title text-center mb-3">
                <a title={item.item_name}>{item.item_name}</a>
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Hiển thị phân trang Ant Design */}
      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={filteredItems.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
      <div style={{ columns: "1" }}>
        <div style={{ width: "100%", textAlign: "center", margin: "20px 0" }}>
          <h2>Đánh Giá Khách Hàng</h2>
        </div>
        {review.map((item: any) => (
          <div
            key={item.id}
            style={{
              flex: "0 0 calc(50% - 10px)",
              maxWidth: "1300px",
              margin: "10px",
              border: "1px solid #ccc",
              borderRadius: "20px",
              padding: "15px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <h5
              style={{
                marginBottom: "10px",
                fontWeight: "bold",
                color: "#333",
                fontSize: "1.2rem",
              }}
            >
              Khách Hàng: {item.name}
            </h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "10px",
                fontSize: "1rem",
              }}
            >
              <label
                htmlFor=""
                style={{ color: "#333", fontWeight: "bold", fontSize: "1rem" }}
              >
                Bình Luận:
              </label>
              <p style={{ marginBottom: "10px", fontSize: "0.9rem" }}>
                {item.content}
              </p>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <label
                htmlFor=""
                style={{
                  color: "#333",
                  fontWeight: "bold",
                  marginRight: "20px",
                }}
              >
                Đánh Giá:{" "}
              </label>
              <Rate allowHalf disabled value={item.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailV;
