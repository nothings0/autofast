import React, { useEffect, useState } from "react";

import { Space, Table, Tag, Popconfirm, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { IStaff } from "../../../interface/staff";

interface IProps {
  staffs: IStaff[];
  onRemoveStaff: (id: number) => void;
}

const StaffAdmin = (props: IProps) => {
  const removeStaff = (id: number) => {
    props.onRemoveStaff(id);
  };

  const columns: ColumnsType<IStaff> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (number) => <a>{number}</a>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            title="Xóa nhân viên"
            description="Bạn có chắc muốn xóa nhân viên này?"
            onConfirm={() => {
              removeStaff(record.id);
            }}
            okText="Có"
            okButtonProps={{
              style: { background: "orange", color: "white" },
            }}
            cancelText="Không"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Link to={`/admin/staffs/${record.id}/edit`}>
            <Button type="primary">Edit</Button>
          </Link>
        </Space>
      ),
    },
  ];

  const data: IStaff[] = props.staffs.map((item: IStaff) => {
    return {
      key: item.id,
      ...item,
    };
  });

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default StaffAdmin;
