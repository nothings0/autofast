import instanceClient from "./instanceClient";
const getServicePage = () => {
  return instanceClient.get("servicepage");
};
const getServiceHome = () => {
    return instanceClient.get("servicehome");
  };

export { getServicePage, getServiceHome };