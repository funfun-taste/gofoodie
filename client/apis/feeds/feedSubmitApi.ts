import { FeedPostBody } from "@interfaces/feeds/feed.post";
import { FEEDS } from "./create.feed.api";

/**
 * @description 피드 포스팅
 */
export const feedSubmitApi = async (body: FeedPostBody) => {
  const {} = await axiosInstance.post(FEEDS, body);
};
