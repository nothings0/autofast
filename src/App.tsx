import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import BaseLayout from "./pages/Layout/BaseLayout";
import HomePage from "./pages/UserSide/Home/HomePage";
import NewsPage from "./pages/UserSide/News/NewsPage";
import NewsDetailPage from "./pages/UserSide/News/NewsDetailPage";
import BookingPage from "./pages/UserSide/Booking/BookingPage";
import SigninPage from "./pages/UserSide/SigninAndSignup/SigninPage";
import SignupPage from "./pages/UserSide/SigninAndSignup/SignupPage";
import AdminLayout from "./pages/Layout/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import BookingAdmin from "./pages/Admin/BookingAdmin/BookingAdmin";
import StaffAdmin from "./pages/Admin/StaffAdmin/StaffAdmin";
import StaffAdminAdd from "./pages/Admin/StaffAdmin/StaffAdminAdd";
import StaffAdminEdit from "./pages/Admin/StaffAdmin/StaffAdminEdit";
import NewsAdmin from "./pages/Admin/NewsAdmin/NewsAdmin";
import NewsAdminAdd from "./pages/Admin/NewsAdmin/NewsAdminAdd";
import NewsAddminEdit from "./pages/Admin/NewsAdmin/NewsAddminEdit";
import { useEffect, useState } from "react";
import { INews } from "./interface/news";
import ForgotPassword from "./pages/UserSide/SigninAndSignup/ForgotPassword";
import { IStaff } from "./interface/staff";
import { getNews, addNews, updateNews, deleteNews } from "./api/news";
import LoginAdmin from "./pages/UserSide/SigninAndSignup/LoginAdmin";
import ChangePassWord from "./pages/UserSide/SigninAndSignup/ChangePassWord";
import {
  getAllStaff,
  addStaff,
  updateStaff,
  deleteStaff,
  // getAllStaffCategory,
  // getOneStaffCategory,
  // addStaffCategory,
  // updateStaffCategory,
  // deleteStaffCategory,
} from "./api/staffs";
import VerifyForget from "./pages/UserSide/SigninAndSignup/VerifyForget";
// import NotFound from "./pages/UserSide/NotFoundPage";
import NotFoundPage from "./pages/UserSide/NotFoundPage";
import ServicePage from "./pages/UserSide/Service/ServicePage";
import ContactPage from "./pages/UserSide/Contact/ContactPage";
import AboutUsPage from "./pages/UserSide/AboutUs/AboutUsPage";
import TeamPage from "./pages/UserSide/Team/TeamPage";
import BookingConfirmAdmin from "./pages/Admin/BookingAdmin/BookingConfirmAdmin";
import {
  addBooking,
  cancelBooking,
  // deleteBooking,
  getBooking,
  getBookingdetail,
  updateBooking,
} from "./api/booking";
import { IBooking } from "./interface/booking";
import BookingHtAdmin from "./pages/Admin/BookingAdmin/BookingHtAdmin";
import UserAdmin from "./pages/Admin/UsersAdmin/UserAdmin";
import UserAdminAdd from "./pages/Admin/UsersAdmin/UserAdminAdd";
import UserAdminEdit from "./pages/Admin/UsersAdmin/UserAdminEdit";
import { IUser } from "./interface/user";
import {
  addUsers,
  deleteUsers,
  getUsers,
  updateUsers,
  logIn,
} from "./api/user";
import VerifyPage from "./pages/UserSide/VerifyPage";
import {
  addService,
  addServiceItem,
  deleteService,
  deleteServiceItem,
  getService,
  getServiceItem,
  updateService,
  updateServiceItem,
} from "./api/service";
import ServicesAdmin from "./pages/Admin/Service/ServicesAdmin";
import ServicesAdminAdd from "./pages/Admin/Service/ServicesAddAdmin";
import ServicesAdminEdit from "./pages/Admin/Service/ServicesAdminEdit";
import { IService, ISeviceItem } from "./interface/service";
import ServiceItemAdmin from "./pages/Admin/Service/ServiceItem/ServiceItemAdmin";
import ServiceItemAdd from "./pages/Admin/Service/ServiceItem/ServiceItemAdd";
import ServiceItemEdit from "./pages/Admin/Service/ServiceItem/ServiceItemEdit";
import MyBooking from "./pages/UserSide/Booking/MyBooking";
// import { ProtectedRoute } from "./components/ProtectedRoute";

