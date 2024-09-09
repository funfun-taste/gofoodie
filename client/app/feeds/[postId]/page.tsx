"use client";

import { ReactElement, useEffect, useState } from "react";
import { FeedDetails } from "@components/feeds/FeedDetails";
import { CommentForm } from "@components/feeds/comments/CommentForm";
import { CommentList } from "@components/feeds/comments/CommentList";
import { getFeedDetailsApi } from "@apis/feeds/feeds.api";
import { Feed } from "@interfaces/feeds/feed.list";

interface FeedDetailsPageProps {
  params: {
    postId: string;
  };
}

export default function FeedDetailsPage({
  params,
}: FeedDetailsPageProps): ReactElement {
  const { postId } = params;

  const [feed, setFeed] = useState<Feed | null>(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getFeedDetailsApi(postId).then((res) => {
      const { data } = res;
      setFeed(data.feed);
    });
  }, [postId]);

  if (!feed) return <div />;

  return (
    <div>
      <FeedDetails feed={feed} />

      <CommentList comments={comments} />

      <CommentForm />
    </div>
  );
}
