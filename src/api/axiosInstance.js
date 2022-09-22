import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://dua-backend.herokuapp.com/dua-main/",
});

export default fetcher;
