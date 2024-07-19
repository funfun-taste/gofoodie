import {axiosInstance} from "@lib/axios";

export const getMarkerApi = async (creatorId: string) => {
  const url = `/shop/marker?creatorId=${creatorId}`;
  return axiosInstance.get(url);
}
