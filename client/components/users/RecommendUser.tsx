"use client";

import {Typography} from "@components/common/typography/Typography";
import {HorizontalBar} from "@components/navigation/HorizontalBar";
import {ReactElement} from "react";
import {RecommendUserList} from "./RecommendUserList";
import * as styles from "./RecommendUser.css";
import {useAuth} from "@providers/AuthProvider";
import {useRecommendUserQuery} from "@services/queries/users/useRecommendUserQuery";

export const RecommendUser = (): ReactElement => {
  const {userId} = useAuth();

  const {data, isLoading} = useRecommendUserQuery(userId);

  return (
    <section className={styles.recommendUserLayout}>
      <div className={styles.recommendUserTitleWrapper}>
        <Typography variant="h2">추천 미식가</Typography>
      </div>
      <HorizontalBar>
        <RecommendUserList pending={isLoading} recommendUserList={data?.data || []}/>
      </HorizontalBar>
    </section>
  );
};
