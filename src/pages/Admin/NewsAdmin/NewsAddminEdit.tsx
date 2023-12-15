import { INews } from "../../../interface/news";
import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";

interface IProps {
  news: INews[];
  onUpdateNews: (staff: INews) => void;
}
// interface DataType {
//   key: string | number;
//   id: number;
//   name: string;
//   desc: string;
//   image: string;
//   role: string ;
//   phone: number;
// }

const NewsAddminEdit = (props: IProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState<INews>();
  const [form] = Form.useForm();

  useEffect(() => {
    const currentNews = props.news.find(
      (staff: INews) => staff.id == Number(id)
    );
    setNews(currentNews);
  }, [props]);
  useEffect(() => {
    setFields();
  }, [news]);

  const setFields = () => {
    form.setFieldsValue({
      id: news?.id,
      title: news?.title,
      desc: news?.desc,
      image: news?.image,
      type: news?.type,
      content: news?.content,
      date: news?.date,
    });
  };

  const onFinish = (values: any) => {
    props.onUpdateNews(values);
    navigate("/admin/news");
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
          label="Title"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="desc"
          rules={[{ required: false, message: "" }]}
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
          label="Type"
          name="type"
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
        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
        >
          <Input readOnly />
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

export default NewsAddminEdit;
