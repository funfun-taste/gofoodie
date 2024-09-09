import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@states/keys/query.key";
import {recentlyFeedApi} from "@apis/feeds/feeds.api";

export const useRecentlyFeedListQuery = (creatorId: string) => {
  return useQuery<any, unknown, any, string[]>({
    queryKey: queryKeys.feeds.recently(creatorId),
    queryFn: () => recentlyFeedApi(creatorId),
    placeholderData: (previousData: any) => previousData,
    gcTime: 6 * 1000 * 5,
  })
}
