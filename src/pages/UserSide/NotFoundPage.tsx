import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      {/* <!-- 404 Start --> */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                Xin lỗi nhưng có vẻ trang bạn đang tìm kiếm không tồn tại !
              </p>
              <a className="btn btn-primary rounded-pill py-3 px-5" href="/">
                Quay lại trang Chủ
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 404 End --> */}
    </div>
  );
};

export default NotFoundPage;
