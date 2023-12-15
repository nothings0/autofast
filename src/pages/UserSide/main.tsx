import React from "react";

const BillDetail = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header bg-black"></div>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-12"></div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <ul className="list-unstyled float-end">
                  <li style={{ fontSize: "30px", color: "red" }}>Auto Fast</li>
                  <li>Số 88 Quang Trung</li>
                  <li>+84 988 678 999</li>
                  <li>autofast@gara.com</li>
                </ul>
              </div>
            </div>

            <div className="row text-center">
              <h3
                className="text-uppercase text-center mt-3"
                style={{ fontSize: "40px" }}
              >
                Hóa đơn
              </h3>
              <p>#8939835</p>
            </div>
            <div style={{ marginLeft: "30px" }}>
              <h3>Thông tin khách hàng</h3>
              <p>Họ tên: Nguyễn Thị Phương Anh</p>
              <p>Số điện thoại: 09773849224</p>
              <p>Email: phuonganhnguyen@gmail.com</p>
            </div>
            <div className="row mx-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Chi tiết</th>
                    <th scope="col">Giá</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Samsung TV</td>
                    <td>
                      <i className="fas fa-dollar-sign"></i> 500,00
                    </td>
                  </tr>
                  <tr>
                    <td>JBL Speaker</td>
                    <td>
                      <i className="fas fa-dollar-sign"></i> 300,00
                    </td>
                  </tr>
                  <tr>
                    <td>Macbook Air</td>
                    <td>
                      <i className="fas fa-dollar-sign"></i> 1000,00
                    </td>
                  </tr>
                  <tr>
                    <td>Iphone 11 PRO</td>
                    <td>
                      <i className="fas fa-dollar-sign"></i> 5000,00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row">
              <div className="col-xl-8">
                <ul className="list-unstyled float-end me-0">
                  <li>
                    <span className="me-3 float-start">Total Amount:</span>
                    <i className="fas fa-dollar-sign"></i> 6850,00
                  </li>
                  <li>
                    <span className="me-5">Discount:</span>
                    <i className="fas fa-dollar-sign"></i> 500,00
                  </li>
                  <li>
                    <span
                      className="float-start"
                      style={{ marginRight: "35px" }}
                    >
                      Shippment:{" "}
                    </span>
                    <i className="fas fa-dollar-sign"></i> 500,00
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-xl-8" style={{ marginLeft: "60px" }}>
                <p
                  className="float-end"
                  style={{
                    fontSize: "30px",
                    color: "red",
                    fontWeight: 400,
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  Total:{" "}
                  <span>
                    <i className="fas fa-dollar-sign"></i> 6350,00
                  </span>
                </p>
              </div>
            </div>

            <div className="row mt-2 mb-5">
              <p className="fw-bold">
                Date: <span className="text-muted">23 June 20221</span>
              </p>
              <p className="fw-bold mt-3">Signature:</p>
            </div>
          </div>
        </div>
        <div className="card-footer bg-black"></div>
      </div>
      <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex py-5 px-4">
              <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
              <div className="ps-4">
                <h5 className="mb-3">Dịch vụ chất lượng</h5>
                <p>Chúng tôi hân hạnh là một trong những Gara đầu tiên đạt 1 sao Michelin tại Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="d-flex bg-light py-5 px-4">
              <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
              <div className="ps-4">
                <h5 className="mb-3">Kỹ thuật chuyên nghiệp</h5>
                <p>Đội ngũ kỹ thuật viên người Việt nhưng kỹ năng hơn người Châu Phi</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="d-flex py-5 px-4">
              <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
              <div className="ps-4">
                <h5 className="mb-3">Thiết bị hiện đại</h5>
                <p>Thiết bị hiện đại bậc nhất của chúng tôi được nhập khẩu từ Châu Nam Mỹ, bạn có thể hoàn toàn yên tâm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BillDetail;
