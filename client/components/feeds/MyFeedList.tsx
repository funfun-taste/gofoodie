"use client";

import {ReactElement} from "react";
import { FeedTitle } from "./layouts/FeedTitle";
import { useRouter } from "next/navigation";
import {
  useMyFeedListsInfinityScrollQuery
} from "@services/queries/feeds/useFeedListsInfinityScrollQuery";
import {useIntersectionObserver} from "@hooks/useIntersectionObserver";
import {FeedList} from "@components/feeds/FeedList";
import {BounceSpinner} from "@components/common/spinner";

export const MyFeedList = (): ReactElement => {
  const router = useRouter();
  const {
    data: listQueryData,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useMyFeedListsInfinityScrollQuery();

  const {setTarget} = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <div>
      <FeedTitle historyBack={() => router.back()} />
      <FeedList pending={isLoading} pages={listQueryData?.pages || []}/>
      {isFetchingNextPage ? <BounceSpinner/> : <div ref={setTarget} />}
    </div>
  );
};
