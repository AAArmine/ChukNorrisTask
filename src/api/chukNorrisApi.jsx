import axios from "axios";

export const apiChukNorris = axios.create({
  baseURL: "https://api.chucknorris.io/",
});
