import {feedListsApi, getMyFeedListsApi} from "@apis/feeds/feeds.api";
import {useInfiniteQuery} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {queryKeys} from "@states/keys/query.key";

export const useMyFeedListsInfinityScrollQuery = () => {
  return useInfiniteQuery({
    queryKey: queryKeys.feeds.myPosts(),
    queryFn: async ({pageParam = 1}) => {
      try {
        return await getMyFeedListsApi({pageParam} as {
          pageParam: number;
        });
      } catch (e) {
        const error = e as AxiosError;
        if (error.response && error.response.data) {
          const {statusCode, message} = error.response.data as {
            statusCode: number;
            message: string;
          };
          if (statusCode === 404) {
            return [];
          }
        }
        throw e;
      }
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageParams,
    }),
    staleTime: 300000,
    placeholderData: (previousData) => previousData
  })
}

export const useFeedListsInfinityScrollQuery = (filter: string) => {
  return useInfiniteQuery({
    queryKey: queryKeys.feeds.posts(filter),
    queryFn: async ({pageParam = 1}) => {
      try {
        return await feedListsApi(filter, {pageParam} as {
          pageParam: number;
        });
      } catch (e) {
        const error = e as AxiosError;
        if (error.response && error.response.data) {
          const {statusCode, message} = error.response.data as {
            statusCode: number;
            message: string;
          };
          if (statusCode === 404) {
            return [];
          }
        }
        throw e;
      }
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageParams,
    }),
    staleTime: 300000,
    placeholderData: (previousData) => previousData
  });
};
