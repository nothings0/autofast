import React, { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
const BaseLayout = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [userName, setUserName] = useState(); //
  const [img, setImg] = useState();
  const [userId, setUserId] = useState(); //
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  // Kiểm tra Session Storage khi trang được tải
  useEffect(() => {
    const sessionData = sessionStorage.getItem("user");
    console.log({ sessionData });
    console.log(sessionData);

    if (sessionData) {
      // Session Storage tồn tại, người dùng đã đăng nhập
      const userData = JSON.parse(sessionData); // Parse the JSON string into an object
      setImg(userData.avatar);
      setUserName(userData.name);
      setUserId(userData.id);
      setIsLoggedIn(true);
    }
  }, []);
  console.log(userId);

  console.log(userName);
  function clearSession() {
    // Xóa toàn bộ dữ liệu từ Session Storage
    sessionStorage.clear();

    // Hoặc nếu bạn chỉ muốn xóa một mục cụ thể, bạn có thể sử dụng:
    // sessionStorage.removeItem('yourKey');
  }
  const userTextStyle = {
    display: "inline-block",
    cursor: "pointer",
  };
  const avatarUser = {
    width: "30px",
    height: "30px",
    borderRadius: "99%",
  };
  const dropdownContentStyle: CSSProperties = {
    display: isDropdownVisible ? "block" : "none",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "10",
  };

  const dropdownContentLinkStyle = {
    display: "block",
    padding: "12px 16px",
    textDecoration: "none",
    color: "black",
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    // Đặt giá trị cho biến isMobile dựa trên kích thước màn hình
    setIsMobile(screenWidth >= 767); // Ví dụ: 767px là một ngưỡng cho màn hình điện thoại

    // Nếu bạn muốn theo dõi thay đổi kích thước màn hình thì bạn có thể sử dụng sự kiện window.onresize
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 767);
    };

    window.addEventListener("resize", handleResize);

    // Làm sạch sự kiện khi component bị hủy
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              {/* <small className="fa fa-map-marker-alt text-primary me-2"></small> */}
              <small> 📍 Số 88 Đường Quang Trung, Hà Đông, Hà Nội</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              {/* <small className="far fa-clock text-primary me-2"></small> */}
              <small> 🕒 Thứ hai - Thứ bảy : 08.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              {/* <small className="fa fa-phone-alt text-primary me-2"></small> */}
              <small> ☎ +84 988 678 999 </small>

              <div>
                {isLoggedIn && (
                  <div className="user-info">
                    <small
                      className="px-5"
                      style={userTextStyle}
                      onClick={toggleDropdown}
                    >
                      Xin chào,
                      <img
                        style={avatarUser}
                        src={img ? `http://localhost:8000/storage/${img}` : ""}
                      />
                      {userName}
                    </small>
                    <div style={dropdownContentStyle}>
                      <Link style={dropdownContentLinkStyle} to="/mybooking">
                        Quản lý lịch của tôi
                      </Link>
                      <Link style={dropdownContentLinkStyle} to={`/account`}>
                        Quản lý tài khoản
                      </Link>
                      <Link
                        style={dropdownContentLinkStyle}
                        to={`/respass/${userId}`}
                      >
                        Đổi Mật Khẩu
                      </Link>
                      <Link style={dropdownContentLinkStyle} to={`/mybill`}>
                        Quản lý Hóa đơn{" "}
                      </Link>
                      <a
                        href="/"
                        style={dropdownContentLinkStyle}
                        onClick={clearSession}
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              {isLoggedIn ? (
                <b style={{ color: "blue" }}></b>
              ) : (
                <div className="h-100 d-inline-flex align-items-center">
                  <b style={{ color: "blue" }}>
                    <Link
                      style={{ paddingRight: "20px" }}
                      to="/signup"
                      className="nav-item nav-link"
                    >
                      Đăng Ký
                    </Link>{" "}
                  </b>

                  <b style={{ color: "blue" }}>
                    <Link to="/signin" className="nav-item nav-link">
                      Đăng Nhập
                    </Link>
                  </b>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 ${
          isMenuVisible ? "menu-visible" : ""
        }`}
        style={{ zIndex: 1 }}
      >
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">Auto Fast</h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuVisible ? "show" : ""}`}
          id="navbarCollapse"
        >
          {props.menu.map((item: any) => (
            <div key={item.id} className="navbar-nav ms-auto p-4 p-lg-0">
              <Link to="/" className="nav-item nav-link">
                {item.home}
              </Link>

              <Link to="/about" className="nav-item nav-link">
                {item.about}
              </Link>
              <Link to="/service" className="nav-item nav-link">
                {item.dv}
              </Link>

              <Link to="contact" className="nav-item nav-link">
                {item.contact}
              </Link>
              <Link to="news" className="nav-item nav-link">
                {item.new}
              </Link>
              {!isLoggedIn && (
                <Link
                  to="/signup"
                  className="nav-item nav-link"
                  style={isMobile ? { display: "none" } : {}}
                >
                  Đăng ký
                </Link>
              )}
              {!isLoggedIn && (
                <Link
                  to="/signin"
                  className="nav-item nav-link"
                  style={isMobile ? { display: "none" } : {}}
                >
                  Đăng nhập
                </Link>
              )}
              <Link
                to="/booking"
                className="nav-item nav-link"
                style={isMobile ? { display: "none" } : {}}
              >
                Đặt lịch
              </Link>
              {isLoggedIn && (
                <Link
                  to={`/account`}
                  className="nav-item nav-link"
                  style={isMobile ? { display: "none" } : {}}
                >
                  Quản lý tài khoản
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to="/mybooking"
                  className="nav-item nav-link"
                  style={isMobile ? { display: "none" } : {}}
                >
                  Quản lý lịch của tôi
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to={`/mybill`}
                  className="nav-item nav-link"
                  style={isMobile ? { display: "none" } : {}}
                >
                  Quản lý Hóa đơn{" "}
                </Link>
              )}
              {isLoggedIn && (
                <a
                  href="/"
                  style={isMobile ? { display: "none" } : {}}
                  onClick={clearSession}
                >
                  Logout
                </a>
              )}
            </div>
          ))}
          <Link
            to="booking"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            Đặt lịch ngay
          </Link>
        </div>
      </nav>

      <div></div>

      <Outlet />
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Địa chỉ</h4>
              <p className="mb-2">📍Số 88 Đường Quang Trung, Hà Đông, Hà Nội</p>
              <p className="mb-2">☎ +84 988 678 999</p>
              <p className="mb-2">✉ autofast@gara.com</p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://twitter.com/AutoFastt"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://facebook.com/AutoFastt"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.youtube.com/channel/AutoFast"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/AutoFast"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Thời gian mở cửa</h4>
              <h6 className="text-light">Thứ hai - Thứ sáu:</h6>
              <p className="mb-4">08.00 AM - 09.00 PM</p>
              <h6 className="text-light">Thứ bảy - Chủ Nhật:</h6>
              <p className="mb-0">09.00 AM - 12.00 PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Dịch vụ</h4>
              <a
                style={{ textDecoration: "none" }}
                className="btn btn-link"
                href=""
              >
                Bảo dưỡng xe
              </a>
              <a
                style={{ textDecoration: "none" }}
                className="btn btn-link"
                href=""
              >
                Thay phụ tùng
              </a>
              <a
                style={{ textDecoration: "none" }}
                className="btn btn-link"
                href=""
              >
                Thay dầu
              </a>
              <a
                style={{ textDecoration: "none" }}
                className="btn btn-link"
                href=""
              >
                Sửa chữa
              </a>
              <a
                style={{ textDecoration: "none" }}
                className="btn btn-link"
                href=""
              >
                Vệ sinh
              </a>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <a
                  style={{ textDecoration: "none" }}
                  className="border-bottom"
                  href="#"
                >
                  Dịch vụ bảo dưỡng xe Auto Fast
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a style={{ textDecoration: "none" }} href="/">
                    Trang Chủ
                  </a>
                  <a style={{ textDecoration: "none" }} href="booking">
                    Đặt lịch
                  </a>
                  <a style={{ textDecoration: "none" }} href="about">
                    Về chúng tôi
                  </a>
                  <a style={{ textDecoration: "none" }} href="contact">
                    Liên hệ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BaseLayout;
