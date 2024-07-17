import { FeedFilter } from "@interfaces/feeds/feed.filter";

export const queryKeys = {
  feeds: {
    posts: (filter: FeedFilter) => ['feed_posts_key', filter]
  }
}