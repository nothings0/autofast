import React, { useState, useEffect } from "react";
import aboutimg from "../../../assets/img/about.jpg";
import carousel1img from "../../../assets/img/carousel-1.png";
import carousel2img from "../../../assets/img/carousel-2.png";
import carouselbg1img from "../../../assets/img/carousel-bg-1.jpg";
import carouselbg2img from "../../../assets/img/carousel-bg-2.jpg";
import service1img from "../../../assets/img/service-1.jpg";

import instance from "../../../api/instance";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import serviceClone from "../../../assets/img/img_service/serviceClone.png";

import { Link } from "react-router-dom";
const HomePage = ({ about, technicians, abouts, aboutz, serviceHome }: any) => {
  const [staffData, setStaffData] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const getStaffData = async () => {
    try {
      const response = await instance.get("/client/staff");

      // Assuming the API response has a data property that contains the actual data
      setStaffData(response.data);

      // Handle the data as needed
      console.log("Staff Data:", staffData);

      return staffData;
    } catch (error) {
      // Handle errors
      console.error("Error fetching staff data:", error);
      throw error; // You may choose to handle errors differently based on your application's needs
    }
  };
  useEffect(() => {
    // Fetch data when the component mounts
    getStaffData();
  }, []);
  // const onHandleSubmit: SubmitHandler<any> = (data) => {
  //   // Check if there are errors before submitting
  //   if (Object.keys(errors).length === 0) {
  //     props.onAddBooking(data);
  //     alert("Đặt lịch thành công")
  //     navigate("/");
  //   }
  // };
  const slideStyle = {
    borderBottom: "1px solid #ececec",
    paddingBottom: "20px",
  };
  const slideStyle2 = {
    color: "DodgerBlue",
    margin: "60px 0",
  };
  const slideStyle3 = {
    borderBottom: "none",
  };
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const imgElement = e.target as HTMLImageElement;
    imgElement.onerror = null;
    imgElement.src = serviceClone;
  };

  return (
    <div>
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5" style={{ zIndex: 0 }}>
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div style={{ height: "600px" }} className="carousel-item active">
              <img className="w-100 h-600" src={carouselbg1img} alt="Image" />
            </div>

            <div style={{ height: "600px" }} className="carousel-item">
              <img className="w-100 h-600" src={carouselbg2img} alt="Image" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Service  */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {about.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="d-flex py-5 px-4">
                    ☑️
                    <div className="ps-4">
                      <h5 className="mb-3">{item.name}</h5>
                      <p>{item.content}</p>
                      <a
                        style={{ textDecoration: "none" }}
                        className="text-secondary border-bottom"
                        href="/about/chitiet"
                      >
                        Xem thêm
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* About */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              {aboutz.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className="position-relative h-100 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <img
                      className="position-absolute img-fluid w-100 h-100"
                      src={item.img}
                      alt=""
                    />
                    <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5">
                      <h1 className="display-4 text-white mb-0">
                        15 <span className="fs-4">Năm</span>
                      </h1>
                      <h4 className="text-white">Kinh nghiệm</h4>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-6">
              <div style={{ marginTop: "30px" }}>
                {aboutz.map((item: any) => {
                  return (
                    <div>
                      <h1 className="mb-4">
                        <span className="text-primary">{item.name}</span>
                      </h1>
                      <p className="mb-4">{item.content}</p>
                    </div>
                  );
                })}
              </div>

              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Chuyên nghiệp</h6>
                      <span>Trang thiết bị hiện đại </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Chất lượng cao cấp</h6>
                      <span>Phụ tùng và sản phẩm cao cấp chính hãng</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Các kỹ sư từng đạt sao michelin</h6>
                      <span>Các kỹ sư người Việt với chuyên môn cực cao</span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/about/chitiet" className="btn btn-primary py-3 px-5">
                Xem thêm <ion-icon name="heart"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Fact start */}
      <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
          <div className="row g-4">
            {abouts.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="col-md-6 col-lg-3 text-center wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <h2 className="text-white mb-2" data-toggle="counter-up">
                    {item.soluong}
                  </h2>
                  <p className="text-white mb-0">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Service Start */}
      <main className="product-category" style={slideStyle}>
        <nav aria-label="breadcrumb" className="main-breadcrumb mb-5">
          <div className="container text-center"></div>
        </nav>
        <div className="container">
          <h1 className=" text-center" style={slideStyle2}>
            Dịch Vụ{" "}
          </h1>
          <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
            {serviceHome
              .slice()
              .reverse()
              .map((item: any) => {
                return (
                  <div key={item.id} className="col mb-5">
                    <div
                      className="service-catalogue-item mx-lg-4 mb-4 sal-animate"
                      data-sal="slide-up"
                      style={slideStyle3}
                      data-sal-duration="1600"
                      data-sal-delay="0"
                    >
                      <a
                        href={`/service/${item.id}`}
                        title={item.service_name}
                        className="img img-cover img-effect zoom-in-1 auto-scale"
                      >
                        <img
                          className="lazyloaded"
                          src={`./src/assets/img/img_service/${item.image_service}`}
                          alt={item.service_name}
                          onError={handleImageError}
                        />
                      </a>
                      <h4 className="title fw-600">
                        <a href="" title={item.service_name}>
                          {item.service_name}
                        </a>
                      </h4>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>

      {/* Booking */}

      <div
        className="container-fluid bg-secondary booking my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className=" gx-5">
            <div className=" py-5">
              <div className="py-5">
                <h1 className="text-white mb-4">
                  Auto Fast - Chăm sóc tận tâm, đẳng cấp vượt trội!{" "}
                </h1>

                <p className="text-white mb-0">
                  Auto Fast - Nơi chúng tôi biến giấc mơ của bạn về một chiếc xe
                  luôn hoạt động mạnh mẽ và ổn định thành hiện thực! Chúng tôi
                  tự hào là địa chỉ đáng tin cậy cho việc bảo dưỡng và sửa chữa
                  ô tô tại Việt Nam. Với đội ngũ kỹ thuật viên chuyên nghiệp và
                  đầy kinh nghiệm, chúng tôi cam kết mang lại dịch vụ bảo dưỡng
                  và sửa chữa ô tô hàng đầu, vượt trội về chất lượng và tốc độ.
                  Không chỉ làm cho xe của bạn hoạt động tốt hơn, chúng tôi còn
                  đảm bảo sự an toàn và tin cậy trên mọi hành trình. Tại Auto
                  Fast, chúng tôi không chỉ làm việc trên xe hơi, chúng tôi tạo
                  nên những mối quan hệ lâu dài với khách hàng. Chúng tôi luôn
                  lắng nghe và hiểu rõ nhu cầu của bạn để đảm bảo rằng dịch vụ
                  của chúng tôi luôn đáp ứng mọi mong muốn. Nếu bạn đang tìm
                  kiếm một địa điểm đáng tin cậy để bảo dưỡng và sửa chữa ô tô
                  của mình, hãy đặt niềm tin vào Auto Fast. Chúng tôi sẽ giữ cho
                  chiếc xe của bạn luôn chạy mạnh mẽ và đẳng cấp!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">
              Các kỹ sư của chúng tôi
            </h6>
            <h1 className="mb-5">Các kỹ sư chuyên nghiệp</h1>
          </div>
          <div className="row g-5">
            {staffData.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item">
                    <div className="position-relative overflow-hidden">
                      <img
                        style={{ width: "500px" }}
                        className="img-fluid"
                        src={`http://localhost:8000/storage/` + item.avatar}
                        alt=""
                      />
                      {/* <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div> */}
                    </div>
                    <div className="bg-light text-center p-4">
                      <h5 className="fw-bold mb-0">{item.name}</h5>
                      <small>{item.description}</small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
