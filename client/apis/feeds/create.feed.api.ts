import { FeedPostBody } from "@interfaces/feeds/feed.post";
import { axiosInstance } from "@lib/axios";

const FEEDS = `/feeds`;
/**
 * @description 피드 포스팅
 */
export const feedSubmitApi = async (body: FeedPostBody) => {
  return axiosInstance.post(FEEDS, body);
};
