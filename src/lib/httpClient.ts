import axios from "axios";

export const httpClient = axios.create({
  headers: {
    Accept: "application/json",
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
