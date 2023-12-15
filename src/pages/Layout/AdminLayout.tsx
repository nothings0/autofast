import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <div id="wrapper">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Auto Fast  <sup>Admin</sup></div>
        </a>

        <hr className="sidebar-divider my-0"/>

        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider"/>

        <div className="sidebar-heading">Quản lý</div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            {/* <i className="fas fa-fw fa-cog"></i> */}
            <i className="fas fa-fw fa-table"></i>
            <span>Booking</span>
          </a>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Danh sách đặt lịch</h6>
              <Link style={{ textDecoration: 'none' }} to="booking" ><a  className="collapse-item" href="staffs/add">Lịch đang chờ xác nhận</a></Link>
              <Link style={{ textDecoration: 'none' }} to="bookings" ><a  className="collapse-item" href="staffs/add">Lịch đã xác nhận</a></Link>
              <Link style={{ textDecoration: 'none' }} to="bookingHT" ><a  className="collapse-item" href="staffs/add">Lịch đã hoàn thành</a></Link>
              <Link style={{ textDecoration: 'none' }} to="bookingCC" ><a  className="collapse-item" href="staffs/add">Lịch đã hủy</a></Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwoo" aria-expanded="true" aria-controls="collapseTwoo">
            {/* <i className="fas fa-fw fa-cog"></i> */}
            <i className="fas fa-fw fa-table"></i>
            <span>Quản lý nhân viên</span>
          </a>
          <div id="collapseTwoo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Staffs</h6>
              <Link style={{ textDecoration: 'none' }} to="staffs" ><a  className="collapse-item" href="staffs/add">Danh sách nhân viên</a></Link>
              <Link style={{ textDecoration: 'none' }} to="staffs/add" ><a  className="collapse-item" href="staffs/add">Thêm mới nhân viên</a></Link>
              

            </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwoooo" aria-expanded="true" aria-controls="collapseTwoooo">
            {/* <i className="fas fa-fw fa-cog"></i> */}
            <i className="fas fa-fw fa-table"></i>
            <span>Service</span>
          </a>

          <div id="collapseTwoooo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Quản Lý Dịch Vụ</h6>
              <Link style={{ textDecoration: 'none' }} to="service" ><a  className="collapse-item" href="service">Danh Sách Dịch Vụ</a></Link>
              <Link style={{ textDecoration: 'none' }} to="service/add" ><a  className="collapse-item" href="service/add">Thêm dịch vụ</a></Link>

            </div>
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Quản Lý Dịch Vụ Item</h6>
              <Link style={{ textDecoration: 'none' }} to="serviceitem" ><a  className="collapse-item" href="serviceitem">Danh Sách Dịch Vụ Item</a></Link>
              <Link style={{ textDecoration: 'none' }} to="serviceitem/add"><a  className="collapse-item" href="serviceitem/add">Thêm Dịch Vụ Chi Tiết</a></Link>

            </div>
           
            
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwooo" aria-expanded="true" aria-controls="collapseTwooo">
            {/* <i className="fas fa-fw fa-cog"></i> */}
            <i className="fas fa-fw fa-table"></i>
            <span>Quản lý tài khoản</span>
          </a>
          <div id="collapseTwooo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">User</h6>
              <Link style={{ textDecoration: 'none' }} to="users" ><a  className="collapse-item" href="staffs/add">Danh sách tài khoản</a></Link>
              <Link style={{ textDecoration: 'none' }} to="users/add" ><a  className="collapse-item" href="staffs/add">Thêm mới tài khoản</a></Link>
              

            </div>w
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            {/* <i className="fas fa-fw fa-wrench"></i> */}
            <i className="fas fa-fw fa-table"></i>
            <span>Tin Tức</span>
          </a>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Quản lý tin Tức</h6>
              <Link style={{ textDecoration: 'none' }} to="news" ><a  className="collapse-item" >Danh sách tin tức</a></Link>
              <Link style={{ textDecoration: 'none' }} to="news/add" ><a  className="collapse-item" >Thêm mới tin tức</a></Link>
              
            </div>
          </div>
        </li>

        <hr className="sidebar-divider"/>

        <div className="sidebar-heading">Addons</div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">Login</a>
              <a className="collapse-item" href="register.html">Register</a>
              <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">404 Page</a>
              <a className="collapse-item" href="blank.html">Blank Page</a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="users">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Quản lý tài khoản</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block"/>

       
      </ul>
      <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

              

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                      

                       

                        <div className="topbar-divider d-none d-sm-block"></div>

                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img className="img-profile rounded-circle"
                                    src="img/undraw_profile.svg"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
 {/* <!-- adadasdsadasasdsadsadandada --> */}


 <Outlet />

 {/* <!-- asdkadsjadasdsadadad --> */}

            </div>

            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright Auto Fast </span>
                    </div>
                </div>
            </footer>

        </div>
      
      </div>
    </div>
  );
};

export default AdminLayout;