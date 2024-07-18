import FlexBox from "@components/common/boxes/FlexBox";
import { FeedSkeleton } from "@components/common/skeleton/FeedSkeleton";
import { Typography } from "@components/common/typography/Typography";
import {Feed, FeedsList} from "@interfaces/feeds/feed.list";
import { Fragment } from "react";
import {FeedCard} from "@components/feeds/cards/FeedCard";

interface FeedListProps {
  pending: boolean;
  pages: FeedsList[][];
}

export const FeedList = ({ pending, pages }: FeedListProps) => {
  if (pending) {
    return (
      <div>
        <FlexBox flexDirection={"column"}>
          <FeedSkeleton isLoading={true} />
          <FeedSkeleton isLoading={true} />
          <FeedSkeleton isLoading={true} />
          <FeedSkeleton isLoading={true} />
          <FeedSkeleton isLoading={true} />
        </FlexBox>
      </div>
    );
  }
  return (
    <div>
      {pages.length === 0 ? (
        <div>
          <Typography>작성된 피드가 없어요.</Typography>
        </div>
      ) : (
        <div>
          {pages.map((page: Feed[], index: number) => {
            return (
              <Fragment key={`feed_page_${index}`}>
                {page.map((feed: Feed) => {
                  return (
                    <Fragment key={feed.feedId}>
                      <FeedCard feed={feed} />
                    </Fragment>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};
