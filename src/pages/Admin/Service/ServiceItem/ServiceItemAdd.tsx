import React, { useState, useEffect } from "react";
import { IService, ISeviceItem } from "../../../../interface/service";
import { useNavigate, useParams } from "react-router";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
type Props = {
  service: IService[];
  onAddServiceItem: (service: ISeviceItem) => void;
};

// interface DataType {
//   key: string | number;
//   id: number;
//   name: string;
//   desc: string;
//   image: string;
//   role: string ;
//   phone: number;
// }

const ServiceItemAdd = (props: Props) => {
  const { service, onAddServiceItem } = props;
  console.log(service, "=> service");

  const navigate = useNavigate();
  const onFinish = (values: any) => {
    props.onAddServiceItem(values);
    alert("Success");
    navigate("/admin/serviceitem");
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
          label="Họ tên"
          name="item_name"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Thời gian hoàn thành"
          name="time_done"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Service_id"
          name="service_name"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Select>
            {service.map((item: any) => (
              <Option value={item.service_name} label={item.service_name}>
                Service name
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: false, message: "" }]}
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

export default ServiceItemAdd;
