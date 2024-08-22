"use client";

import {ReactElement} from "react";
import {HorizontalBar} from "../../navigation/HorizontalBar";
import {RecentFeedList} from "../RecentFeedList";
import * as styles from "../styles/RecentFeed.css";
import {Typography} from "@components/common/typography/Typography";
import {useRecentlyFeedListQuery} from "@services/queries/feeds/useRecentlyFeedListQuery";
import {useAuth} from "@providers/AuthProvider";
import useCookie from "@hooks/useCookie";

export const RecentFeed = (): ReactElement => {
  const {getCookie} = useCookie();
  const {userId} = useAuth();
  const id: string = getCookie('foodie-id') || userId;
  const {data, isLoading} = useRecentlyFeedListQuery(id);

  return (
    <section className={styles.recentFeedLayout}>
      <div className={styles.recentFeedTitleWrapper}>
        <Typography className={styles.recentFeedTitle} variant="h2">최근 여행한 기록</Typography>
      </div>
      <HorizontalBar>
        <RecentFeedList pending={isLoading} recentFeedList={data || []}/>
      </HorizontalBar>
    </section>
  );
};
