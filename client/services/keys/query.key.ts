export const queryKeys = {
  feeds: {
    posts: (filter: string) => ['feed_posts_key', filter],
    recently: (creatorId: string) => ['recently_feed_list_key', creatorId],
  },
  map: {
    marker: (creatorId: string) => ['map_marker_key', creatorId],
  }
}
