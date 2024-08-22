import {FeedsList} from "@interfaces/feeds/feed.list";
import {axiosInstance} from "@lib/axios";
import {axiosResponseConvertor, AxiosResponseData} from "@lib/axios/axiosResponse";
import {AxiosRequestConfig, AxiosResponse} from "axios";


export const feedListsApi = async (
  filter: string,
  {
    pageParam,
  }: {
    pageParam: number;
  }
): Promise<FeedsList[]> => {
  let page = 1;
  if (!isNaN(pageParam)) page = pageParam;
  const url = `/feeds/lists?region=${filter}&page=${page}`;
  const {data} = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<FeedsList[]>>
  >(url);
  const result = axiosResponseConvertor<FeedsList[]>(data);
  if (!result) return [];
  return result;
};

export const getMyFeedListsApi = async ({
                                          pageParam,
                                        }: {
  pageParam: number;
}): Promise<FeedsList[]> => {
  let page = 1;
  if (!isNaN(pageParam)) page = pageParam;
  const url = `/feeds/my/lists?page=${page}`
  const { data} = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<FeedsList[]>>
  >(url);
  const result = axiosResponseConvertor<FeedsList[]>(data);
  if (!result) return [];
  return result;
}

export const recentlyFeedApi = async (creatorId: string) => {
  if (!creatorId) return [];
  const url = `/feeds/recently/${creatorId}`;
  const {data} = await axiosInstance.get(url);
  const result = axiosResponseConvertor(data);
  if (!result) return [];
  return result;
}
