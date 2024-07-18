import {FeedsList} from "@interfaces/feeds/feed.list";
import {axiosInstance} from "@lib/axios";
import {AxiosResponseData, axiosResponseData} from "@lib/axios/axiosResponse";
import {AxiosRequestConfig, AxiosResponse} from "axios";

const FEEDS = "/feeds";

export const feedListsApi = async (
  filter: string,
  {
    pageParam,
  }: {
    pageParam: number;
  }
): Promise<FeedsList[] | null> => {
  let page = 1;
  if (!isNaN(pageParam)) page = pageParam;
  const url = `${FEEDS}/lists?region=${filter}&page=${page}`;
  const {data} = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<FeedsList[]>>
  >(url);
  return axiosResponseData<FeedsList[]>(data);
};
