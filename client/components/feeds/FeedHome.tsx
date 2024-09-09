"use client";

import {FeedList} from "./FeedList";
import * as styles from "./styles/FeedHome.css";
import {useFeedListsInfinityScrollQuery} from "@states/queries/feeds/useFeedListsInfinityScrollQuery";
import {useIntersectionObserver} from "@hooks/useIntersectionObserver";
import useRegionFilterStore from "../../states/store/regionFilterStore";
import {BounceSpinner, Spinner} from "@components/common/spinner";

export const FeedHome = () => {
  const {filter} = useRegionFilterStore();
  const {
    data: listQueryData,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useFeedListsInfinityScrollQuery(filter);

  const {setTarget} = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <Spinner/>;

  return (
    <div className={styles.FeedHomeLayout}>
      <FeedList pending={isLoading} pages={listQueryData?.pages || []}/>
      {isFetchingNextPage ? <BounceSpinner/> : <div ref={setTarget} />}
    </div>
  );
};
