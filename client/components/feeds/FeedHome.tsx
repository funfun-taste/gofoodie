"use client";

import { FeedList } from "./FeedList";
import * as styles from "./styles/FeedHome.css";
import { useFeedListsInfinityScroll } from "@services/queries/useFeedListsInfinityScroll";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import useRegionFilterStore from "@store/regionFilterStore";
import { BounceSpinner, Spinner } from "@components/common/spinner";

export const FeedHome = () => {
  const {filter} = useRegionFilterStore();
  const {
    data: listQueryData,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useFeedListsInfinityScroll(filter);

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.FeedHomeLayout}>
      <FeedList pending={isLoading} pages={listQueryData?.pages || []} />
      {isFetchingNextPage ? <BounceSpinner /> : <div ref={setTarget} />}
    </div>
  );
};
