import { feedListsApi } from "@apis/feeds/fees.api";
import { FeedFilter } from "@interfaces/feeds/feed.filter";
import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { queryKeys } from "services/keys/query.key";

export const useFeedListsInfinityScroll = (filter: FeedFilter) => {
  return useInfiniteQuery({
    queryKey: queryKeys.feeds.posts(filter),
    queryFn: async ({ pageParam = 1 }) => {
      try {
        return await feedListsApi(filter, { pageParam });
      } catch (e) {
        const error = e as AxiosError;
        if (error.response && error.response.data) {
          const { statusCode, message } = error.response.data as {
            statusCode: number;
            message: string;
          };
          if (statusCode === 404) {
            return undefined;
          }
        }
        throw e;
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage ? nextPage : undefined;
    },
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageParams,
    }),
    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000, // 1 minute
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    useErrorBoundary: false,
  });
};
