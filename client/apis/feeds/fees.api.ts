import { FeedFilter } from "@interfaces/feeds/feed.filter";
import { FeedLists } from "@interfaces/feeds/feed.list";
import { axiosInstance } from "@lib/axios";
import { AxiosResponseData, axiosResponseData } from "@lib/axios/axiosResponse";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const FEEDS = '/feeds'

export const feedListsApi = async (
  filter: FeedFilter,
  {
    pageParam,
  }: {
    pageParam: number;
  }
): Promise<FeedLists[] | null> => {
  let page = 1;
  if (!isNaN(pageParam)) page = pageParam;

  const url = `${FEEDS}/lists?region=${filter.sido}&page=${page}`;
  const { data } = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<FeedLists[]>>
  >(url);
  return axiosResponseData<FeedLists[]>(data);
};
