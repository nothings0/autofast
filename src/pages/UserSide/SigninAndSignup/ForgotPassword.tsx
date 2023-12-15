import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import instance from "../../../api/instance";
import { useState } from "react";
import imageM from "../../../assets/img/signup.png";
type TData = {
  phone: string;
  verification_code: string;
  new_password: string; // Make sure to use the correct field name here
};
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const logIn = (users: TData) => {
    return instance
      .post("/send-verification-code", users)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // Handle any errors here if needed
        console.error(error);
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
    logIn(values)
      .then((response) => {
        if (response.success == true) {
          openNotification(
            response.message,
            "black",
            "green",
            "Gửi mã thành công"
          );
          console.log(response);

          // Use a nested .then block to navigate after handling the success case

          return new Promise<void>((resolve) => {
            setTimeout(() => {
              navigate(`/verifyforget/${values.phone}`); // Navigate to the verification page with the phone number
              resolve();
            }, 1000); // Delay for 3 seconds
          });
        } else if (response.success === false) {
          // return openNotification(response.message, "white", "red", "Gửi mã thất bại");
          console.log(response);
        }
      })
      .catch((error) => {
        // Handle any errors here if needed
        console.error("Error:", error);
        openNotification(
          error.response.data.message,
          "white",
          "red",
          "Gửi mã thất bại"
        );

        throw error; // Rethrow the error for further handling in your component
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
                    <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-2 mt-4">
                      {" "}
                      Điền số điện thoại
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
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button type="primary" htmlType="submit">
                            Gửi mã
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

export default ForgotPassword;
