import {ReactElement} from "react";
import FlexBox from "@components/common/boxes/FlexBox";
import {MyFeedSkeleton} from "@components/common/skeleton/MyFeedSkeleton";
import Link from "next/link";
import {RecentFeedCard} from "./RecentFeedCard";

interface RecentFeedListProps {
  recentFeedList: any[];
  pending: boolean;
}

export const RecentFeedList = ({
                                 pending,
                                 recentFeedList,
                               }: RecentFeedListProps): ReactElement => {
 
  if (pending)
    return (
      <div>
        <FlexBox gap={12}>
          {Array.from({length: 5}).map((_, index) => (
            <MyFeedSkeleton key={`feed_card_skeleton_${index}`} isLoading={true}/>
          ))}
        </FlexBox>
      </div>
    );

  return (
    <div>
      <FlexBox gap={12}>
        {recentFeedList.length === 0 ? (
          <div>
            <p>최근 작성한 여행 기록이 없습니다.</p>
          </div>
        ) : (
          <>
            {recentFeedList.map((recentFeed) => (
              <Link href={`/feeds/${recentFeed._id}`} key={recentFeed._id}>
                <RecentFeedCard recentFeed={recentFeed}/>
              </Link>
            ))}
          </>
        )}
      </FlexBox>
    </div>
  );
};
