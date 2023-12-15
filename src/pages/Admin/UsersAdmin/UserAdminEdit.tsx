import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import { IUser } from "../../../interface/user";

interface IProps {
  users: IUser[];
  onUpdateUsers: (user: IUser) => void;
}

const UserAdminEdit = (props: any) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser>();

  useEffect(() => {
    const currentUser = props.users.find(
      (user: IUser) => user.id == Number(id)
    );
    setUsers(currentUser);
  }, [props]);
  useEffect(() => {
    setFields();
  }, [users]);
  const [form] = Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      id: users?.id,
      name: users?.name,
      username: users?.username,
      email: users?.email,
      password: users?.password,
    });
  };

  const onFinish = (values: any) => {
    props.onUpdateUsers(values);
    navigate("/admin/users");
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
          rules={[{ message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tên tài khoản"
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên tài khoản" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Vui lòng không bỏ trống email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label=""
          name="role"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          initialValue="admin"
          style={{ display: "none" }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Chỉnh sửa
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserAdminEdit;
