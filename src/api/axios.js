import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "df8768246452a99e3e597cc945384041",
    language: "ko-KR",
  },
});

export default instance;