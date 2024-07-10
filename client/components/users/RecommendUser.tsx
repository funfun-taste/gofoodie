"use client";

import { Typography } from "@components/common/typography/Typography";
import { HorizontalBar } from "@components/navigation/HorizontalBar";
import { ReactElement, useEffect, useState } from "react";
import { RecommendUserList } from "./RecommendUserList";
import * as styles from "./RecommendUser.css";

export const ReommendUser = (): ReactElement => {
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setPending(false);
  }, []);

  return (
    <section className={styles.recommendUserLayout}>
      <div className={styles.recommendUserTitlWrapper}>
        <Typography variant="h2">추천 미식가</Typography>
      </div>
      <HorizontalBar>
        <RecommendUserList pending={pending} recommendUserList={[]} />
      </HorizontalBar>
    </section>
  );
};
