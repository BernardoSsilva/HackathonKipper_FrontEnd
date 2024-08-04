import axios from "axios";

export function createApiRequest() {
  return axios.create({
    baseURL: "https://abigoapi.azurewebsites.net"
  });
}

export const api = createApiRequest();