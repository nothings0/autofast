import React, { useEffect, useState } from "react";
import { Space, Table, Popconfirm, Button } from "antd";
import { Link } from "react-router-dom";
import { IService } from "../../../interface/service";
import { ColumnsType } from "antd/es/table"; // Add this import for ColumnsType

interface DataType {
  key: number | string;
  id: number;
  service_name: string;
  image_service: string;
  content?: string;
}

interface IProps {
  service: IService[];
  onRemoveService: (id: number) => void;
}

const ServicesAdmin = (props: IProps) => {
  console.log(props.service);

  const removeService = (id: number) => {
    props.onRemoveService(id);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Service Name",
      dataIndex: "service_name",
      key: "service_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Service Image",
      dataIndex: "image_service",
      key: "image_service",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            title="Xóa tài khoản"
            description="Bạn có chắc muốn xóa tài khoản này?"
            onConfirm={() => {
              removeService(record.id);
            }}
            okText="Có"
            okButtonProps={{
              style: { background: "orange", color: "white" },
            }}
            cancelText="Không"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Link to={`/admin/service/${record.id}/edit`}>
            <Button type="primary">Edit</Button>
          </Link>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.service
    ? props.service.map((item: IService) => {
        return {
          key: item.id,
          ...item,
        };
      })
    : [];

  return (
    <div>
      <Link style={{ marginLeft: "20px" }} to={`/admin/service/add`}>
        <Button type="primary">Thêm mới Service</Button>
      </Link>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ServicesAdmin;
