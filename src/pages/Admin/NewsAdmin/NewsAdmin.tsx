import React, { useEffect, useState } from "react";

import { Space, Table, Tag, Popconfirm, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { INews } from "../../../interface/news";

interface DataType {
  key: string | number;
  id: number;
  title: string;
  desc: string;
  image: string;
  content: string;
  type: string;
}

interface IProps {
  news: INews[];
  onRemoveNews: (id: number) => void;
}

const NewsAdmin = (props: IProps) => {
  const removeNews = (id: number) => {
    props.onRemoveNews(id);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Title ",
      dataIndex: "title",
      key: "title",
      render: (number) => <a>{number}</a>,
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "Image",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "Content",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "Type",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "Date",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            title="Xóa tin tức "
            description="Bạn có chắc muốn xóa bài viết này?"
            onConfirm={() => {
              removeNews(record.id);
            }}
            okText="Có"
            okButtonProps={{
              style: { background: "orange", color: "white" },
            }}
            cancelText="Không"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Link to={`/admin/news/${record.id}/edit`}>
            <Button type="primary">Edit</Button>
          </Link>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.news.map((item: INews) => {
    return {
      key: item.id,
      ...item,
    };
  });
  console.log(data)

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default NewsAdmin;
  