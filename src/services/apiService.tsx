import axios, { AxiosInstance } from "axios";

import { BASE_URL } from "@/config/app.config";

const axiosInstance = (
  token?: string,
  isFullAxiosResponse = false,
  h?: Record<string, string>
): AxiosInstance => {
  const headers: Record<string, string> = {
    ...h,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 30 * 1000,
    headers,
  });

  instance.interceptors.response.use(
    (response) => {
      if (isFullAxiosResponse) return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return response.data as any;
    },
    (error) => {
      return Promise.reject(error?.response);
    }
  );

  return instance;
};

export default axiosInstance;
