import {axiosInstance} from "@lib/axios";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import {axiosResponseConvertor, AxiosResponseData} from "@lib/axios/axiosResponse";

export interface Marker {
  _id: string;
  title: string;
  x: string;
  y: string;
}

export const getMarkerApi = async (creatorId: string): Promise<Marker[]>  => {
  const url = `/shop/marker?creatorId=${creatorId}`;
  const {data} = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<Marker[]>>
  >(url);

  const result = axiosResponseConvertor<Marker[]>(data);
  if (!result) return [];

  return result;
}
