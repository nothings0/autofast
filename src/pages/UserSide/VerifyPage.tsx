import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { IUser } from "../../../interface/user";
import { useState } from "react";
import { Alert, Space } from "antd";
import { notification } from "antd";
import instance from "../../api/instance";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const VerifyPage = () => {
  // Use the useParams hook to get the `sdt` parameter from the URL
  const { phone } = useParams();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [showNotification, setShowNotification] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const startCountdown = () => {
    // Start the countdown for 3 minutes (180 seconds)
    const initialCountdown = 180;

    // Store the countdown start time and value in localStorage
    const countdownStartTime = new Date().getTime();
    localStorage.setItem("countdownStartTime", countdownStartTime.toString());
    localStorage.setItem("countdownValue", countdown.toString());

    setCountdown(initialCountdown);
    setButtonDisabled(true);

    // Start the countdown timer
    const countdownInterval = setInterval(() => {
      const elapsedTime = new Date().getTime() - countdownStartTime;
      const remainingTime = initialCountdown - Math.floor(elapsedTime / 1000);

      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        setButtonDisabled(false);
        localStorage.removeItem("countdownStartTime");
        localStorage.removeItem("countdownValue");
      } else {
        setCountdown(remainingTime);
      }
    }, 1000);
  };

  useEffect(() => {
    // Kiểm tra xem có dữ liệu đếm ngược trong localStorage
    const storedCountdown = localStorage.getItem("countdown");
    if (storedCountdown) {
      setCountdown(parseInt(storedCountdown, 10)); // Chuyển đổi thành số nguyên
      setButtonDisabled(true); // Và tắt nút
    }
  }, []);

  const resumeCountdown = () => {
    // Retrieve countdown start time and value from localStorage
    const countdownStartTime = parseInt(
      localStorage.getItem("countdownStartTime")!
    );
    const initialCountdown = parseInt(localStorage.getItem("countdownValue")!);

    if (!isNaN(countdownStartTime) && !isNaN(initialCountdown)) {
      // Calculate the remaining time
      const elapsedTime = new Date().getTime() - countdownStartTime;
      let remainingTime = initialCountdown - Math.floor(elapsedTime / 1000);

      if (remainingTime > 0) {
        setCountdown(remainingTime);
        setButtonDisabled(true);

        // Start the countdown timer
        const countdownInterval = setInterval(() => {
          if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            setButtonDisabled(false);
            localStorage.removeItem("countdownStartTime");
            localStorage.removeItem("countdownValue");
          } else {
            setCountdown(remainingTime);
            remainingTime--;
          }
        }, 1000);
      }
    }
  };
  // resumeCountdown()

  const resend = (phone: any) => {
    console.log(phone);

    startCountdown();

    const data = {
      phone: phone,
    };

    // Simulate sending the verification code (you can replace this with your actual API call)
    instance
      .post("register/resend-verification-code", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const verify = (values: any) => {
    return instance
      .post("register/verify-code", values)
      .then((response) => {
        if (response.data.message === "Xác minh mã thành công") {
          openNotification(
            response.data.message,
            "black",
            "green",
            "Xác Minh Thành Công"
          );

          // Use a nested .then block to navigate after handling the success case
          return new Promise<void>((resolve) => {
            setTimeout(() => {
              navigate("/signin"); // Navigate to the verification page with the phone number
              resolve();
            }, 3000); // Delay for 3 seconds
          });
        } else if (response?.data?.message == "Mã xác minh không đúng") {
          console.log(response);
          return openNotification(
            response?.data?.message,
            "white",
            "red",
            "Xác Minh Thất Bại"
          );
        }
        console.log(response.data.message);
      })
      .catch((error) => {
        // Handle errors
        console.error(":", error);
        return openNotification(error.data?.message, "white", "red", "Failed");
        throw error;
      });
  };
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
  const onFinish = (values: any) => {
    verify(values)
      .then((response) => {
        // if (response?.data?.message == "Xác minh mã thành công") {
        //   console.log(response?.data?.message)
        //   openNotification(response?.data?.message, "black", "green", "Success");
        // } else if(response?.data?.message == "Mã xác minh không đúng"){
        //   console.log(response)
        //   return openNotification(response?.data?.message, "white", "red", "Failed");
        // }
        return response;
      })
      .then(() => {
        console.log(phone, values);
      })
      .catch((error) => {
        // Handle any errors here if needed
        console.error("Error:", error);
        throw error; // Rethrow the error for further handling in your component
      });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="container  h-100; vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {contextHolder}
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Nhập mã xác thực
                    </p>
                    <p> Mã xác thực của bạn đã được gửi về số +84 {phone}</p>
                    <div>
                      <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Form.Item
                          label="Code"
                          name="code"
                          rules={[
                            {
                              required: true,
                              message:
                                "Vui lòng nhập mã số được gửi vào  điện thoại bạn ",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="phone"
                          initialValue={phone} // Set the initial value to {sdt}
                        ></Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginRight: "10px" }}
                          >
                            Xác thực
                          </Button>
                          <Button
                            type="primary"
                            style={{ backgroundColor: "blue", color: "white" }}
                            onClick={() => resend(phone)}
                            disabled={isButtonDisabled}
                          >
                            Gửi lại mã{" "}
                            {countdown > 0 && (
                              <span>(sau {countdown} giây)</span>
                            )}
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
