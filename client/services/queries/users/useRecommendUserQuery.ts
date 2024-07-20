import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@services/keys/query.key";
import {todayRecommendUserApi} from "@apis/users/user.api";

export const useRecommendUserQuery = (creatorId?: string) => {
  return useQuery({
    queryKey: queryKeys.users.recommend(creatorId),
    queryFn: () => todayRecommendUserApi(creatorId),
    placeholderData: (previousData) => previousData
  })
}
