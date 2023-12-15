import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { getUserById, uploadAvatar, updateProfile } from "../../../api/user";

const AccountSetting = () => {
  const [avatar, setAvatar] = useState<string>("");
  console.log(avatar);
  
  const [uploadImg, setUploadImg] = useState<string>();
  console.log(uploadImg);
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  // const [showNotification, setShowNotification] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [formData, setFormData] = useState<any>();
  const getUser = async (id: number) => {
    await getUserById(id)
      .then((res) => {
        const dataUser = res.data;
        if (dataUser.avatar) {
          setAvatar(dataUser.avatar);
        }
        const name = dataUser.name.split(" "); // Chỗ này phải có space nha
        setLastName(name.pop());

        setEmail(dataUser.email);
        setPhone(dataUser.phone);
        setAddress(dataUser.address);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdateAvatar = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const input = event.target as HTMLInputElement;
    const sessionData = sessionStorage.getItem("user");

    if (sessionData) {
      const userData = JSON.parse(sessionData);

      if (input.files?.length) {
        let fd = new FormData();
        fd.append("avatar", input.files[0]);
        setFormData(fd);
        const file = input.files[0];
        const url = URL.createObjectURL(file);
        setUploadImg(url);
      }
    }
  };

  const openNotification = (
    mess: string,
    text_color: string,
    bg_color: string,
    title: string,
  ) => {
    setShowNotification(true);
    api.open({
      message: title,
      description: mess,
      duration: 3,
      style: {
        backgroundColor: bg_color,
        color: text_color,
      },
      onClose: () => {
        setShowNotification(false);
      },
    });
  };

  const handleUpdateProfile = async () => {
    const user = JSON.parse(sessionStorage.getItem("user") || "");
    const data = {
      name: `${lastName}`,
      email: email,
      phone: phone,
      password: newPassword,
      address: address,
      description: "",
    };

    if (formData) {
      console.log(formData);

      await uploadAvatar(user.id, formData)
        .then((res) => {
          if (res.data.message) {
            updateProfile(user.id, data)
              .then((res) => {
                if (res.data.message) {
                  openNotification(
                    res.data.message,
                    "black",
                    "green",
                    "Cập Nhật Thành Công",
                  );
                  getUserById(user.id)
                    .then((res) => {
                      sessionStorage.setItem("user", JSON.stringify(res.data));
                    })
                    .catch((error) => console.log(error));
                } else {
                  openNotification(
                    res.data.message,
                    "white",
                    "red",
                    "Cập Nhật Thất Bại",
                  );
                }
              })
              .catch((error) => {
                openNotification(
                  error.response.message,
                  "white",
                  "red",
                  "Cập Nhật Thất Bại",
                );
              });
          } else {
            openNotification(
              res.data.message,
              "white",
              "red",
              "Cập Nhật Avatar Thất Bại",
            );
          }
        })
        .catch((error) => {
          openNotification(
            error.response.message,
            "white",
            "red",
            "Cập Nhật Avatar Thất Bại",
          );
        });
    } else {
      await updateProfile(user.id, data)
        .then((res) => {
          if (res.data.message) {
            openNotification(
              res.data.message,
              "black",
              "green",
              "Cập Nhật Thành Công",
            );
            if (formData) {
              user.avatar = formData;
            }
          } else {
            openNotification(
              res.data.message,
              "white",
              "red",
              "Cập Nhật Thất Bại",
            );
          }
        })
        .catch((error) => {
          openNotification(
            error.response.message,
            "white",
            "red",
            "Cập Nhật Thất Bại",
          );
        });
    }
  };
  useEffect(() => {
    const sessionData = sessionStorage.getItem("user");
    if (sessionData) {
      const userData = JSON.parse(sessionData);

      getUser(userData.id);
    }
  }, []);
  
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {contextHolder}
          <div className="col-lg-4 ">
            {/* Account Sidebar */}
            <div className="author-card pb-3 ">
              <div className="author-card-profile">
                <div
                  className="author-card-avatar"
                  style={{ textAlign: "center" }}
                >
                
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "99%",
                    }}
                    src={`${ uploadImg? uploadImg: `http://localhost:8000/storage/${avatar}`}`}
                  
                  />
                  <input
                    className="form-control"
                    type="file"
                    onChange={handleUpdateAvatar}
                  />
                </div>
                <div
                  className="author-card-details"
                  style={{ textAlign: "center" }}
                >
                  <h5 className="author-card-name text-lg text-capitalize">
                    {" "}
                    {lastName}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* Profile Settings */}
          <div className="col-lg-8 pb-5">
            <form className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-ln">Họ và tên</label>
                  <input
                    className="form-control"
                    type="text"
                    id="account-ln"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-email">E-mail</label>
                  <input
                    className="form-control"
                    type="email"
                    id="account-email"
                    value={email}
                    onChange={(e) => setLastName(e.target.value)}
                    
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-phone">Số điện thoại</label>
                  <input
                    className="form-control"
                    type="text"
                    id="account-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-confirm-pass">Địa chỉ</label>
                  <input
                    className="form-control"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="account-address"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-pass">Mật khẩu mới</label>
                  <input
                    className="form-control"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    id="account-pass"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-confirm-pass">Nhập lại mật khẩu mới</label>
                  <input
                    className="form-control"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="account-confirm-pass"
                  />
                </div>
              </div>
             
              <div className="col-12">
                <hr className="mt-2 mb-3" />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <button
                    className="btn btn-style-1 btn-primary"
                    type="button"
                    onClick={handleUpdateProfile}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
function setShowNotification(arg0: boolean) {
  throw new Error("Function not implemented.");
}

