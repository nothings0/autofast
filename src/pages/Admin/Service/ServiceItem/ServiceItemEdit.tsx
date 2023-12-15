import React from "react";
import { IService, ISeviceItem } from "../../../../interface/service";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
type Props = {
  service: IService[];
  serviceItem: ISeviceItem[];
  onUpdateServiceItem: (service: ISeviceItem) => void;
};
interface DataType {
  key: string | number;
  id: number;
  name: string;
  desc: string;
  image: string;
  role: string;
  phone: number;
}

const ServiceItemEdit = (props: Props) => {
  console.log(props);

  const { id } = useParams();
  const navigate = useNavigate();
  const [serviceitem, setServiceItem] = useState<ISeviceItem | undefined>();

  useEffect(() => {
    const currentService = props.serviceItem.find(
      (se: ISeviceItem) => se.id === Number(id)
    );
    setServiceItem(currentService);
  }, [props, id]);

  useEffect(() => {
    setFieldsServiceItem();
  }, [serviceitem]);

  const [form] = Form.useForm();
  const setFieldsServiceItem = () => {
    if (serviceitem) {
      form.setFieldsValue({
        id: serviceitem.id,
        service_name: serviceitem.service_name,
        item_name: serviceitem.item_name,
        price: serviceitem.price,
        time_done: serviceitem.time_done,
      });
    }
  };

  const onFinish = (values: ISeviceItem) => {
    props.onUpdateServiceItem(values);
    navigate("/admin/serviceitem");
    console.log(values);
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
          label="Họ tên"
          name="item_name"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Service_id"
          name="service_name"
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
          label="Price"
          name="price"
          rules={[{ required: false, message: "" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ServiceItemEdit;
