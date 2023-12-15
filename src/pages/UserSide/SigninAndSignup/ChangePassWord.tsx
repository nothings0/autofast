// import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import instance from "../../../api/instance";
import { useState } from "react";
import imageM from "../../../assets/img/signup.png";
// import { IUser } from "../../../interface/user";
type FieldType = {
  password?: string;
  password2?: string;
};
type TData = {
  phone: string;
  verification_code: string;
  new_password: string; // Make sure to use the correct field name here
};
const ChangePassWord = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const logIn = (users: TData) => {
    return instance
      .post("/reset-password", users)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // Handle any errors here if needed
        console.error(error);
        throw error; // Rethrow the error for further handling in your component
      });
  };

  const phone = sessionStorage.getItem("phone");
  const verificationCode = sessionStorage.getItem("verificationCode");
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
    if (!phone || !verificationCode) {
      console.error("Phone or verificationCode not found in sessionStorage");
      return;
    }

    const data = {
      phone: phone,
      verification_code: verificationCode,
      new_password: values.password, // Make sure to use the correct field name here
    };

    console.log(data);

    logIn(data)
      .then((response) => {
        openNotification(
          response.message,
          "black",
          "green",
          "Đăng Ký Thành Công"
        );
        return new Promise<void>((resolve) => {
          setTimeout(() => {
            navigate(`/signin`);
            resolve();
          }, 3000);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // ... rest of the code ...
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    console.log(phone);
    console.log(verificationCode);
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
                    <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-2 mt-4">
                      {" "}
                      Đổi mật khẩu<ul></ul>
                    </p>

                    <div>
                      <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 20 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
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
                          label="Nhập lại"
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
                          <Button type="primary" htmlType="submit">
                            Xác Nhận
                          </Button>
                        </Form.Item>
                      </Form>
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

export default ChangePassWord;
