"use client";

import { getFeedDetailsApi } from "@apis/feeds/feeds.api";
import { ReactElement, useEffect } from "react";

interface FeedDetailsPageProps {
  params: {
    postId: string;
  };
}

export default function FeedDetailsPage({
  params,
}: FeedDetailsPageProps): ReactElement {
  const { postId } = params;

  //todo postId 가 유효하지 않을 경우 404 리다이렉트

  useEffect(() => {
    getFeedDetailsApi(postId);
  }, [postId]);

  return (
    <div>
      <div>
        상세조회
        {params.postId}
      </div>
    </div>
  );
}
