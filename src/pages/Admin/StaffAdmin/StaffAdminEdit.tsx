import React, { useEffect, useState } from "react";
// import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import { IStaff } from "../../../interface/staff";

interface IProps {
  staffs: IStaff[];
  onUpdateStaff: (staff: IStaff) => void;
}

const StaffAdminEdit = (props: IProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [staff, setStaff] = useState<IStaff>();

  useEffect(() => {
    const currentStaff = props.staffs.find(
      (staff: IStaff) => staff.id == Number(id)
    );
    setStaff(currentStaff);
  }, [props]);
  useEffect(() => {
    setFields();
  }, [staff]);
  const [form] = Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      id: staff?.id,
      name: staff?.name,
      desc: staff?.description,
      image: staff?.avatar,
      role: staff?.role,
      phone: staff?.phone,
    });
  };
  const onFinish = (values: any) => {
    props.onUpdateStaff(values);
    navigate("/admin/staffs");
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 1000, margin: "0 auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label=""
          name="id"
          style={{ display: "none" }}
          rules={[{ required: true, message: "" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Name"
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
          label="Image"
          name="image"
          rules={[{ required: false, message: "" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[
            { required: true, message: "Vui lòng nhập vị trí của nhân viên!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="desc"
          rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StaffAdminEdit;
