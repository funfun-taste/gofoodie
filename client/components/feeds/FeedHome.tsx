"use client";

import { useEffect, useState } from "react";
import { FeedList } from "./FeedList";
import * as styles from "./FeedHome.css";
import { FeedFilter } from "@interfaces/feeds/feed.filter";
import { useFeedListsInfinityScroll } from "services/queries/useFeedListsInfinityScroll";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";

export const FeedHome = () => {
  const [pending, setPending] = useState(true);

  const [filter, setFilter] = useState<FeedFilter>({
    sido: "전체",
  });

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

  useEffect(() => {
    setPending(false);
  }, []);

  if (isLoading) return <p>loading</p>;

  return (
    <>
      <section className={styles.FeedHomeLayout}>
        <FeedList pending={isLoading} pages={listQueryData?.pages || []} />
      </section>
      {/* {isFetchingNextPage ? <p>TESt</p> : <div ref={setTarget} />} */}
    </>
  );
};
