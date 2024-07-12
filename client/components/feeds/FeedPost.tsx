"use client";

import { useRouter } from "next/navigation";
import { FeedPostTitle } from "./FeedPostTitle";
import { FeedPostForm } from "./FeedPostForm";

export const FeedPost = () => {
  const router = useRouter();
  const onClickFeedSave = async () => {
    alert("저장");
  };
  return (
    <div>
      <FeedPostTitle
        onClickFeedSave={onClickFeedSave}
        historyBack={() => router.back()}
      />
      <FeedPostForm />
    </div>
  );
};
