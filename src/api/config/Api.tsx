import { axiosConfig } from "./axiosConfig";

export const Api = {
  getAllHomePageData: async function () {
    return await axiosConfig.get("homepage/get-all");
  },
  getAllProductPageData: async function (id: string) {
    return await axiosConfig.get(`productpage/get-all/${id}`);
  },

  getOneProductPageData: async function (id: string) {
    return await axiosConfig.get(`productpage/get/${id}`);
  },

  getAllShopPageData: async function () {
    return await axiosConfig.get("shoppage/get-all");
  },
  CreateOrder: async function (body: object) {
    const response = await axiosConfig.post("orderpage/create", body);
    return response.data
  },
  payment: async function (id) {
    const response = await axiosConfig.get(`orderpage/payment?orderId=${id}`);
    return response.data
  },
};
