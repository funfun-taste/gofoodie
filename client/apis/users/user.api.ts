import {axiosInstance} from "@lib/axios";

export const todayRecommendUserApi = async (creatorId?: string) => {
  let url = '/users/recommend';
  if (creatorId) url = url += `?id=${creatorId}`;
  const {data} = await axiosInstance.get(url);
  return data;
}
