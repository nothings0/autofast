import instance from "./instance";
import { IService, ISeviceItem } from "../interface/service";
const getService = () => {
  return instance.get("/admin/services");
};
const addService = (service: IService) => {
  return instance.post("/admin/service", service);
};
const updateService = (service: IService) => {
  return instance.patch("/admin/service" + service.id, service);
};
const deleteService= (id: any) => {
  return instance.delete(`/admin/service/${id}`);
};

const getServiceItem = () => {
  return instance.get("/client/service-item");
};
const addServiceItem = (service: ISeviceItem) => {
  return instance.post("/client/serviceitem", service);
};
const updateServiceItem = (service: ISeviceItem) => {
  return instance.patch(`/client/serviceitem/${service.id}/` , service);
};
const deleteServiceItem= (id: any) => {
  return instance.delete(`/client/serviceitem${id}` );
};


export { getService, addService, updateService, deleteService, getServiceItem, addServiceItem, updateServiceItem, deleteServiceItem};