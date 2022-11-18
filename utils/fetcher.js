import axios from "axios";

export const fetcher = async (url) => {
  const { data, status } = await axios.get(url);

  if (status !== 200) {
    throw new Error(data.message);
  }
  return data;
};
