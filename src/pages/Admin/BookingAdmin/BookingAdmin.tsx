import { useState } from "react";

import { Space, Table, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button, Modal } from "antd";

import { IBooking } from "../../../interface/booking";

interface IProps {
  booking: IBooking[];
  onCancelBooking: (booking: IBooking) => void;
  onUpdateBooking: (booking: IBooking) => void;
}

const BookingAdmin = (props: IProps) => {
  // State để theo dõi trạng thái của Modal và dữ liệu hiển thị
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<IBooking | null>(null);

  const showModal = (serviceData: IBooking) => {
    setSelectedService(serviceData);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedService(null);
  };

  const cancelBooking = (record: IBooking) => {
    // Tạo một bản sao của record để không thay đổi trực tiếp state
    const updatedRecord: IBooking = { ...record, status: "Đã hủy" };
    // Gửi dữ liệu đã cập nhật lên API
    props.onCancelBooking(updatedRecord);
  };

  const confirmBooking = (record: IBooking) => {
    // Tạo một bản sao của record để không thay đổi trực tiếp state
    const updatedRecord = { ...record, status: "Đã xác nhận" };
    console.log(updatedRecord);

    // Gửi dữ liệu đã cập nhật lên API
    props.onUpdateBooking(updatedRecord);
  };
  const columns: ColumnsType<IBooking> = [
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      render: (number) => <a>{number}</a>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Loại xe",
      dataIndex: "model_car",
      key: "model_car",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số KM",
      dataIndex: "mileage",
      key: "mileage",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngày đến",
      dataIndex: "target_date",
      key: "target_date",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Giờ đến",
      dataIndex: "target_time",
      key: "target_time",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (text) => <a style={{ color: "red" }}>{text}</a>,
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
              cancelBooking(record);
            }}
            okText="Có"
            okButtonProps={{
              style: { background: "orange", color: "white" },
            }}
            cancelText="Không"
          >
            <Button danger>Hủy lịch</Button>
          </Popconfirm>
          <Popconfirm
            title="Xác nhận"
            description="Xác nhận lịch này"
            onConfirm={() => {
              confirmBooking(record);
            }}
            okText="Có"
            okButtonProps={{
              style: { background: "orange", color: "white" },
            }}
            cancelText="Không"
          >
            <Button>Xác nhận</Button>
          </Popconfirm>
          <Button type="dashed" onClick={() => showModal(record)}>
            Chi tiết
          </Button>
        </Space>
      ),
    },
  ];

  const data: IBooking[] = props.booking
    .filter((item: IBooking) => item.status === "Chờ xác nhận")
    .map((item: IBooking) => {
      return {
        key: item.id,
        ...item,
      };
    });

  const [searchValue, setSearchValue] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.phone.toString().includes(searchValue) ||
      item.status.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.target_date.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.target_time.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.note.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Tìm kiếm"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
      />
      {/* Modal hiển thị thông tin chi tiết dịch vụ */}
      <Modal
        title="Thông tin dịch vụ"
        visible={isModalVisible}
        onOk={closeModal}
        onCancel={closeModal}
      >
        {selectedService && (
          <div>
            <p>Họ và tên: {selectedService.name}</p>
            <p>Số điện thoại: {selectedService.phone}</p>
            <p>Email: {selectedService.email}</p>
            <p>Tên xe: {selectedService.model_car}</p>
            <p>Số Km: {selectedService.mileage}</p>
            <p>
              Trạng thái:{" "}
              <span style={{ color: "red" }}>{selectedService.status}</span>
            </p>
            <p>
              Thời gian đến dự kiến: {selectedService.target_time} Ngày{" "}
              {selectedService.target_date}
            </p>
            <p>Ghi chú: {selectedService.note}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BookingAdmin;
