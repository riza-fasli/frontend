import { axiosConfig } from "./axiosConfig";

export const Api = {
  getAllHomePageData: async function () {
    return await axiosConfig.get("homepage/get-all");
  },
  getAllProductPageData: async function () {
    return await axiosConfig.get("productpage/get-all");
  },

  getOneProductPageData: async function (id: string) {
    return await axiosConfig.get(`productpage/get/${id}`);
  },

  getAllShopPageData: async function () {
    return await axiosConfig.get("shoppage/get-all");
  },
};
