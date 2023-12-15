import React, { useState } from "react";
import searchBooking from "../../../assets/img/searchBooking.png";
import { IBooking } from "../../../interface/booking";

interface IProps {
  searchBK: IBooking[];
}

const SearchBooking = (props: IProps) => {
  const data = props.searchBK;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [notFoundMessage, setNotFoundMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhoneNumber = (phone: any) => {
    // Kiểm tra số điện thoại có 10 chữ số và bắt đầu bằng 0
    return phone.match(/^0\d{9}$/);
  };

  const handleSearch = () => {
    if (!phoneNumber) {
      setErrorMessage("Vui lòng nhập số điện thoại.");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage("Số điện thoại không hợp lệ.");
      return;
    }

    setErrorMessage("");

    const result = data.find((item: any) => item.phone === phoneNumber);
    if (result) {
      setSearchResult(result);
    } else {
      setSearchResult(null);
      setErrorMessage("Không tìm thấy lịch bảo dưỡng phù hợp.");
    }
  };

  const handleReset = () => {
    setPhoneNumber("");
    setSearchResult(null);
    setNotFoundMessage("");
    setErrorMessage("");
  };

  return (
    <div>
      <div
        className="text-center wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <h6 className="text-primary text-uppercase">// Search Booking //</h6>
        <h1 className="mb-5" style={{ marginBottom: "5rem" }}>
          Tìm kiếm lịch đặt
        </h1>
      </div>
      <div style={{ marginTop: "50px" }} className="container">
        <div className="row">
          <div style={{ marginTop: "20px" }} className="col-md-6 form-search">
            <b>
              <p>Tra Cứu Lịch Bảo Dưỡng</p>
            </b>
            <p>Số điện thoại:</p>
            <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
              <input
                style={{ width: "100%" }}
                className="form-control mr-sm-2"
                type="text"
                placeholder="VD: 0989898989"
                aria-label="Search"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
            <button
              style={{ marginTop: "25px" }}
              className="btn btn-primary"
              type="submit"
              onClick={handleSearch}
            >
              Tra cứu
            </button>
            {searchResult && (
              <button
                style={{ marginTop: "25px", marginLeft: "20px" }}
                className="btn btn-info"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Thông tin lịch
              </button>
            )}

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Kết quả tìm kiếm:
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {searchResult && (
                      <div className="search-result">
                        <p>Tên: {searchResult.name}</p>
                        <p>Số điện thoại: {searchResult.phone}</p>
                        <p>Loại xe: {searchResult.model_car}</p>
                        <p>Ngày đến: {searchResult.target_date}</p>
                        <p>Trạng thái lịch: {searchResult.status}</p>
                      </div>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={handleReset}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6" style={{ marginTop: "-80px" }}>
            <img src={searchBooking} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBooking;
