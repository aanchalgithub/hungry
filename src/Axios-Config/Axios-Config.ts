import axios, { AxiosHeaders } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://admin.yop-os.com/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = sessionStorage.getItem("yop-token") || "";
    const language = sessionStorage.getItem("i18nextLng") || "";

    if (config.headers) {
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
      (config.headers as AxiosHeaders).set("language", `${language}`);

      (config.headers as AxiosHeaders).set("device-type", `web_enable`);

      (config.headers as AxiosHeaders).set(
        "url",
        `${
          process.env.NODE_ENV === "development"
            ? "https://khammaghani.yop-os.com"
            : window.location.origin
        }`
      );

      (config.headers as AxiosHeaders).set(
        "store-id",
        sessionStorage.getItem("store-id") || ""
      );
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      sessionStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
