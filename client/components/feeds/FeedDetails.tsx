import { Feed } from "@interfaces/feeds/feed.list";
import { FeedCard } from "@components/feeds/cards/FeedCard";

interface FeedDetailsProps {
  feed: Feed;
}

export const FeedDetails = ({ feed }: FeedDetailsProps) => {
  return (
    <div>
      <FeedCard feed={feed} />
    </div>
  );
};
