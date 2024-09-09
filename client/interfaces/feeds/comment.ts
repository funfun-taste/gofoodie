import { FeedUser } from "@interfaces/feeds/feed.list";

export interface Comment {
  user: FeedUser;
  comment: string;
  createdDate: Date;
  like: number;
  userPick: string[];
}
