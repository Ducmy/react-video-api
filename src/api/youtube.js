import axios from "axios";

const KEY = "AIzaSyBeuMwkwXMuyEVECSIdbNA4MfB5WahEP_E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
