import axios from "axios";
const customAxios = axios.create({
  baseURL: "https://friends-management.vercel.app/api/v1",
});
export default customAxios;
