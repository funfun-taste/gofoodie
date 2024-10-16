import * as styles from "./page.css";
import React from "react";
import {RecentFeed} from "@components/feeds/cards/RecentFeed";
import {RecommendUser} from "@components/users/RecommendUser";
import {RegionFilter} from "@components/feeds/RegionFilter";
import {FeedHome} from "@components/feeds/FeedHome";
import {Header} from "@components/header/Header";
import {Footer} from "@components/footer/Footer";
import {queryClient} from "@lib/tanstack/queryClient";
import {feedListsApi, recentlyFeedApi} from "@apis/feeds/feeds.api";
import {queryKeys} from "@states/keys/query.key";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {MapRenderer} from "@components/kakao/MapRenderer";

export default async function HomePage() {

  await queryClient.prefetchInfiniteQuery({
    initialPageParam: 1,
    queryKey: queryKeys.feeds.posts("전체"),
    queryFn: ({pageParam = 1}) => feedListsApi("전체", {pageParam}),
  });

  await queryClient.prefetchQuery({
    queryKey: queryKeys.feeds.recently(''),
    queryFn: () => recentlyFeedApi('')
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header/>
      <div className={styles.homeContainerLayout}>
        {/* 카카오맵 */}
        <MapRenderer />
        {/* 최근 작성한 여행기 */}
        <RecentFeed/>
        {/* 추천 유저 */}
        <RecommendUser/>
        {/* 지역 필터 */}
        <RegionFilter/>
        {/* 피드 홈 */}
        <FeedHome/>
      </div>
      <Footer/>
    </HydrationBoundary>
  );
}
