import axios from "axios";

const api = axios.create({
  baseURL: "https://echo-serv.tbxnet.com/v1/secret",
  headers: {
    Authorization: "Bearer aSuperSecretKey", // SecretKey ideally would go in a .env file
  },
});

export default api;
