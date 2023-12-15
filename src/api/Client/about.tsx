import instanceClient from "./instanceClient";
const getAbout = () => {
  return instanceClient.get("about");
};
const getAboutz = ()=>{
  return instanceClient.get("aboutz")
}
const getAbouts=()=>{
  return instanceClient.get("abouts")
}

export { getAbout, getAbouts, getAboutz };