import MyBill from "./pages/UserSide/Bill/MyBill";
import AccountSetting from "./pages/UserSide/Account/AccountSetting";
import BillDetail from "./pages/UserSide/Bill/BillDetail";
import BookingCancelAdmin from "./pages/Admin/BookingAdmin/BookingCancelAdmin";
import PayPage from "./pages/UserSide/Pay/PayPage";
import SearchBooking from "./pages/UserSide/SearchBooking/SearchBooking";
import { searchBooking } from "./api/searchBooking";
import { getTechnicians } from "./api/Client/technicians";
import { getAbout, getAbouts, getAboutz } from "./api/Client/about";
import Home from "./pages/UserSide/Home/Home";
import ServiceClientNew from "./pages/UserSide/Service/ServiceClineNew";
// import { getServiceHome, getServicePage } from "./api/Client/servicecl";
import ServiceDetailV from "./pages/UserSide/Service/ServiceDetailV";
import AboutDetail from "./pages/UserSide/AboutUs/AboutDetail";
import { getMenu } from "./api/Client/menu";
import Review from "./pages/UserSide/Review/Review";
import ResetPass from "./pages/UserSide/Account/ResetPass";

function App() {
  const [staffs, setStaffs] = useState<IStaff[]>([]);
  const [news, setNews] = useState<INews[]>([]);
  const [booking, setBooking] = useState<IBooking[]>([]);
  const [searchBK, setSearchBK] = useState<IBooking[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [mess, setMess] = useState();
  const [services, setService] = useState<IService[]>([]);
  const [serviceItem, setServiceItem] = useState<ISeviceItem[]>([]);
  const [technicians, setTechnicians] = useState<any>([]);
  const [about, setAbout] = useState<any>([]);
  const [abouts, setAbouts] = useState<any>([]);
  const [aboutz, setAboutz] = useState<any>([]);
  const [menu, setMenu] = useState<any>([]);
  const [bookingdetail, setBookingDetail] = useState<any>([]);
  // const [serviceHome, setServiceHome] = useState<any>([]);
  // const [servicePage, setServicePage] = useState<any>([]);

  useEffect(() => {
    getAllStaff().then(({ data }) => setStaffs(data));
    getNews().then(({ data }) => setNews(data));
    getBooking().then(({ data }) => setBooking(data));
    getUsers().then(({ data }) => setUsers(data));
    getService().then(({ data }) => setService(data));
    getServiceItem().then(({ data }) => setServiceItem(data));
    searchBooking().then(({ data }) => setSearchBK(data));
    getTechnicians().then(({ data }) => setTechnicians(data));
    getAbout().then(({ data }) => setAbout(data));
    getAbouts().then(({ data }) => setAbouts(data));
    getAboutz().then(({ data }) => setAboutz(data));
    getMenu().then(({ data }) => setMenu(data));
    getBookingdetail().then(({ data }) => setBookingDetail(data));
    // getServiceHome().then(({data}) => setServiceHome(data));
    // getServicePage().then(({data}) => setServicePage(data));
  }, []);

  const onHandleAddStaff = (staff: IStaff) => {
    addStaff(staff).then(() =>
      getAllStaff().then(({ data }) => setStaffs(data))
    );
  };

  const onHandleUpdateStaff = (staff: IStaff) => {
    updateStaff(staff).then(() =>
      getAllStaff().then(({ data }) => setStaffs(data))
    );
  };

  const onHandleRemoveStaff = (id: number) => {
    deleteStaff(id).then(() =>
      setStaffs(staffs.filter((item: IStaff) => item.id !== id))
    );
  };

  const onHandleAddNews = (newsItem: INews) => {
    addNews(newsItem).then(() => getNews().then(({ data }) => setNews(data)));
  };

  const onHandleUpdateNews = (newsItem: INews) => {
    updateNews(newsItem).then(() =>
      getNews().then(({ data }) => setNews(data))
    );
  };

  const onHandleRemoveNews = (id: number) => {
    deleteNews(id).then(() =>
      setNews(news.filter((item: INews) => item.id !== id))
    );
  };

  // Booking
  const onHandleBooking = (BookingItem: any) => {
    addBooking(BookingItem).then(() =>
      getBooking().then(({ data }) => setBooking(data))
    );
  };

  const onHandleUpdateBooking = (BookingItem: any) => {
    updateBooking(BookingItem).then(() =>
      getBooking().then(({ data }) => setBooking(data))
    );
  };

  const onHandleCancelBooking = (BookingItem: any) => {
    cancelBooking(BookingItem).then(() =>
      getBooking().then(({ data }) => setBooking(data))
    );
  };

  // Users
  const onHandleAddUsers = (users: IUser) => {
    addUsers(users).then((res) =>
      getUsers().then(({ data }) => {
        setMess(res);
        setUsers(data);
      })
    );
  };

  const onHandleUpdateUsers = (users: IUser) => {
    updateUsers(users).then(() =>
      getUsers().then(({ data }) => setUsers(data))
    );
  };

  const onHandleRemoveUsers = (id: number) => {
    deleteUsers(id).then(() =>
      setUsers(users.filter((item: IUser) => item.id !== id))
    );
  };
  // Services Admin
  const onHandleAddService = (service: IService) => {
    addService(service).then(() =>
      getService().then(({ data }) => setService(data))
    );
  };

  const onHandleUpdateService = (service: IService) => {
    updateService(service).then(() =>
      getService().then(({ data }) => setService(data))
    );
  };

  const onHandleRemoveService = (id: number) => {
    deleteService(id).then(() =>
      setService(services.filter((item: IService) => item.id !== id))
    );
  };
  // ServiceItem
  const onHandleAddServiceItem = (data: ISeviceItem) => {
    addServiceItem(data).then(() =>
      getServiceItem().then(({ data }) => {
        setServiceItem(data);
      })
    );
  };
  const onHandleUpdateServiceItem = (data: ISeviceItem) => {
    updateServiceItem(data).then(() =>
      getServiceItem().then(({ data }) => setServiceItem(data))
    );
  };
  const onHandleRemoveServiceItem = (id: number) => {
    deleteServiceItem(id).then(() =>
      setServiceItem(serviceItem.filter((item: any) => item.id !== id))
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* User Side */}
          <Route path="/" element={<BaseLayout menu={menu} />}>
            <Route
              index
              element={
                <HomePage
                  serviceHome={services}
                  technicians={technicians}
                  about={about}
                  abouts={abouts}
                  aboutz={aboutz}
                />
              }
            />
            {/* Booking Page */}
            <Route path="booking">
              <Route
                index
                element={
                  <BookingPage
                    serviceItem={serviceItem}
                    service={services}
                    onAddBooking={onHandleBooking}
                  />
                }
              />
            </Route>
            <Route path="home">
              <Route index element={<Home />} />
            </Route>
            <Route path="servicenew">
              <Route index element={<ServiceClientNew />} />
            </Route>
            {/* Contact Page */}
            <Route path="contact">
              <Route index element={<ContactPage />} />
            </Route>
            <Route path="review">
              <Route
                index
                element={
                  <Review bookingdetail={bookingdetail} service={services} />
                }
              />
            </Route>
            <Route path="mybooking">
              <Route index element={<MyBooking />} />
            </Route>
            {/* News Page */}
            <Route path="news">
              <Route index element={<NewsPage news={news} />} />
              <Route path=":id" element={<NewsDetailPage news={news} />} />
            </Route>
            <Route path="service">
              <Route index element={<ServicePage servicePage={services} />} />
              <Route
                path=":id"
                element={<ServiceDetailV serviceItem={serviceItem} />}
              />
            </Route>
            {/* About Page */}
            <Route path="about">
              <Route
                index
                element={
                  <AboutUsPage
                    about={about}
                    abouts={abouts}
                    aboutz={aboutz}
                    technicians={technicians}
                  />
                }
              />

              <Route path="chitiet" element={<AboutDetail />} />
            </Route>
            {/* Team Page */}
            <Route path="technicians">
              <Route index element={<TeamPage technicians={technicians} />} />
            </Route>
            {/* Bill Page */}
            <Route path="bill">
              <Route index element={<BillDetail />} />
            </Route>
            {/* Pay Page */}
            <Route path="checkout">
              <Route index element={<PayPage />} />
            </Route>
            {/* Account Setting */}
            <Route path="account">
              <Route index element={<AccountSetting />} />
            </Route>
            <Route path="respass/:id">
              <Route index element={<ResetPass />} />
            </Route>
            Search Booking
            <Route path="search-booking">
              <Route index element={<SearchBooking searchBK={searchBK} />} />
            </Route>
            <Route path="mybill">
              <Route index element={<MyBill />} />
              <Route
                path=":id/review"
                element={
                  <Review bookingdetail={bookingdetail} service={services} />
                }
              />
            </Route>
          </Route>
          {/* End User Side */}
          {/* Not Found Page */}
          <Route path="*" element={<NotFoundPage />} />

          {/* Admin Side */}
          <Route
            path="/admin"
            element={
              //  <ProtectedRoute isAdmin={true}>
              <AdminLayout />
              // </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />

            {/* Booking Admin Page */}
            <Route path="booking">
              <Route
                index
                element={
                  // <ProtectedRoute isAdmin={true}>
                  <BookingAdmin
                    booking={booking}
                    onCancelBooking={onHandleCancelBooking}
                    onUpdateBooking={onHandleUpdateBooking}
                  />
                  // </ProtectedRoute>
                }
              />
            </Route>
            {/* Booking Confirm Admin Page */}
            <Route path="bookings">
              <Route
                index
                element={
                  //  <ProtectedRoute isAdmin={true}>
                  <BookingConfirmAdmin
                    booking={booking}
                    onCancelBooking={onHandleCancelBooking}
                    onUpdateBooking={onHandleUpdateBooking}
                  />
                  //  </ProtectedRoute>
                }
              />
            </Route>
            {/* Booking HT Admin Page */}
            <Route path="bookingHT">
              <Route
                index
                element={
                  // <ProtectedRoute isAdmin={true}>
                  <BookingHtAdmin
                    booking={booking}
                    onCancelBooking={onHandleCancelBooking}
                  />
                }
              />
            </Route>
            {/* Booking Cancel Admin Page */}
            <Route path="bookingCC">
              <Route
                index
                element={
                  <BookingCancelAdmin booking={booking} />
                  // </ProtectedRoute>
                }
              />
            </Route>

            {/*News Admin Page */}
            <Route path="news">
              <Route
                index
                element={
                  // <ProtectedRoute isAdmin={true}>
                  <NewsAdmin news={news} onRemoveNews={onHandleRemoveNews} />
                  // </ProtectedRoute>
                }
              />{" "}
              <Route
                path="add"
                element={<NewsAdminAdd onAddNews={onHandleAddNews} />}
              />
              <Route
                path=":id/edit"
                element={
                  <NewsAddminEdit
                    news={news}
                    onUpdateNews={onHandleUpdateNews}
                  />
                }
              />
            </Route>
            {/*Services Admin Page */}
            <Route path="service">
              <Route
                index
                element={
                  <ServicesAdmin
                    service={services}
                    onRemoveService={onHandleRemoveService}
                  />
                }
              />{" "}
              <Route
                path="add"
                element={<ServicesAdminAdd onAddService={onHandleAddService} />}
              />
              <Route
                path=":id/edit"
                element={
                  <ServicesAdminEdit
                    service={services}
                    onHandleUpdateService={onHandleUpdateService}
                  />
                }
              />
            </Route>
            {/* ADMIN SERVICEItem*/}
            <Route path="serviceitem">
              <Route
                index
                element={
                  <ServiceItemAdmin
                    servicesItem={serviceItem}
                    onRemoveServiceItem={onHandleRemoveServiceItem}
                  />
                }
              />
              <Route
                path="add"
                element={
                  <ServiceItemAdd
                    onAddServiceItem={onHandleAddServiceItem}
                    service={services}
                  />
                }
              />
              <Route
                path=":id/edit"
                element={
                  <ServiceItemEdit
                    service={services}
                    serviceItem={serviceItem}
                    onUpdateServiceItem={onHandleUpdateServiceItem}
                  />
                }
              />
            </Route>
            {/* Staff Admin Page */}
            <Route path="staffs">
              <Route
                index
                element={
                  // <ProtectedRoute isAdmin={true}>
                  <StaffAdmin
                    staffs={staffs}
                    onRemoveStaff={onHandleRemoveStaff}
                  />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="add"
                element={<StaffAdminAdd onAddStaff={onHandleAddStaff} />}
              />
              <Route
                path=":id/edit"
                element={
                  <StaffAdminEdit
                    staffs={staffs}
                    onUpdateStaff={onHandleUpdateStaff}
                  />
                }
              />
            </Route>
            {/*User Admin Page */}
            <Route path="users">
              <Route
                index
                element={
                  <UserAdmin
                    users={users}
                    onRemoveUsers={onHandleRemoveUsers}
                  />
                }
              />{" "}
              <Route
                path="add"
                element={<UserAdminAdd onAddUsers={onHandleAddUsers} />}
              />
              <Route
                path=":id/edit"
                element={
                  <UserAdminEdit
                    users={users}
                    onUpdateUsers={onHandleUpdateUsers}
                  />
                }
              />
            </Route>
          </Route>
          <Route path="/loginadmin" element={<LoginAdmin />} />
          {/* End Admin Side */}

          {/* Signin Page */}
          <Route path="signin">
            <Route index element={<SigninPage onSignin={logIn} />} />
          </Route>
          {/* Verify Page */}
          <Route path="verify/:phone">
            <Route index element={<VerifyPage />} />
          </Route>
          <Route path="forgotpw">
            <Route index element={<ForgotPassword />} />
          </Route>
          <Route path="verifyforget/:phone">
            <Route index element={<VerifyForget />} />
          </Route>
          <Route path="changepw/:phone">
            <Route index element={<ChangePassWord />} />
          </Route>

          {/* Signup Page */}
          <Route path="signup">
            <Route
              index
              element={<SignupPage onAddUsers={onHandleAddUsers} mess={mess} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
