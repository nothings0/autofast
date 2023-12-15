import React, { CSSProperties, useEffect, useState } from "react";
import instance from "../../../api/instance";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { notification } from "antd";
import { IUser } from "../../../interface/user";
import { IBooking } from "../../../interface/booking";

const MyBooking = () => {
  const [user_id, setPhone] = useState("");
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [bookingsneedpay, setBookingsneedpay] = useState([]);
  const [selectedJobDetails, setSelectedJobDetails] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBookings, setFilteredBookings] = useState<IBooking[]>([]);
  const [showBill, setShowBill] = useState(false);
  const bookingStatuses = [
    "Tất cả",
    "Đã hoàn thành",
    "Đang làm",
    "Chờ xác nhận",
    "Đã được hủy",
  ];
  const [selectedStatus, setSelectedStatus] = useState("Tất cả");
  const [user, setUser] = useState<IUser>();
  const [selectBooking, setSelectedBooking] = useState<IBooking>();
  const [selectJob, setSelectJob] = useState<any>();
  const [showNotification, setShowNotification] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const openNotification = (
    mess: any,
    text_color: any,
    bg_color: any,
    title: any
  ) => {
    setShowNotification(true);
    api.open({
      message: title,
      description: mess,
      duration: 3,
      style: {
        backgroundColor: bg_color,
        color: text_color,
      },
      onClose: () => {
        setShowNotification(false);
      },
    });
  };
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredBookings(bookings);
    } else {
      const filtered = bookings.filter((booking) =>
        Object.values(booking).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredBookings(filtered);
    }
  }, [bookings, searchTerm]);
  const toggleBill = (booking: IBooking) => {
    setShowBill(!showBill);
    setSelectedBooking(booking);

    // console.log(booking);
  };
  const deleteBooking = (bookingId: number) => {
    // Make an API request to update the status to "Đã được hủy" with id in the request body
    instance
      .post(`/client/cancel-booking`, { id: bookingId, status: "Đã được hủy" })
      .then((response) => {
        // Handle success, update the state to reflect the updated status
        if (response.data.success === true) {
          showSuccessNotification(response.data.message);
        } else if (response.data.success === false) {
          showSuccessNotification(response.data.message);
        }
        //  console.log(response.data)
        const updatedBookings = bookings.map((booking) => {
          if (booking.id === bookingId) {
            // Update the status for the specific booking
            return {
              ...booking,
              booking: {
                ...booking,
                status: "Đã được hủy",
              },
            };
          }
          return booking;
        });

        setBookings(updatedBookings);
        console.log("Booking canceled successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Error canceling booking:", error);
      });
  };
  const showJob = (jobs: any) => {
    setSelectJob(jobs);
    console.log(selectJob);
  };
  const showSuccessNotification = (text: any) => {
    notification.success({
      message: "Thành công",
      description: text,
    });
  };

  const showErrorNotification = () => {
    notification.error({
      message: "Error",
      description: "An error occurred while canceling the booking.",
    });
  };
  // Define the selected booking status
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setPhone(userData.id);
        setUser(userData);
      } catch (e) {
        console.error("Failed to parse user data from session storage", e);
      }
    }
  }, []);
  // console.log(user)
  useEffect(() => {
    if (selectedStatus === "Tất cả") {
      // Show all bookings
      setFilteredBookings(bookings);
    } else {
      // Filter bookings based on the selected status
      const filtered = bookings.filter(
        (booking) => booking.status === selectedStatus
      );
      setFilteredBookings(filtered);
    }
  }, [bookings, selectedStatus]);

  // Handle filter button click
  const handleFilter = (status: any) => {
    setSelectedStatus(status);
  };

  // console.log(bookings);
  useEffect(() => {
    if (user_id) {
      const postPhone = async () => {
        try {
          const response = await instance.post("/client/bookings", { user_id });
          console.log(response);
          const allBookings = response.data.flatMap(
            (innerArray: any) => innerArray
          );
          setBookings(allBookings);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      postPhone();
    }
  }, [user_id]);
  useEffect(() => {
    if (user_id) {
      const postPhone = async () => {
        try {
          const response = await instance.post("/client/bookings-payment", {
            user_id,
          });
          console.log(response);
          const allBookings = response.data.flatMap(
            (innerArray: any) => innerArray
          );
          setBookingsneedpay(allBookings);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      postPhone();
    }
  }, [user_id]);

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // centers vertically in the flex container
    alignItems: "center", // centers horizontally in the flex container
    height: "100vh", // sets the height of the container to be the full viewport height
    textAlign: "center", // centers the text inside the container
  };

  const thStyle = {
    backgroundColor: "#f0f0f0",
    color: "#333",
    fontWeight: "bold",
    padding: "10px",
    border: "1px solid #ccc",
  };

  const tdStyle = {
    padding: "8px",
    border: "1px solid #ccc",
  };

  const ulStyle = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  };
  const goToPayment = (booking: any) => {
    // Extract the required properties from the booking object
    const bookingId = booking.id;
    const serviceName = "Thanh toán " + booking.service_name; // Prefixing service_name

    // Calculate the total price by summing the item_price of each job
    const totalPrice = booking.total_amount;
    console.log(booking);

    // Construct the data object with the properties you want to send
    const postData = {
      id: bookingId,
      service_name: serviceName,
      total_price: totalPrice,
      redirect: true, // Add the redirect parameter
    };

    // Send the data object in the POST request
    instance
      .post("/payment", postData)
      .then((response) => {
        console.log(response.data);
        if (response.data.code === "00") {
          window.location.href = response.data.redirect_url;
        } else {
          // Xử lý lỗi nếu cần
        }
      })
      .catch((error) => {
        console.error("Lỗi r:", error);
      });
  };

  const showJobDetails = (booking: any) => {
    setSelectedJobDetails(booking.jobs);
    setSelectedBooking(booking);
  };

  // Function to close job details view
  const closeJobDetails = () => {
    setSelectedJobDetails(null);
  };
  const backdropStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1050, // Make sure it's on top of other content
  };

  // Styles for the modal content area
  const modalContentStyle: CSSProperties = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "90%", // You can adjust the width as needed
    maxWidth: "600px", // You can adjust the maximum width as needed
    maxHeight: "60vh",
    overflowY: "auto",
  };

  const tableStyle = {};

  // Styles for the modal header, if you have one
  const modalHeaderStyle: CSSProperties = {
    borderBottom: "1px solid #eeeeee",
    paddingBottom: "10px",
    marginBottom: "20px",
  };
  const billContainerStyle: CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "90%", // You can adjust the width as needed
    maxWidth: "600px", // You can adjust the maximum width as needed
    maxHeight: "60vh",
    overflowY: "auto",
    zIndex: 1051, // Make sure it's on top of the backdrop
  };

  const closeBillButtonStyle: CSSProperties = {
    backgroundColor: "#007bff", // Bootstrap primary color
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    float: "right", // If you want it to be on the right
  };

  // Styles for the modal body
  const modalBodyStyle: CSSProperties = {
    paddingBottom: "20px",
    marginBottom: "20px",
  };

  // Styles for the close button
  const closeButtonStyle: CSSProperties = {
    backgroundColor: "#007bff", // Bootstrap primary color
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    float: "right", // If you want it to be on the right
  };

  const liStyle = {
    padding: "3px",
  };
  const buttonStyle = {
    margin: "5px",
    // padding: '10px 15px',
    cursor: "pointer",
  };

  const applyDiscount = () => {
    instance
      .post("/client/applyCoupons", {
        coupon_code: discountCode,
        booking_id: selectBooking?.id,
      })
      .then((res) => {
        if (res.data.message === "Mã giảm giá đã được áp dụng thành công") {
          notification.success({
            message: "Mã Giảm giá được áp dụng thành công",
            description: "",
          });
        } else {
          notification.error({
            message: "Mã Giảm giá không hợp lệ",
            description: "",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        notification.error({
          message: "Đã xảy ra lỗi",
          description: "",
        });
      });
  };

  return (
    <div>
      <div style={containerStyle}>
        <h1 style={{ textAlign: "center" }}>Lịch của tôi</h1>
        {/* Phần tìm kiếm và filter */}
        <div className="form-group row">
          <div className=" timkiem">
            <input
              className="form-control"
              placeholder="Tìm kiếm"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div style={{ margin: "20px", display: "flex", gap: "10px" }}>
            {bookingStatuses.map((status) => (
              <Button
                key={status}
                style={{
                  backgroundColor:
                    selectedStatus === status ? "#007bff" : "gray",
                  color: "white",
                  border: "none",
                  // padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleFilter(status)}
              >
                {status}
              </Button>
            ))}
          </div>
        </div>

        {showBill && (
          <div style={backdropStyle}>
            <div style={billContainerStyle}>
              {/* Add your bill content here */}
              <h2>Hóa đơn</h2>
              <hr />

              <div style={{ textAlign: "left" }}>
                <b>Thông tin khách hàng</b>
                <div>
                  <b>Tên khách hàng : </b>
                  {user?.name}
                </div>
                <div>
                  <b>Số điện thoại : </b>
                  {user?.phone}
                </div>
                <div>
                  <b>Email : </b>
                  {user?.email}
                </div>
                <div>
                  <b>Loại xe : </b>
                  {selectBooking?.model_car}
                </div>
                <div>
                  <b>Số km đã đi : </b>
                  {selectBooking?.mileage} Km
                </div>
                <div>
                  <b>Tất cả dịch vụ </b>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            backgroundColor: "#f2f2f2",
                            padding: "8px",
                            textAlign: "left",
                          }}
                        >
                          ID
                        </th>
                        <th
                          style={{
                            backgroundColor: "#f2f2f2",
                            padding: "8px",
                            textAlign: "left",
                          }}
                        >
                          Name
                        </th>
                        <th
                          style={{
                            backgroundColor: "#f2f2f2",
                            padding: "8px",
                            textAlign: "left",
                          }}
                        >
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectJob.map((job: any) => (
                        <tr key={job.id} style={{ border: "1px solid #ddd" }}>
                          <td style={{ padding: "8px" }}>{job.id}</td>
                          <td style={{ padding: "8px" }}>{job.item_name}</td>
                          <td style={{ padding: "8px" }}>
                            {job.price.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td
                          colSpan={2}
                          style={{ textAlign: "right", fontWeight: "bold" }}
                        >
                          Total:
                        </td>
                        <td style={{ padding: "8px", fontWeight: "bold" }}>
                          {selectJob
                            .reduce(
                              (total: any, job: any) => total + job.price,
                              0
                            )
                            .toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* You can display the bill details here */}
              <Button onClick={() => goToPayment(selectBooking)}>
                Thanh toán
              </Button>
              <button
                style={closeBillButtonStyle}
                onClick={() => toggleBill(selectBooking!)}
              >
                Đóng hóa đơn
              </button>
            </div>
          </div>
        )}
        {selectedJobDetails && (
          <div style={backdropStyle}>
            <div style={modalContentStyle}>
              <div style={modalHeaderStyle}>
                <h4>Chi tiết công việc</h4>
              </div>
              <div style={modalBodyStyle}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Tên công việc</th>
                      <th style={thStyle}>Thời gian dự kiến hoàn thành</th>
                      <th style={thStyle}>Trạng Thái </th>
                      <th style={thStyle}>Tên người phụ trách </th>

                      <th style={thStyle}>Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedJobDetails.map((job: any) => (
                      <tr key={job.id}>
                        <td style={tdStyle}>{job.item_name}</td>
                        <td style={tdStyle}>{job.target_time_done} phút</td>
                        <td style={tdStyle}>{job.status}</td>

                        <td style={tdStyle}>{job.staff_name}</td>

                        <td style={tdStyle}>
                          {job.item_price.toLocaleString()} VND
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <b style={{ marginRight: "10px" }}>Mã giảm giá: </b>
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  style={{
                    marginRight: "10px",
                    padding: "5px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  onClick={applyDiscount}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Xác nhận
                </button>
              </div>
              <button style={closeButtonStyle} onClick={closeJobDetails}>
                Đóng
              </button>
            </div>
          </div>
        )}
        {bookings.length > 0 ? (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Ngày đến</th>
                <th style={thStyle}>Giờ đến</th>
                {/* <th style={thStyle}>Ghi chú</th> */}
                <th style={thStyle}>Loại xe</th>
                <th style={thStyle}>Dịch vụ </th>
                <th style={thStyle}>Phòng </th>
                <th style={thStyle}>Trạng Thái </th>
                {/* <th style={thStyle}>Các công việc</th> */}
                <th style={thStyle}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td style={tdStyle}>{booking?.id}</td>

                  <td style={tdStyle}>{booking.target_date}</td>
                  <td style={tdStyle}>{booking.target_time}</td>

                  <td style={tdStyle}>{booking.model_car}</td>
                  <td style={tdStyle}>{booking?.service_name}</td>
                  <td style={tdStyle}>{booking?.room}</td>

                  <td style={tdStyle}>{booking.status}</td>

                  <td style={tdStyle}>
                    <Button onClick={() => showJobDetails(booking)}>
                      Xem chi tiết
                    </Button>
                    {booking.status === "Chờ xác nhận" ? (
                      <Button
                        onClick={() => deleteBooking(booking.id)}
                        style={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          background: "blue",
                          color: "white" /* add other styles as needed */,
                        }}
                      >
                        Hủy
                      </Button>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
