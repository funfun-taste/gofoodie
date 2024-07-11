import {User} from "next-auth";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const USERS = `/users`;

const IS_PROD = process.env.NODE_ENV === "production";

export const userCheckApi = async (user: User) => {
  const BASE_URL = IS_PROD
  ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
  : process.env.NEXT_PUBLIC_LOCAL_API_URL;
return axios.post(`${BASE_URL}/api${USERS}/checked`, user);
}
