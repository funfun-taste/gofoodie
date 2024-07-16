"use client";

import { useRouter } from "next/navigation";
import { FeedPostTitle } from "./FeedPostTitle";
import { FeedPostForm } from "./FeedPostForm";
import { FormEventHandler, useState } from "react";
import { FeedPostBody } from "@interfaces/feeds/feed.post";
import { feedSubmitApi } from "@apis/feeds/create.feed.api";

export const FeedPost = () => {
  const [postForm, setPostForm] = useState<any>({
    content: "",
    item: {
      title: "",
      category: "",
      address: {
        name: "",
        sigungu: "",
        sido: "",
        x: "",
        y: "",
      },
    },
    files: [],
  });
  
  const router = useRouter();


  const handleSubmitFeedPost: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();

      const body: FeedPostBody = {
        ...postForm,
      };
      const { data } = await feedSubmitApi(body);
      if (data.result) {
        if (postForm.files.length > 0) {
          const { _id } = data.data;
          await fileUpload(_id);
        }

        //todo 쿼리 초기화 후 마이 피드로 이동
        //   await queryClient.invalidateQueries([
        //   queryKeys.feeds.lists,
        //   queryKeys.maps.marker,
        // ]);
        // await router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmitFeedPost}>
      <FeedPostTitle
        historyBack={() => router.back()}
      />
      <FeedPostForm />
    </form>
  );
};
function fileUpload(_id: any) {
  throw new Error("Function not implemented.");
}

