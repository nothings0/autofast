import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../interface/user";
import { useState } from "react";
import { Alert, Space } from "antd";
import { notification } from "antd";
import instance from "../../../api/instance";
import imageM from "../../../assets/img/signup.png";

const SignupPage = (props: any) => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleButtonClick = () => {
    setIsButtonDisabled(true);

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 120000);
  };

  const [tt, setTt] = useState(String);
  const addUsers = (users: IUser) => {
    return instance.post("/register", users).then((response) => {
      console.log(response.data);
      return response.data;
    });
  };
  type FieldType = {
    name?: string;
    password?: string;
    role_id?: string;
    email?: string;
    remember?: string;
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
    addUsers(values)
      .then((response) => {
        if (response.success === true) {
          openNotification(
            response.message,
            "black",
            "green",
            "Đăng Ký Thành Công"
          );
          handleButtonClick(); // Call the function to disable the button
          setTt("Success");

          const phoneNumber = values.phone;

          return new Promise<void>((resolve) => {
            setTimeout(() => {
              navigate(`/verify/${phoneNumber}`);
              resolve();
            }, 3000);
          });
        } else if (response?.success === false) {
          openNotification(
            response.message,
            "white",
            "red",
            "Đăng Ký Thất Bại"
          );
          // handleButtonClick();
        }
      })
      .catch((error) => {
        console.error(error.response?.data?.message);
        if (
          error.response?.data?.message ===
          "[HTTP 401] Unable to create record: Authenticate"
        ) {
          openNotification(
            "Đăng Ký Thành Công",
            "black",
            "green",
            "Đăng Ký Thành Công"
          );
          handleButtonClick();

          return new Promise<void>((resolve) => {
            const phoneNumber = values.phone;
            setTimeout(() => {
              navigate(`/verify/${phoneNumber}`);
              resolve();
            }, 3000);
          });
        }
        throw error;
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
                      Đăng ký
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
                        <Form.Item<FieldType>
                          label=""
                          name="role_id"
                          rules={[
                            {
                              required: true,
                              message: "",
                            },
                          ]}
                          initialValue="3"
                          style={{ display: "none" }}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                          label="Họ Và Tên"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng không bỏ trống tên",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
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
                          label="Email"
                          name="email"
                          rules={[
                            {
                              required: true,
                              pattern:
                                /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                              message: "Email không hợp lệ",
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
                            {
                              min: 6,
                              message: "Mật khẩu phải có ít nhất 6 ký tự",
                            },
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>
                        <Form.Item
                          label="Nhập lại mật khẩu"
                          name="password2"
                          dependencies={["password"]}
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập lại mật khẩu",
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("password") === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  new Error("Mật khẩu không khớp")
                                );
                              },
                            }),
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button
                            type="primary"
                            htmlType="submit"
                            disabled={isButtonDisabled}
                          >
                            Đăng ký
                          </Button>
                        </Form.Item>
                      </Form>
                      <span style={{ paddingLeft: "100px" }}>
                        Bạn đã có tài khoản?{" "}
                        <Link style={{ textDecoration: "none" }} to="/signin">
                          Đăng nhập
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
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

export default SignupPage;
