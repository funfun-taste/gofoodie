"use client";

import { ReactElement } from "react";
import { FeedTitle } from "./FeedTitle";
import { useRouter } from "next/navigation";

export const MyFeedList = (): ReactElement => {
  const router = useRouter();
  return (
    <div>
      <FeedTitle historyBack={() => router.back()} />
    </div>
  );
};
