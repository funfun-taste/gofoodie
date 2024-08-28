export const queryKeys = {
  feeds: {
    clear: [
      "feed_posts_key",
      "my_feed_posts_key",
      "map_marker_key",
      "recently_feed_list_key",
    ],
    posts: (filter: string) => ["feed_posts_key", filter],
    myPosts: () => ["my_feed_posts_key"],
    recently: (creatorId: string) => ["recently_feed_list_key", creatorId],
  },
  map: {
    marker: (creatorId: string) => ["map_marker_key", creatorId],
  },
  users: {
    recommend: (creatorId?: string) => ["today_recommend_user", creatorId],
  },
};
