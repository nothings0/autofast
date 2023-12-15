import React from "react";
import { ISeviceItem } from "../../../../interface/service";
import { ColumnsType } from "antd/es/table";
import { Button, Popconfirm, Space } from "antd";
import { Link } from "react-router-dom";
import { Table } from "antd";

type Props = {
  servicesItem: ISeviceItem[];
  onRemoveServiceItem: (id: any) => void;
};
interface DataType {
  key: string | number;
  id: number;
  id_service: number;
  item_name: string;
  time_done: string;
  price: number;
}

const ServiceItemAdmin = (props: Props) => {
  console.log(props);
  const removeServiceItem = (id: any) => {
    props.onRemoveServiceItem(id);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Tên",
      dataIndex: "item_name",
      key: "item_name",
      render: (string) => <a>{string}</a>,
    },
    {
      title: "Service_Id",
      dataIndex: "service_name",
      key: "service_id",
      render: (number) => <a>{number}</a>,
    },
    {
      title: "Time Done",
      dataIndex: "time_done",
      key: "time_done",
      render: (number) => <a>{number}</a>,
    },

    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
      render: (number) => <a>{number}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            title="Xóa lịch"
            description="Bạn có chắc muốn xóa lịch này?"
            onConfirm={() => {
              removeServiceItem(record.id);
            }}
            okText="Có"
            okButtonProps={{
              style: { background: "orange", color: "white" },
            }}
            cancelText="Không"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Link to={`/admin/serviceitem/${record.id}/edit`}>
            <Button type="primary">Sửa</Button>
          </Link>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.servicesItem.map((item: ISeviceItem) => {
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

export default ServiceItemAdmin;
