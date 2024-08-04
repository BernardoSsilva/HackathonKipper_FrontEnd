import axios from "axios";

export function createApiRequest() {
  return axios.create({
    baseURL: ""
  });
}

export const api = createApiRequest();