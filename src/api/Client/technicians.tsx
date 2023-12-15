import instanceClient from "./instanceClient";
const getTechnicians = () => {
  return instanceClient.get("technicians");
};


export { getTechnicians };
