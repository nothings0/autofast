import React, { useEffect, useState } from 'react';

type Props = {};

const ResetPass = (props: Props) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [userId, setUserId] = useState(0)

useEffect(() => {
    const sessionData = sessionStorage.getItem("user");
    console.log({ sessionData });
    console.log(sessionData);
    
    if (sessionData) {
      // Session Storage tồn tại, người dùng đã đăng nhập
      const userData = JSON.parse(sessionData); // Parse the JSON string into an object
      setUserId(userData.id)
   
    }
  }, []);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'currentPassword') {
      setCurrentPassword(value);
    } else if (id === 'newPassword') {
      setNewPassword(value);
    } else if (id === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu mới
    if (newPassword !== confirmPassword) {
      setError('Mật khẩu mới và xác nhận mật khẩu mới không khớp.');
      return;
    }

    // Gửi yêu cầu API để thay đổi mật khẩu
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/client/profile/change-password/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          current_password: currentPassword,
         new_password: newPassword,
         confirm_password: confirmPassword
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setError(null);
      } else {
        setError(data.message || 'Đã có lỗi xảy ra.');
        setSuccess(false);
      }
    } catch (error) {
      setError('Đã có lỗi xảy ra.');
      setSuccess(false);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Thay đổi mật khẩu</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="currentPassword">Mật khẩu hiện tại</label>
                    <input
                      type="password"
                      className="form-control"
                      id="currentPassword"
                      required
                      value={currentPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="newPassword">Mật khẩu mới</label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      required
                      value={newPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Xác nhận mật khẩu mới</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      required
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Thay đổi mật khẩu
                  </button>
                </form>
                {error && <div className="text-danger mt-2">{error}</div>}
                {success && <div className="text-success mt-2">Mật khẩu đã được thay đổi thành công.</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
