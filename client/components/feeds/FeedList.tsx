import FlexBox from "@components/common/boxes/FlexBox";
import { FeedSkeleton } from "@components/common/skeleton/FeedSkeleton";
import { Typography } from "@components/common/typography/Typography";
import { Fragment } from "react";

interface FeedListProps {
  pending: boolean;
  pages: any[];
}

export const FeedList = ({ pending, pages }: FeedListProps) => {
  console.log(pages);
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
          {pages.map((page, index) => {
            return (
              <Fragment key={`feed_page_${index}`}>
                {page.map((feed) => {
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
