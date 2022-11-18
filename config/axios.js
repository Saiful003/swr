import axios from "axios";
const customAxios = axios.create({
  // baseURL: "http://localhost:3000/api/v1",
  baseURL: "https://next-js-blog-with-swr.vercel.app/api/v1",
});
export default customAxios;
