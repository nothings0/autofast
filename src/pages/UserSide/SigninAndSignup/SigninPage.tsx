import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import instance from "../../../api/instance";
import { useState } from "react";
import imageM from "../../../assets/img/signup.png";
import { IUser } from "../../../interface/user";

const SigninPage = (props: any) => {
  type FieldType = {
    email?: string;
    password?: string;
    role?: string;
    remember?: string;
  };
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleButtonClick = () => {
    setIsButtonDisabled(true);

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 120000);
  };
  const logIn = (users: IUser) => {
    return instance
      .post("/login", users)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // Handle any errors here if needed
        console.error("Error:", error);
        throw error; // Rethrow the error for further handling in your component
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
    console.log(values);

    logIn(values)
      .then((response) => {
        console.log(response);

        if (response.success === true) {
          openNotification(
            response.message,
            "black",
            "green",
            "Đăng Nhập Thành Công"
          );
          handleButtonClick();

          if (response.success === true) {
            // Use a nested .then block to navigate after handling the success case
            sessionStorage.setItem("user", JSON.stringify(response.user));
            handleButtonClick();
            return new Promise<void>((resolve) => {
              setTimeout(() => {
                navigate(`/`); // Navigate to the verification page with the phone number
                resolve();
              }, 3000); // Delay for 3 seconds
            });
          } else if (response.success === false) {
            openNotification(
              response.message,
              "white",
              "red",
              "Đăng Nhập Thất Bại"
            );
          }
        } else if (response.success === false) {
          openNotification(
            response.message,
            "white",
            "red",
            "Đăng Nhập Thất Bại"
          );
        } else if (response.phone_verified) {
          openNotification(
            response.message,
            "white",
            "red",
            "Vui lòng xác thực tài khoản"
          );
          return new Promise<void>((resolve) => {
            setTimeout(() => {
              navigate(`/verify/${response.phone_verified}`); // Navigate to the verification page with the phone number
              resolve();
            }, 3000); // Delay for 3 seconds
          });
        }
      })
      .catch((error) => {
        // Handle any errors here if needed
        console.error("Error:", error);

        // Rethrow the error for further handling in your component
        throw error;
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="container h-100; vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {contextHolder}
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      {" "}
                      Đăng nhập
                    </p>

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
                          label="Phone"
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập số điện thoại",
                            },
                            {
                              pattern: /^[0-9]{10}$/, // Regular expression to validate a 10-digit phone number
                              message: "Số điện thoại không hợp lệ",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                          label="Mật khẩu"
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập mật khẩu",
                            },
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>
                        <Link style={{ textDecoration: "none" }} to="/forgotpw">
                          Quên mật khẩu ?
                        </Link>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button
                            type="primary"
                            htmlType="submit"
                            disabled={isButtonDisabled}
                          >
                            Đăng nhập
                          </Button>
                        </Form.Item>
                      </Form>

                      <span style={{ paddingLeft: "100px" }}>
                        Bạn chưa có tài khoản?{" "}
                        <Link style={{ textDecoration: "none" }} to="/signup">
                          Đăng ký
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <img
                      src={imageM}
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

export default SigninPage;
