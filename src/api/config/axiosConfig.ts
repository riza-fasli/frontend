import { BaseUrl } from "@/utils/BaseUrl"
import axios from "axios"

export const axiosConfig = axios.create({
    baseURL : BaseUrl ,
    headers: { "Content-Type": "application/json" },

});