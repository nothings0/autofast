import React from "react";
import { INews } from "../../../interface/news";
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
import { useState, useEffect } from "react";

interface IProps {
  onAddNews: (news: INews) => void;
}

const NewsAdminAdd = (props: IProps) => {
  const [currentDate, setCurrentDate] = useState<string>("");
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    const newsData: INews = {
      ...values,
      date: currentDate,
    };
    props.onAddNews(newsData);
    alert("Success");
    navigate("/admin/news");
  };
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);
  };
  useEffect(() => {
    getCurrentDate();
  }, []);

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
          label="Title"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập tiêu đề !" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="desc"
          label="Description"
          rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: false, message: "" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Vui lòng nhập nội dung !" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add News
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewsAdminAdd;
