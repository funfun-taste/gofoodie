import {KakaoMap} from "@components/kakao/KakaoMap";
import * as styles from "./page.css";
import React from "react";
import {RecentFeed} from "@components/feeds/RecentFeed";
import {ReocmmendUser} from "@components/users/RecommendUser";
import {RegionFilter} from "@components/feeds/RegionFilter";
import {FeedHome} from "@components/feeds/FeedHome";
import {Header} from "@components/header/Header";
import {Footer} from "@components/footer/Footer";
import {queryClient} from "@lib/tanstack/queryClient";
import {feedListsApi} from "@apis/feeds/fees.api";
import {queryKeys} from "@services/keys/query.key";


export default async function HomePage() {
  await queryClient.prefetchInfiniteQuery({
    initialPageParam: 1,
    queryKey: queryKeys.feeds.posts("전체"),
    queryFn: ({pageParam = 1}) => feedListsApi("전체", {pageParam}),
  });

  return (
    <>
      <Header/>
      <div className={styles.homeContainerLayout}>
        {/* 카카오맵 */}
        <KakaoMap/>
        {/* 최근 작성한 여행기 */}
        <RecentFeed/>
        {/* 추천 유저 */}
        <ReocmmendUser/>
        {/* 지역 필터 */}
        <RegionFilter/>
        {/* 피드 홈 */}
        <FeedHome/>
      </div>
      <Footer/>
    </>
  );
}
