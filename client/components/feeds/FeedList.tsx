import FlexBox from "@components/common/boxes/FlexBox";
import { FeedSkeleton } from "@components/common/skeleton/FeedSkeleton";
import { Typography } from "@components/common/typography/Typography";

interface FeedListProps {
  pending: boolean;
  feedList: any[];
}

export const FeedList = ({ pending, feedList }: FeedListProps) => {
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
    <>
      {feedList.length === 0 ? (
        <Typography>작성된 피드가 없어요.</Typography>
      ) : (
        <div>피드 목록</div>
      )}
    </>
  );
};
