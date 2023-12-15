import React, { useState, useEffect } from "react";
import aboutimg from "../../../assets/img/about.jpg";
import khabanhimg from "../../../assets/img/ngobakha.jpg";
import khanhskyimg from "../../../assets/img/khanhsky.jpg";
import huanhoahongimg from "../../../assets/img/huanhoahong.jpg";
import traizanimeimg from "../../../assets/img/boizanime.jpg";

import instance from "../../../api/instance";

const AboutUsPage = ({ about, abouts, aboutz, technicians }: any) => {
  console.log(about);
  console.log(abouts);
  console.log(aboutz);
  console.log(technicians);

  const [staffData, setStaffData] = useState([]);
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
  return (
    <div>
      {/* Service  */}
      <div className="container-xxl py-5" id="">
        <div className="container" id="">
          <div className="row g-4" id="">
            {about.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  id=""
                >
                  <div className="d-flex py-5 px-4" id="">
                    ☑️
                    <i className=" text-primary flex-shrink-0" id=""></i>
                    <div className="ps-4" id="">
                      <h5 className="mb-3" id="">
                        {item.name}
                      </h5>
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* About */}
      <div className="container-xxl py-5" id="">
        <div className="container " id="">
          <div className="row g-5" id="">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }} id="">
              {aboutz.map((item: any) => {
                return (
                  <div
                    className="position-relative h-100 wow fadeIn"
                    data-wow-delay="0.1s"
                    key={item.id}
                    id=""
                  >
                    <img
                      className="position-absolute img-fluid w-100 h-100"
                      src={item.img}
                      id=""
                      alt=""
                    />
                    <div
                      className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                      id=""
                    >
                      <h1 className="display-4 text-white mb-0">
                        15{" "}
                        <span className="fs-4" id="">
                          Năm
                        </span>
                      </h1>
                      <h4 className="text-white" id="">
                        Kinh nghiệm
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-6" id="">
              <div>
                {aboutz.map((item: any) => {
                  return (
                    <div key={item.id}>
                      <h6 className="text-primary text-uppercase" id="">
                        {" "}
                        Về chúng tôi{" "}
                      </h6>
                      <h1 className="mb-4">
                        <span className="text-primary" id="">
                          {item.name}
                        </span>
                      </h1>
                      <p id="" className="mb-4">
                        {item.content}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="row g-4 mb-3 pb-3 " id="">
                <div className="col-12 wow fadeIn " data-wow-delay="0.1s" id="">
                  <div className="d-flex " id="">
                    <div
                      className=" bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      id=""
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary " id="">
                        01
                      </span>
                    </div>
                    <div className="ps-3" id="">
                      <h6 className=""> Chuyên nghiệp </h6>
                      <span className="">Trang thiết bị hiện đại </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s" id="">
                  <div className="d-flex" id="">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      id=""
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span id="" className="fw-bold text-secondary">
                        02
                      </span>
                    </div>
                    <div className="ps-3 2">
                      <h6 id="">Chất lượng cao cấp</h6>
                      <span id="">Phụ tùng và sản phẩm cao cấp chính hãng</span>
                    </div>
                  </div>
                </div>
                <div id="" className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div id="" className="d-flex">
                    <div
                      id=""
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span id="" className="fw-bold text-secondary">
                        03
                      </span>
                    </div>
                    <div id="" className="ps-3">
                      <h6 className="">Các kỹ sư từng đạt sao michelin</h6>
                      <span className="">
                        Các kỹ sư người Việt với chuyên môn cực cao
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fact start */}
      <div className="container-fluid fact bg-dark my-5 py-5" id="">
        <div className="container " id="">
          <div className="row g-4" id="">
            {abouts.map((item: any) => {
              return (
                <div
                  id=""
                  className="col-md-6 col-lg-3 text-center wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <h2
                    id=""
                    className="text-white mb-2"
                    data-toggle="counter-up"
                  >
                    {item.soluong}
                  </h2>
                  <p id="" className="text-white mb-0">
                    {item.name}
                  </p>
                </div>
              );
            })}
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

export default AboutUsPage;
