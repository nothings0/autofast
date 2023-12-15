import React from 'react';
import './main.css';
import './style.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
type Props = {};

const Header = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName,setUserName] =useState(); //
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [img,setImg]=useState(); //
  useEffect(() => {
    const sessionData = sessionStorage.getItem("user");
    console.log({sessionData});
    if (sessionData) {
      // Session Storage tồn tại, người dùng đã đăng nhập
      const userData = JSON.parse(sessionData); // Parse the JSON string into an object
    setImg(userData.avatar);
     setUserName( userData.name)
      setIsLoggedIn(true);
    }
  }, []);
  function clearSession() {
    // Xóa toàn bộ dữ liệu từ Session Storage
    sessionStorage.clear();

    // Hoặc nếu bạn chỉ muốn xóa một mục cụ thể, bạn có thể sử dụng:
    // sessionStorage.removeItem('yourKey');
  }
  const userTextStyle = {
    display: 'inline-block',
  cursor: 'pointer',
  padding: '12.5px 16px', // Thêm padding để tăng kích thước của nút
  borderRadius: '4px', // Thêm bo tròn cho góc của nút
 
  color: 'black', // Màu chữ của nút
  textDecoration: 'none',
  };
  const avatarUser = {
    width:'30px',
    height:'30px',
    borderRadius:'99%'
  }
  const dropdownContentStyle = {
    display: isDropdownVisible ? 'block' : 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '10',
  };

  const dropdownContentLinkStyle = {
    display: 'block',
    padding: '12px 16px',
    textDecoration: 'none',
    color: 'black',
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
//   return (
//     <header className="header">
//       <section
//         className="header-pc d-none d-lg-block"
//         x-data="header_pc"
//         x-ref="header_pc"
//         x-bind="scroll"
//       >
//         <div className="middle-bar">
//           <div className="container d-flex align-items-center justify-content-between">
//             <div className="logo text-center mb-4">
//               <a href="#" title="Trang chủ" className="img img-scaledown d-inline-block">
//                 <img
//                   className="lazyload"
//                   data-src="/upload/images/logo/logo-chinh-moi-t6.png"
//                   alt="logo"
//                 />
//               </a>
//               <span className="slogan d-block">Hệ Thống Sửa Chữa & Chăm Sóc Ô Tô Cao Cấp Auto Fast</span>
//             </div>
//             <div className="contact-header d-flex align-items-center">
//               <div className="contact ms-3">
//                 <a href="tel:0568.05.05.05" title="" className="phone d-inline-flex align-baseline">
//                   0568.05.05.05
//                 </a>
//                 <span className="d-block">Liên hệ với chúng tôi</span>
//               </div>
//             </div>
//           </div>
//           <div x-ref="middle_bar" className="main-menu-wrap">
//             <div className="container d-flex flex-wrap justify-content-between align-items-stretch">
//               <nav className="main-menu" aria-label="main-menu">
//             <ul className="list-unstyled d-flex justify-content-end m-0">
//                                             <li>
//                     <a href="/" className="d-block fw-bold"
//                        title="TRANG CHỦ">TRANG CHỦ </a>
//                                     </li>

//                                             <li>
//                     <a  className="d-block fw-bold"
//                        title="GIỚI THIỆU">GIỚI THIỆU ↓</a>
//                    <ul className="sub-menu list-unstyled m-0 ">
//                       <li>
//                            <a href="about"title="Về Chúng Tôi">Về Chúng Tôi</a>
//                        </li>
//                   </ul>
//                                     </li>

//                                             <li>
//                     <a href="service" className="d-block fw-bold"
//                        title="DỊCH VỤ">DỊCH VỤ ↓</a>
//                                             <ul className="sub-menu list-unstyled m-0 ">
//                     <li>
//             <a href="danh-muc-bao-duong-sua-chua.html"
//                title="Bảo Dưỡng & Sửa Chữa Ô Tô">Bảo Dưỡng & Sửa Chữa Ô Tô</a>
//                             <ul className="sub-menu list-unstyled m-0 right">
//                     <li>
//             <a href="bao-duong-o-to-nhu-the-nao-a138.html"
//                title="Bảo Dưỡng Ô Tô Định Kỳ">Bảo Dưỡng Ô Tô Định Kỳ</a>
//                     </li>
//                     <li>
//             <a href="noi-dung-bao-gia-sua-chua-dieu-hoa-o-to-48.html"
//                title="Vệ Sinh Điều Hòa Ô Tô - Công Nghệ Nội Soi">Vệ Sinh Điều Hòa Ô Tô - Công Nghệ Nội Soi</a>
//                     </li>
//                     <li>
//             <a href="sua-chua-he-thong-khung-gam-o-to-tot-nhat-a206.html"
//                title="Sửa Chữa Khung Gầm Ô Tô">Sửa Chữa Khung Gầm Ô Tô</a>
//                     </li>
//                     <li>
//             <a href="noi-dung-sua-chua-hop-so-tu-dong-cho-xe-o-to-cua-ban-tai-ha-thanh-4158.html"
//                title="Sửa Chữa Hộp Số Tự Động">Sửa Chữa Hộp Số Tự Động</a>
//                     </li>
//                     <li>
//             <a href="quy-trinh-sua-chua-dai-tu-dong-co-o-to-dung-chuan-a204.html"
//                title="Đại Tu Động Cơ Ô Tô">Đại Tu Động Cơ Ô Tô</a>
//                     </li>
//                     <li>
//             <a href="sua-chua-dien-o-to.html"
//                title="Chẩn Đoán & Xử Lý Hệ Thống Điện Ô Tô">Chẩn Đoán & Xử Lý Hệ Thống Điện Ô Tô</a>
//                     </li>
//     </ul>
//                     </li>
//                     <li>
//             <a href="danh-muc-cham-soc-lam-dep.html"
//                title="Chăm Sóc & Làm Đẹp Ô Tô">Chăm Sóc & Làm Đẹp Ô Tô</a>
//                             <ul className="sub-menu list-unstyled m-0 right">
//                     <li>
//             <a href="phu-bong-ceramic-la-gi-tai-sao-can-phu-bong-cho-xe-o-to.html"
//                title="Phủ bóng Ceramic Ô Tô">Phủ bóng Ceramic Ô Tô</a>
//                     </li>
//                     <li>
//             <a href="danh-bong-son-o-to-tat-ca-nhung-dieu-ban-can-biet-a140.html"
//                title="Đánh bóng sơn xe">Đánh bóng sơn xe</a>
//                     </li>
//                     <li>
//             <a href="quy-trinh-don-noi-that-xe-o-to-a137.html"
//                title="Dọn nội thất ô tô">Dọn nội thất ô tô</a>
//                     </li>
//                     <li>
//             <a href="bien-phap-cach-am-chong-on-o-to-chuyen-nghiep-nhat-a205.html"
//                title="Dán cách âm chống ồn">Dán cách âm chống ồn</a>
//                     </li>
//                     <li>
//             <a href="noi-dung-rua-va-bao-duong-khoang-may-50.html"
//                title="Làm sạch & bảo dưỡng khoang máy">Làm sạch & bảo dưỡng khoang máy</a>
//                     </li>
//     </ul>
//                     </li>
//                     <li>
//             <a href="danh-muc-son-phuc-hoi-than-vo.html"
//                title="Sơn & Phục Hồi Thân Vỏ">Sơn & Phục Hồi Thân Vỏ</a>
//                             <ul className="sub-menu list-unstyled m-0 right">
//                     <li>
//             <a href="chi-phi-thay-doi-mau-son-xe-o-to-a194.html"
//                title="Sơn Đổi Màu">Sơn Đổi Màu</a>
//                     </li>
//                     <li>
//             <a href="noi-dung-son-lazang-o-to-uy-tin-tai-ha-thanh-3128.html"
//                title="Sơn Lazang - Sơn Cùm Phanh">Sơn Lazang - Sơn Cùm Phanh</a>
//                     </li>
//                     <li>
//             <a href="bang-gia-son-xe-o-to-a170.html"
//                title="Sơn Dặm, Sơn Quây">Sơn Dặm, Sơn Quây</a>
//                     </li>
//                     <li>
//             <a href="noi-dung-son-phu-gam-chong-ri-liqui-moly-1071.html"
//                title="Sơn Phủ Gầm Chống Rỉ">Sơn Phủ Gầm Chống Rỉ</a>
//                     </li>
//                     <li>
//             <a href="dich-vu-phuc-hoi-xe-tai-nan.html"
//                title="Phục Hồi Xe Tai Nạn">Phục Hồi Xe Tai Nạn</a>
//                     </li>
//     </ul>
//                     </li>
//                     <li>
//             <a href="mien-phi-cuu-ho.html"
//                title="Cứu Hộ Ô Tô">Cứu Hộ Ô Tô</a>
//                     </li>
//                     <li>
//             <a href="thu-vien-hinh-anh.html"
//                title="Hình Ảnh Thực Tế">Hình Ảnh Thực Tế</a>
//                     </li>
//     </ul>
//                                     </li>

//                                             <li>
//                     <a href="san-pham-o-to.html" className="d-block fw-bold"
//                        title="PHỤ KIỆN">PHỤ KIỆN ↓</a>
//                                             <ul className="sub-menu list-unstyled m-0 ">
//                     <li>
//             <a href="man-hinh-o-to.html"
//                title="Màn Hình ô tô">Màn Hình ô tô</a>
//                     </li>
//                     <li>
//             <a href="cam-hanh-trinh.html"
//                title="Cam hành trình">Cam hành trình</a>
//                     </li>
//                     <li>
//             <a href="phim-cach-nhiet.html"
//                title="Phim cách nhiệt">Phim cách nhiệt</a>
//                     </li>
//                     <li>
//             <a href="cam-bien-ap-suat-lop.html"
//                title="Cảm biến áp suất lốp">Cảm biến áp suất lốp</a>
//                     </li>
//                     <li>
//             <a href="boc-vo-lang.html"
//                title="Bọc vô lăng">Bọc vô lăng</a>
//                     </li>
//                     <li>
//             <a href="tham-lot-san.html"
//                title="Thảm lót sàn 6D">Thảm lót sàn 6D</a>
//                     </li>
//                     <li>
//             <a href="bom-lop.html"
//                title="Bơm lốp">Bơm lốp</a>
//                     </li>
//                     <li>
//             <a href="thiet-bi-android-box.html"
//                title="Thiết bị Android box">Thiết bị Android box</a>
//                     </li>
//                     <li>
//             <a href="cua-hit-o-to.html"
//                title="Cửa hít ô tô">Cửa hít ô tô</a>
//                     </li>
//                     <li>
//             <a href="cop-dien-o-to-thong-minh.html"
//                title="Cốp điện ô tô thông minh">Cốp điện ô tô thông minh</a>
//                     </li>
//                     <li>
//             <a href="do-den-o-to.html"
//                title="Độ đèn ô tô">Độ đèn ô tô</a>
//                     </li>
//     </ul>
//                                     </li>
//                                     <li>
//                     <a href="news" className="d-block fw-bold"
//                        title="KHUYẾN MẠI">Tin Tức</a>
//                                     </li>

                                         

//                                             <li>
//                     <a className="d-block fw-bold"
//                        title="LIÊN HỆ">LIÊN HỆ ↓ </a>
//                                             <ul className="sub-menu list-unstyled m-0 ">
//                     <li>
//             <a href="contact"
//                title="Liên hệ với chúng tôi">Liên hệ với chúng tôi</a>
//                     </li>
                    
//     </ul>
//                                     </li>
//                  <a  className="d-block fw-bold"> 
//                  <div>
//       {isLoggedIn && (
//         <div className="user-info">
//           <small
//             className="px-5"
//             style={userTextStyle}
//             onClick={toggleDropdown}
//             // onMouseOver={toggleDropdown}
//             // onMouseOut={toggleDropdown}
//           >
//             Xin chào,<img style={avatarUser} src={
//                       img ? `http://localhost:8000/storage/${img}` : ""
//                     }/>  
//                     {userName}
//           </small>
//           <div style={{ display: isDropdownVisible ? 'block' : 'none',
//     position: 'absolute',
//     backgroundColor: '#f9f9f9',
//     minWidth: '160px',
//     boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
//     zIndex: '10',}}>
          
//             <Link style={dropdownContentLinkStyle} to="/mybooking">Quản lý lịch của tôi</Link>
//             <Link style={dropdownContentLinkStyle} to={`/account`}>Quản lý tài khoản</Link>
//             <a  href="/" style={dropdownContentLinkStyle} onClick={clearSession}>Logout</a>
//           </div>
//         </div>
//       )}
//     </div>
//            <ul  className="sub-menu list-unstyled m-0 ">
           
//             </ul>     
//             </a>            
// {/*                                   
//                                   <li>
//   <a  href="/signup" className="d-block fw-bold"
//      title="Đăng Ký">Đăng Ký</a>
//                   </li> */}
//                   {!isLoggedIn ?      <li>
//   <a  href="/signup" className="d-block fw-bold"
//      title="Đăng Ký">Đăng Ký</a>
//                   </li> : <div></div> }
//                   {!isLoggedIn ?<li>
//   <a  href="/signin" className="d-block fw-bold"
//      title="Đăng nhập">Đăng nhập</a>
//                   </li> : <div></div> }
//                   {/* <li>
//   <a  href="/signin" className="d-block fw-bold"
//      title="Đăng nhập">Đăng nhập</a>
//                   </li> */}
 
//                     </ul>
//     </nav>
            
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         id="header-mobile"
//         className="header_mobile d-lg-none text-center"
//         x-data="header_mobile"
//         x-ref="header_mobile"
//         x-bind="scroll"
//       >
//             <nav className="px-3 navbar d-flex justify-content-between align-items-center" x-ref="middle_bar">
//             <div className="menu-button offcanvas-click d-flex flex-column">
//                 <span className="first"></span>
//                 <span className="second"></span>
//                 <span className="third"></span>
//             </div>
//             <a href="index.html" className="logo d-inline-block p-2 img img-sd">
//                 <img className="lazyload" data-src="/upload/images/logo/logo-chinh-moi-t6.png" alt="logo"/>
//             </a>
      
//         </nav>
//       </section>
//     </header>
//   );
};

export default Header;
