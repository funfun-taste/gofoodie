"use client";

import { ReactElement, useEffect, useState } from "react";
import { HorizontalBar } from "../navigation/HorizontalBar";
import { RecentFeedList } from "./RecentFeedList";
import * as styles from "./RecentFeed.css";
import { Typography } from "@components/common/typography/Typography";

export const RecentFeed = (): ReactElement => {
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setPending(false);
  }, []);

  return (
    <section className={styles.recentFeedLayout}>
      <div className={styles.recentFeedTitlWrapper}>
        <Typography variant="h2">최근 여행한 기록</Typography>
      </div>
      <HorizontalBar>
        <RecentFeedList pending={pending} recentFeedList={[]} />
      </HorizontalBar>
    </section>
  );
};
