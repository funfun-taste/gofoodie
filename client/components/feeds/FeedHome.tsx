"use client";

import { useEffect, useState } from "react";
import { FeedList } from "./FeedList";
import * as styles from "./FeedHome.css";

export const FeedHome = () => {
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(false);
  }, []);
  return (
    <section className={styles.FeedHomeLayout}>
      <FeedList pending={pending} feedList={[]} />
    </section>
  );
};
