import React, { useState, useEffect, CSSProperties } from "react";
// import {
//   BorderBottomOutlined,
//   BorderTopOutlined,
//   RadiusBottomleftOutlined,
//   RadiusBottomrightOutlined,
//   RadiusUpleftOutlined,
//   RadiusUprightOutlined,
// } from "@ant-design/icons";
// import { Button, Divider, Space } from "antd";
// import type { NotificationPlacement } from "antd/es/notification/interface";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
import instance from "../../../api/instance";

const BookingPage = (props: any) => {
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [currentHour, setCurrentHour] = useState(0);
  const [fullHours, setFullHours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [currentPage1, setCurrentPage1] = useState(1);
  const itemsPerPage1 = 5;
  const [day, setDay] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [user_id, setUserId] = useState("");
  const getUserFromSession = () => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  };
  const navigate = useNavigate();
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextPage1 = () => {
    setCurrentPage1((prevPage) => prevPage + 1);
  };

  const handlePrevPage1 = () => {
    setCurrentPage1((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleCheckboxChange1 = (e: any) => {
    setIsCheckboxChecked(e.target.checked);
  };

  useEffect(() => {
    // Lấy dữ liệu người dùng từ session khi chạy
    const userFromSession = getUserFromSession();

    if (userFromSession) {
      setPhone(userFromSession.phone);
      setEmail(userFromSession.email);
      setName(userFromSession.name);
      setUserId(userFromSession.id);
    }
  }, []);
  const DataTime = [
    { hour: "8:00", formattedHour: "08:00:00" },
    { hour: "10:00", formattedHour: "10:00:00" },
    { hour: "13:00", formattedHour: "13:00:00" },
    { hour: "15:00", formattedHour: "15:00:00" },
    { hour: "17:00", formattedHour: "17:00:00" },
  ];

  const maintenanceIntervals = {
    "Bảo dưỡng cấp 1": [5000, 15000, 25000],
    "Bảo dưỡng cấp 2": [10000, 30000, 50000],
    "Bảo dưỡng cấp 3": [20000, 60000, 100000],
    "Bảo dưỡng cấp 4": [40000, 80000, 120000],
  };
  console.log(user_id);
  const styles: Record<string, CSSProperties> = {
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
      backgroundColor: "#f2f2f2",
    },
    td: {
      border: "1px solid #ddd",
      padding: "8px",
    },
  };
  useEffect(() => {
    const updateCurrentHour = () => {
      const now = new Date();
      setCurrentHour(now.getHours());
      console.log(currentHour);
    };

    updateCurrentHour(); // Initial call

    const intervalId = setInterval(updateCurrentHour, 10000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  const validateForm = () => {
    const errors: Partial<FormData> = {};

    // Kiểm tra họ và tên
    if (!formData.full_name.trim()) {
      errors.full_name = "Họ và tên không được để trống";
    }

    // Kiểm tra số điện thoại
    const phonePattern = /^(0)\d{9}$/;
    if (!phonePattern.test(formData.phone.trim())) {
      errors.phone = "Số điện thoại không hợp lệ";
    }

    // Kiểm tra email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email)) {
      errors.email = "Email không hợp lệ";
    }

    // Kiểm tra loại xe
    if (!formData.model_car) {
      errors.model_car = "Vui lòng chọn loại xe";
    }

    // Kiểm tra thời gian đến
    if (!formData.target_date) {
      errors.target_date = "Vui lòng chọn ngày đến";
    }
    if (!formData.target_time) {
      errors.target_time = "Vui lòng chọn giờ đến";
    }

    // Kiểm tra số KM của xe
    // const mileageValue = parseInt(formData.mileage, 10);
    // if (isNaN(mileageValue) || mileageValue < 0) {
    //   errors.mileage = "Số KM không hợp lệ";
    // }
    //     const mileageValue = formData.mileage.trim() ? parseInt(formData.mileage, 10) : null;
    // if (mileageValue !== null && (isNaN(mileageValue) || mileageValue <= 0)) {
    //   errors.mileage = "Số KM không hợp lệ";
    // }

    const mileageValue = formData.mileage.trim();

    if (!mileageValue) {
      errors.mileage = "Vui lòng nhập số KM";
    } else if (mileageValue.length > 10) {
      // Kiểm tra độ dài của chuỗi số
      errors.mileage = "Số KM bạn nhập không hợp lệ";
    } else {
      // Chuyển đổi giá trị sang số nguyên và kiểm tra
      const numericMileageValue = parseInt(mileageValue, 10);
      if (isNaN(numericMileageValue) || numericMileageValue <= 0) {
        errors.mileage = "Vui lòng nhập số KM hợp lệ";
      }
    }

    // Kiểm tra gói bảo dưỡng
    if (formData.service === "0") {
      errors.service = "Vui lòng chọn gói bảo dưỡng";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const dataService = props.service;
  const dataServiceItem = props.serviceItem;
  const [selectedServiceItems, setSelectedServiceItems] = useState<
    | {
        item_name: string;
        price: number;
      }[]
    | null
  >([]);

  const [kmMessage, setKmMessage] = useState<string>("");

  const [selectedService, setSelectedService] = useState<{
    service_name: string;
    price: number;
    detail: string;
  } | null>(null);

  type FormData = {
    user_id: string;
    full_name: string;
    phone: string;
    email: string;
    note: string;
    model_car: string;
    status: string;
    target_date: string;
    target_time: string;
    service: string;
    mileage: string;
    service_item_other: [];
  };

  const [formData, setFormData] = useState<FormData>({
    user_id: "",
    full_name: "",
    phone: "",
    email: "",
    note: "",
    model_car: "",
    status: "Chờ xác nhận",
    target_date: "",
    target_time: "",
    service: "",
    mileage: "",
    service_item_other: [],
  });

  useEffect(() => {
    if (phone != "") {
      // Điện thoại không được trống, Set dữ liệu theo tên, phone, email
      setFormData({
        user_id: user_id,
        full_name: name, // Thay đổi dữ liệu theo trường
        phone: phone,
        email: email, // Thay đổi dữ liệu theo trường
        note: "",
        model_car: "",
        status: "Chờ xác nhận",
        target_date: "",
        target_time: "",
        service: "",
        mileage: "",
        service_item_other: [],
      });
    } else {
      // No phone number, set initial empty form data
      // Không có số điện thoại data not empty
      setFormData({
        user_id: "",
        full_name: "", // Replace with actual data // Thay đổi dữ liệu theo trường
        phone: "",
        email: "", // Replace with actual data // Thay đổi dữ liệu theo trường
        note: "",
        model_car: "",
        status: "Chờ xác nhận",
        target_date: "",
        target_time: "",
        service: "",
        mileage: "",
        service_item_other: [],
      });
    }
  }, [phone]);
  const handleCheckboxChange = (e: any, item: any) => {
    // Phần select action để cộng vào cả tổng giá tiền
    if (e.target.checked) {
      setSelectedTotal(selectedTotal + item.price);
    } else {
      setSelectedTotal(selectedTotal - item.price);
    }
    const { checked, value } = e.target;

    setFormData((prevData: any) => {
      if (checked) {
        // If the checkbox is checked, add the item.id to the service_item_other array
        // Nếu như checkbox được select, thêm item.id vào list service_item_other
        return {
          ...prevData,
          service_item_other: [...prevData.service_item_other, item.id],
        };
      } else {
        // If the checkbox is unchecked, remove the item.id from the service_item_other array
        // Nếu như checkbox được bỏ, xóa item.id khỏi list service_item_other
        return {
          ...prevData,
          service_item_other: prevData.service_item_other.filter(
            (id: any) => id !== item.id
          ),
        };
      }
    });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "phone") {
      setPhone(value);
    }
    if (name === "full_name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "target_date") {
      console.log("Selected Date:", value);
      const selectedDate = new Date(value);
      const today = new Date();
      const isToday = selectedDate.toDateString() === today.toDateString();
      if (isToday) {
        setDay(true);
      } else {
        setDay(false);
      }

      instance.post("/checktime", { target_date: value }).then((res) => {
        // Log the response data to verify
        console.log("Response Data:", res);

        // Set the fullHours state
        setFullHours(res.data);

        // Log the updated state
        console.log("Full Hours:", fullHours);
      });
    }

    if (name === "mileage") {
      const kmValue = parseInt(value, 10);
      let recommendedServiceId: any;

      if (recommendedServiceId !== null) {
        const chosenService = dataService.find(
          (item: any) => item.id === recommendedServiceId
        );
        if (chosenService) {
          setSelectedService({
            service_name: chosenService.service_name,
            price: chosenService.price,
            detail: chosenService.detail,
          });

          const correspondingServiceItems = dataServiceItem.filter(
            (item: any) => item.id_service === chosenService.id
          );

          if (correspondingServiceItems) {
            setSelectedServiceItems(correspondingServiceItems);
          } else {
            setSelectedServiceItems(null);
          }

          setFormData((prevData) => ({
            ...prevData,
            service: recommendedServiceId.toString(),
          }));
        }
      }
    }

    if (name === "service") {
      const chosenService = dataService.find(
        (item: any) => item.id === parseInt(value)
      );

      if (chosenService) {
        setSelectedService({
          service_name: chosenService.service_name,
          price: chosenService.price,
          detail: chosenService.detail,
        });

        // Tìm serviceItem dựa vào id_service
        const correspondingServiceItems = dataServiceItem.filter(
          (item: any) => item.id_service === chosenService.id
        );

        if (correspondingServiceItems) {
          setSelectedServiceItems(correspondingServiceItems);
        } else {
          setSelectedServiceItems(null);
        }
      }
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData)
    const isFormValid = validateForm();

    if (isFormValid) {
      const updatedFormData = {
        ...formData,
        TotalPrice: totalCost + selectedTotal,
      };

      console.log(updatedFormData);

      // props.onAddBooking(updatedFormData)
      instance
        .post("/booking", updatedFormData)
        .then((res: any) => {
          if (res.success === true) {
            return new Promise<void>((resolve) => {
              setTimeout(() => {
                navigate(`/`); // Navigate to the verification page with the phone number
                resolve();
              }, 1000); // Delay for 3 seconds
            });
          }
        })
        .catch((error) => {
          notification.error({
            message: error.response?.data?.message,
            description: "",
          });
        });
      notification.success({
        message: "Đặt lịch thành công",
        description: "",
      });
      setTimeout(() => {
        if (user_id === "") {
          navigate(`/`);
        } else {
          navigate(`/mybooking`);
        }
      }, 1000);
    }
  };
  const totalCost = selectedServiceItems!.reduce(
    (total, item) => total + item.price,
    0
  );

  const [selectedTotal, setSelectedTotal] = useState(0);

  return (
    <div>
      <div
        className="text-center wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ textAlign: "center", marginTop: "80px" }}
      >
        <h6 className="text-primary text-uppercase">// Booking //</h6>
        <h1 className="mb-5" style={{ marginBottom: "5rem" }}>
          Đặt lịch
        </h1>
      </div>

      <div style={{ marginLeft: "50px", marginRight: "50px" }}>
        <form onSubmit={handleSubmit} style={{ marginTop: "80px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 style={{ marginBottom: "30px" }}>Thông tin khách hàng</h2>
                <label style={{ marginTop: "20px" }} htmlFor="">
                  Họ và tên *
                </label>

                {/* <input

  onChange={name === "" ? handleInputChange : undefined}
  name="full_name"
  type="text"
  className="form-control"
  placeholder="Nhập họ và tên"
  value={name}
  disabled={name !== ""}
/> */}

                {name === "" ? (
                  <input
                    onChange={handleInputChange}
                    name="full_name"
                    type="text" // Sửa type thành "text" thay vì "string"
                    className="form-control"
                    placeholder="Nhập họ và tên"
                  />
                ) : (
                  <input
                    onChange={handleInputChange}
                    name="full_name"
                    type="text" // Sửa type thành "text" thay vì "string"
                    className="form-control"
                    placeholder="Nhập họ và tên"
                    value={name}
                    // disabled
                  />
                )}

                {formErrors.full_name && (
                  <p style={{ color: "red" }}>{formErrors.full_name}</p>
                )}

                <label style={{ marginTop: "20px" }} htmlFor="">
                  Số điện thoại *
                </label>

                {phone === "" ? (
                  <input
                    onChange={handleInputChange}
                    name="phone"
                    type="text" // Sửa type thành "text" thay vì "string"
                    className="form-control"
                    placeholder="Tối thiểu 10 số"
                  />
                ) : (
                  <input
                    onChange={handleInputChange}
                    name="phone"
                    type="text" // Sửa type thành "text" thay vì "string"
                    className="form-control"
                    placeholder="Tối thiểu 10 số"
                    value={phone}
                    // disabled
                  />
                )}
                {formErrors.phone && (
                  <p style={{ color: "red" }}>{formErrors.phone}</p>
                )}
                <label>Email *</label>
                <input
                  onChange={handleInputChange}
                  name="email"
                  type="string"
                  className="form-control"
                  placeholder="vidu@gmail.com"
                  value={email === "" ? undefined : email}
                  // disabled={email !== ""}
                />

                {formErrors.email && (
                  <p style={{ color: "red" }}>{formErrors.email}</p>
                )}
                <b>
                  <label style={{ marginTop: "50px" }} htmlFor="">
                    Loại xe
                  </label>
                </b>
                <select
                  name="model_car"
                  onChange={handleInputChange}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Lựa chọn loại xe của bạn</option>
                  <option value="Sedan">Sedan</option>
                  <option value="HatchBack">HatchBack</option>
                  <option value="SUV">SUV</option>
                  <option value="Crossover">Crossover (CUV)</option>
                  <option value="MPV">MPV</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Convertible">Convertible</option>
                  <option value="Pickup"> Pickup</option>
                  <option value="Limousine">Limousine</option>
                </select>
                {formErrors.model_car && (
                  <p style={{ color: "red" }}>{formErrors.model_car}</p>
                )}
                <b>
                  <label style={{ marginTop: "50px" }} htmlFor="">
                    Ghi chú
                  </label>
                </b>
                <textarea
                  onChange={handleInputChange}
                  name="note"
                  className="form-control"
                  id="exampleTextarea"
                ></textarea>
                <b>
                  <p style={{ marginTop: "20px" }}>
                    Dịch vụ khác :
                    <input
                      type="checkbox"
                      checked={isCheckboxChecked}
                      onChange={(e) => handleCheckboxChange1(e)}
                      style={{
                        width: "20px",
                        height: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                        marginLeft: "10px",
                        paddingLeft: "10px",
                      }}
                    />
                    {isCheckboxChecked && (
                      <div>
                        {" "}
                        <table
                          style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            border: "1px solid #ddd",
                            marginTop: "20px",
                          }}
                        >
                          <thead>
                            <tr>
                              <th
                                style={{
                                  backgroundColor: "#f2f2f2",
                                  textAlign: "left",
                                  padding: "8px",
                                }}
                              >
                                Action
                              </th>
                              <th
                                style={{
                                  backgroundColor: "#f2f2f2",
                                  textAlign: "left",
                                  padding: "8px",
                                }}
                              >
                                Service
                              </th>
                              <th
                                style={{
                                  backgroundColor: "#f2f2f2",
                                  textAlign: "left",
                                  padding: "8px",
                                }}
                              >
                                Price
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {dataServiceItem
                              .filter((item: any) => item.id_service === null)
                              .slice(
                                (currentPage - 1) * itemsPerPage,
                                currentPage * itemsPerPage
                              )
                              .map((item: any, index: number) => (
                                <tr key={item.id}>
                                  <td style={{ borderRight: "1px solid #ddd" }}>
                                    <input
                                      type="checkbox"
                                      value={item.price}
                                      onChange={(e) =>
                                        handleCheckboxChange(e, item)
                                      }
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        border: "1px solid #ccc",
                                        borderRadius: "3px",
                                        cursor: "pointer",
                                        verticalAlign: "middle",
                                        marginLeft: "10px",
                                        paddingLeft: "10px",
                                      }}
                                    />
                                  </td>
                                  <td
                                    style={{
                                      borderRight: "1px solid #ddd",
                                      marginLeft: "10px",
                                      paddingLeft: "10px",
                                    }}
                                  >
                                    {item.item_name}
                                  </td>
                                  <td style={{ padding: "8px" }}>
                                    <b>
                                      {item.price.toLocaleString("vi-VN")} VND
                                    </b>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        <div
                          style={{
                            marginRight: "10px", // Adjust the margin as needed
                            padding: "5px 10px", // Adjust the padding as needed
                          }}
                        >
                          {" "}
                          <button
                            type="button"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            style={{
                              marginRight: "10px", // Adjust the margin as needed
                              padding: "5px 10px", // Adjust the padding as needed
                              backgroundColor:
                                currentPage === 1 ? "#ccc" : "#007bff",
                              color: "#fff",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                          >
                            Trước
                          </button>
                          <button
                            type="button"
                            onClick={handleNextPage}
                            disabled={
                              currentPage * itemsPerPage >=
                              dataServiceItem.filter(
                                (item: any) => item.id_service === null
                              ).length
                            }
                            style={{
                              padding: "5px 10px", // Adjust the padding as needed
                              backgroundColor:
                                currentPage * itemsPerPage >=
                                dataServiceItem.filter(
                                  (item: any) => item.id_service === null
                                ).length
                                  ? "#ccc"
                                  : "#007bff",
                              color: "#fff",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                          >
                            Tiếp theo
                          </button>
                        </div>
                      </div>
                    )}
                  </p>
                </b>
              </div>
              <div className="col-md-6">
                <h2 style={{}}>Dịch vụ và thời gian</h2>
                <label style={{ marginTop: "42px" }} htmlFor="">
                  Thời gian đến *
                </label>
                <div className="form-row">
                  <div className="col">
                    <input
                      onChange={handleInputChange}
                      name="target_date"
                      type="date"
                      lang="vi"
                      min={new Date().toISOString().slice(0, 10)}
                      className="form-control"
                      placeholder="Ngày và Thời gian Đến"
                    />
                  </div>

                  <div className="col">
                    <select
                      onChange={handleInputChange}
                      name="target_time"
                      className="form-control"
                      placeholder="Ngày và Thời gian Đến"
                    >
                      <option value="" disabled selected>
                        Giờ đến dự kiến
                      </option>
                      {DataTime.map((timeObj: any) => {
                        const formattedHourNumeric = parseInt(
                          timeObj.formattedHour.split(":")[0],
                          10
                        );

                        // Determine if the option should be disabled
                        let isDisabled = false;

                        if (day) {
                          isDisabled =
                            fullHours.includes(
                              timeObj.formattedHour as never
                            ) || formattedHourNumeric <= currentHour;
                        } else {
                          isDisabled = fullHours.includes(
                            timeObj.formattedHour as never
                          );
                        }

                        return (
                          <option
                            key={timeObj.hour}
                            value={timeObj.formattedHour}
                            disabled={isDisabled}
                          >
                            {timeObj.hour}{" "}
                            {fullHours.includes(timeObj.formattedHour as never)
                              ? "(Full)"
                              : ""}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <br />
                </div>
                {formErrors.target_date && (
                  <span style={{ color: "red", marginRight: "100px" }}>
                    {formErrors.target_date}
                  </span>
                )}
                {formErrors.target_time && (
                  <span style={{ color: "red" }}>{formErrors.target_time}</span>
                )}
                <div style={{ marginTop: "20px" }} className="form-group">
                  <label htmlFor="">Số KM của xe</label>
                  <input
                    onChange={handleInputChange}
                    name="mileage"
                    type="text"
                    className="form-control"
                    placeholder="Nhập số Km của bạn"
                    min={0}
                  />
                </div>
                <div></div>

                {formErrors.mileage && (
                  <p style={{ color: "red" }}>{formErrors.mileage}</p>
                )}
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Cấp Bảo dưỡng</th>
                      <th
                        style={{ ...styles.th, textAlign: "center" }}
                        colSpan={4}
                      >
                        Số km theo mỗi cấp bảo dưỡng{" "}
                      </th>
                      {/* Add more <th> elements if you have more columns */}
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(maintenanceIntervals).map(
                      ([level, distances]) => (
                        <tr key={level}>
                          <td style={styles.td}>{level}</td>
                          {distances.map((distance, index) => (
                            <td key={index} style={styles.td}>
                              {distance.toLocaleString()} km
                            </td>
                          ))}
                          <td style={styles.td}>...</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
                <div className="form-group">
                  <label htmlFor="">Gói Bảo dưỡng</label>
                  <select
                    onChange={handleInputChange}
                    name="service"
                    className="form-control"
                    id="service"
                    value={formData.service}
                  >
                    <option value="" disabled>
                      Vui lòng chọn gói bảo dưỡng
                    </option>
                    {dataService.map((item: any) => (
                      <option key={item.id} value={item.id}>
                        <label> {item.service_name}</label>
                      </option>
                    ))}
                  </select>
                  <p
                    style={{
                      paddingLeft: "10px",
                      paddingTop: "20px",
                      color: "blue",
                    }}
                  >
                    {kmMessage}
                  </p>

                  <b>
                    <p style={{ marginTop: "20px" }}>
                      Gói bảo dưỡng hiện tại gồm:
                    </p>
                  </b>
                  {selectedServiceItems!.length > 0 ? (
                    <>
                      {" "}
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          border: "1px solid #ddd",
                          marginTop: "20px",
                        }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                backgroundColor: "#f2f2f2",
                                textAlign: "left",
                                padding: "8px",
                              }}
                            >
                              Action
                            </th>
                            <th
                              style={{
                                backgroundColor: "#f2f2f2",
                                textAlign: "left",
                                padding: "8px",
                              }}
                            >
                              Service
                            </th>
                            <th
                              style={{
                                backgroundColor: "#f2f2f2",
                                textAlign: "left",
                                padding: "8px",
                              }}
                            >
                              Price
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedServiceItems!
                            .slice(
                              (currentPage1 - 1) * itemsPerPage1,
                              currentPage1 * itemsPerPage1
                            )
                            .map((item, index) => (
                              <tr key={item.item_name}>
                                <td style={{ borderRight: "1px solid #ddd" }}>
                                  <input
                                    type="checkbox"
                                    value={item.item_name}
                                    disabled
                                    defaultChecked
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      border: "1px solid #ccc",
                                      borderRadius: "3px",
                                      cursor: "pointer",
                                      verticalAlign: "middle",
                                      // margin: '0 10px 0 0',
                                      marginLeft: "10px",
                                      paddingLeft: "10px",
                                    }}
                                  />
                                </td>
                                <td
                                  style={{
                                    borderRight: "1px solid #ddd",
                                    marginLeft: "10px",
                                    paddingLeft: "10px",
                                  }}
                                >
                                  <b>{item.item_name}</b>
                                </td>
                                <td style={{ padding: "8px" }}>
                                  <b>
                                    {item.price.toLocaleString("vi-VN")} VND
                                  </b>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                      <div
                        style={{
                          marginRight: "10px",
                          padding: "5px 10px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={handlePrevPage1}
                          disabled={currentPage1 === 1}
                          style={{
                            marginRight: "10px",
                            padding: "5px 10px",
                            backgroundColor:
                              currentPage1 === 1 ? "#ccc" : "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Trước
                        </button>
                        <button
                          type="button"
                          onClick={handleNextPage1}
                          disabled={
                            currentPage1 * itemsPerPage1 >=
                            selectedServiceItems!.filter(
                              (item: any) => item.id_service != null
                            ).length
                          }
                          style={{
                            padding: "5px 10px",
                            backgroundColor:
                              currentPage1 * itemsPerPage1 >=
                              selectedServiceItems!.filter(
                                (item: any) => item.id_service != null
                              ).length
                                ? "#ccc"
                                : "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Tiếp theo
                        </button>
                      </div>
                    </>
                  ) : (
                    <p>Chưa có thông tin chi tiết cho gói dịch vụ này.</p>
                  )}

                  <b>
                    <br></br>
                    <label style={{ marginTop: "10px" }} htmlFor="">
                      Tổng giá tiền:
                    </label>{" "}
                  </b>
                  <span style={{ color: "red" }}>
                    {(totalCost + selectedTotal).toLocaleString("vn-VN")} VND
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <button
                style={{ width: "500px" }}
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={!selectedService}
              >
                Đặt lịch
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
