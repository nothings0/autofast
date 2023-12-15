import React from "react";
import { IStaff } from "../../../interface/staff";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Slider,
  InputNumber,
} from "antd";
import { useNavigate } from "react-router-dom";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
// import { useForm, SubmitHandler } from "react-hook-form";

interface IProps {
  onAddStaff: (staff: IStaff) => void;
}

const StaffAdminAdd = (props: IProps) => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    props.onAddStaff(values);
    alert("Success");
    navigate("/admin/staffs");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

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
          label="Họ tên"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ảnh"
          name="image"
          rules={[{ required: false, message: "" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Vị trí"
          name="role"
          rules={[
            { required: true, message: "Vui lòng nhập vị trí của nhân viên!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="desc"
          rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add New Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StaffAdminAdd;
