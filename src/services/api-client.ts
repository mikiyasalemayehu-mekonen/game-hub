import axios from "axios";

export default  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "01dc6fb98fe8474e8175cd36a92cf56d",
  },
});
