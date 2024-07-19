export const queryKeys = {
  feeds: {
    posts: (filter: string) => ['feed_posts_key', filter]
  },
  map: {
    marker: (creatorId: string) => ['map_marker_key', creatorId],
  }
}
