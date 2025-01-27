import axios from "axios";

const fetcher = (url) => {
  return axios.get(url).then(({ data }) => data);
};

export default fetcher;
