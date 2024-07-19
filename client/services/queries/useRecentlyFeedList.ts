import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@services/keys/query.key";
import {recentlyFeedApi} from "@apis/feeds/fees.api";

export const useRecentlyFeedList = (creatorId: string) => {
  return useQuery<any, unknown, any, string[]>({
    queryKey: queryKeys.feeds.recently(creatorId),
    queryFn: () => recentlyFeedApi(creatorId),
    placeholderData: (previousData: any) => previousData,
    gcTime: 6 * 1000 * 5,
  })
}
