import FlexBox from "@components/common/boxes/FlexBox";
import { FeedSkeleton } from "@components/common/skeleton/FeedSkeleton";
import { Typography } from "@components/common/typography/Typography";
import { FeedsList } from "@interfaces/feeds/feed.list";
import { Fragment } from "react";

interface FeedListProps {
  pending: boolean;
  pages: FeedsList[][] | any;
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
          {pages.map((page: FeedsList[], index: number) => {
            return (
              <Fragment key={`feed_page_${index}`}>
                {page.map((feed: FeedsList) => {
                  return <article key={feed._id}>{feed.content}</article>;
                })}
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};
