import React from "react";
import { IService } from "../../../interface/service";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

interface IProps {
  onAddService: (service: IService) => void;
}
interface DataType {
  key: string | number;
  id: number;
  name: string;
  desc: string;
  image: string;
  role: string;
  phone: number;
}

const ServicesAdminAdd = (props: IProps) => {
  const navigate = useNavigate();
  console.log(props);
  const onFinish = (values: any) => {
    props.onAddService(values);
    alert("Success");
    navigate("/admin/service");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 1000, margin: "0 auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Service Name"
          name="service_name"
          rules={[{ required: true, message: "Vui lòng nhập tên dịch vụ" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Service Image" name="image_service">
          <Input />
        </Form.Item>
        <Form.Item label="Content" name="content">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add New Service
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ServicesAdminAdd;
