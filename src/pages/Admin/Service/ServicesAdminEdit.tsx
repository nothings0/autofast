import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { IService } from "../../../interface/service";

interface IProps {
  service: IService[];
  onHandleUpdateService: (service: IService) => void;
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
interface DataType {
  key: string | number;
  id: number;
  name: string;
  desc: string;
  image: string;
  role: string;
  phone: number;
}
const ServicesAdminEdit = (props: any) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<IService>();

  useEffect(() => {
    const currentService =
      props.service &&
      props.service.find((service: IService) => service.id == Number(id));
    setService(currentService);
  }, [props]);
  useEffect(() => {
    setFields();
  }, [service]);
  const [form] = Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      id: service?.id,
      service_name: service?.service_name,
      image_service: service?.image_service,
      content: service?.content,
    });
  };
  const onFinish = (values: any) => {
    props.onHandleUpdateService(values);
    navigate("/admin/service");
  };

  console.log(service);
  console.log(props.service);

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
            Edit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ServicesAdminEdit;
