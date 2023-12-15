import instance from "./instance";
import { IUser } from "../interface/user";

const getUsers = () => {
  return instance.get("/users");
};

const getUserById = (id: number) => {
  return instance.get(`/client/profile/${id}`);
}

const addUsers = (users: IUser) => {
  return instance.post("/register", users).then((response) => {

    return response.data.message
  }).catch((error) => {
    // Handle any errors here if needed
    console.error("Error:", error);
    throw error; // Rethrow the error for further handling in your component
  });
};
const logIn = (users: IUser) => {
  return instance.post("/login", users).then((response) => {

    return response.data.message
  }).catch((error) => {
    // Handle any errors here if needed
    console.error("Error:", error);
    throw error; // Rethrow the error for further handling in your component
  });
};
const updateUsers = (users: IUser) => {
  return instance.patch("/users/" + users.id, users);
};
const deleteUsers = (id: number) => {
  return instance.delete("/users/" + id);
};
const uploadAvatar = (id: number, formData: any) => {
  return instance.post(`/client/profile/update/avatar/${id}`, formData, {});
}
const updateProfile = (id: number, data: any) => {
  return instance.put(`/client/profile/update/${id}`, data);
}

export { getUsers, addUsers, updateUsers, deleteUsers ,logIn, getUserById, uploadAvatar, updateProfile };
