"use client";

import { useState } from "react";
import { FeedList } from "./FeedList";

export const FeedHome = () => {
  const [pending, setPending] = useState(true);
  return (
    <section>
      <FeedList pending={pending} feedList={[]} />
    </section>
  );
};
