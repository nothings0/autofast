import instanceClient from "./instanceClient";
const getMenu = () => {
  return instanceClient.get("menu");
};
export {getMenu}