import React from "react";

const PayPage = () => {
  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Thanh toán</h2>
      </div>

      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Chi tiết dịch vụ</span>
            <span className="badge badge-secondary badge-pill">1</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Bảo dưỡng 1</h6>
                <small className="text-muted">Bảo dưỡng cấp 1</small>
              </div>
              <span className="text-muted">$12</span>
            </li>

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$12</strong>
            </li>
          </ul>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Thông tin khách hàng</h4>
          <form className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="name">Họ tên: </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Họ và tên"
              />
              <div className="invalid-feedback">Vui lòng nhập họ và tên</div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                Email <span className="text-muted">(Tùy chọn)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="vidu@gmail.com"
              />
              <div className="invalid-feedback">Vui lòng nhập email</div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Địa chỉ</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Quang Trung"
                required
              />
              <div className="invalid-feedback">
                Vui lòng nhập địa chỉ
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">
                Địa chỉ 2 <span className="text-muted">(Tùy chọn)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Nhà riêng hoặc công ty"
              />
            </div>

            <h4 className="mb-3">Payment</h4>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  checked
                  required
                />
                <label className="custom-control-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small className="text-muted">
                
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-cvv">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Thanh toán
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayPage;
