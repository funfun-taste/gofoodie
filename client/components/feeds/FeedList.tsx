import FlexBox from "@components/common/boxes/FlexBox";
import {FeedSkeleton} from "@components/common/skeleton/FeedSkeleton";
import {Typography} from "@components/common/typography/Typography";
import {Feed, FeedsList} from "@interfaces/feeds/feed.list";
import {Fragment, ReactElement} from "react";
import {FeedCard} from "@components/feeds/cards/FeedCard";
import * as styles from './styles/FeedList.css';

interface FeedListProps {
  pending: boolean;
  pages: FeedsList[][];
}

export const FeedList = ({pending, pages}: FeedListProps): ReactElement => {
  if (pending) {
    return (
      <div>
        <FlexBox flexDirection={"column"}>
          {Array.from({length: 5}).map((_, index) => (
            <FeedSkeleton key={`feed_card_skeleton_${index}`} isLoading={true}/>
          ))}
        </FlexBox>
      </div>
    );
  }

  return (
    <section className={styles.feedListsLayout}>
      {pages.length === 0 ? (
        <FlexBox className={styles.emptyLabel} alignItems="flex-center">
          <Typography
            fontWeight={500}
            fontSize={14}
            color="gray500"
            variant="h2">작성된 피드가 없어요.</Typography>
        </FlexBox>
      ) : (
        <>
          {pages.length > 0 && pages.map((page: Feed[], index: number) => {
            return (
              <Fragment key={`feed_page_${index}`}>
                {page.map((feed: Feed) => {
                  return (
                    <div key={feed.feedId} className={styles.feedCardWrapper}>
                      <FeedCard feed={feed}/>
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </>
      )}
    </section>
  );
};
