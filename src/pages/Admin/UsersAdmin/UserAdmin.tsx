import React, { useEffect, useState } from "react";

import { Space, Table, Tag, Popconfirm, message,   } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import { IUser } from "../../../interface/user";

interface DataType {
  key: string | number;
  id: number,
    name: string,
    username: string,
    password: string,
    role: string ,
    img: string,
}

interface IProps {
  users: IUser[],
  onRemoveUsers: (id: number) => void
}

const UserAdmin = (props: IProps) => {
  const removeUsers = (id: number) => {
    props.onRemoveUsers(id)
}
const columns: ColumnsType<DataType> = [
  {
    title: 'Họ tên',
    dataIndex: 'name',
    key: 'name',
    render: (number) => <a>{number}</a>,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    render: ( record) => (
      <Space size="middle">
        <Popconfirm
  title="Xóa tài khoản"
  description="Bạn có chắc muốn xóa tài khoản này?"
  onConfirm={() => {
    removeUsers(record.id)
  }}
  okText="Có"
  okButtonProps={{
    style: {background: "orange", color: "white"},
  }}
  cancelText="Không"
>
  <Button danger>Delete</Button>
</Popconfirm>
        <Link to={`/admin/users/${record.id}/edit`}><Button type="primary">Edit</Button></Link>
        
      </Space>
    ),
  },
];

const data: DataType[] = props.users.map((item: IUser) => {
  return {
      key: item.id,
      ...item
  }
})
  return (
    <div> <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} /></div>
  )
}

export default UserAdmin