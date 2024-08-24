"use client";

import {useRouter} from "next/navigation";
import {FeedPostTitle} from "./layouts/FeedPostTitle";
import {FeedPostForm} from "./FeedPostForm";
import {FormEventHandler, useEffect, useState} from "react";
import {FeedPostBody} from "@interfaces/feeds/feed.post";
import {feedSubmitApi} from "@apis/feeds/create.feed.api";
import {postImageUploadApi} from "@apis/files/upload.api";
import useModalStore, {ModalType} from "@store/modalStore";
import {User} from "@interfaces/users/user";
import * as styles from "./styles/FeedPost.css";
import useFeedStore from "@store/feedStore";

const user: User = {
  nickname: "",
  description: "",
  _id: "",
  creatorId: "",
  created_at: new Date(),
  updated_at: new Date(),
  type: "",
  profileImage: "",
  files: [],
  username: "",
};

export const FeedPost = () => {
  const [postForm, setPostForm] = useState<FeedPostBody>({
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
  const [previewUrl, setPreviewUrl] = useState<string[]>([]);
  const {setIsOpen, setModalType} = useModalStore();
  const {item, setFeedItem} = useFeedStore();
  const router = useRouter();

  useEffect(() => {
    setPostForm({
      ...postForm,
      item,
    });
  }, [item]);

  const handleSubmitFeedPost: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();

      const body: FeedPostBody = {
        ...postForm,
      };
      const {data} = await feedSubmitApi(body);
      if (data.result) {
        if (postForm.files.length > 0) {
          const {_id} = data.data;
          await fileUpload(_id);
        }

        //todo 쿼리 초기화 후 마이 피드로 이동
        //   await queryClient.invalidateQueries([
        //   queryKeys.feeds.lists,
        //   queryKeys.maps.marker,
        // ]);
        router.push("/");
        onClickRemoveLocation();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeTextarea = (content: string): void => {
    setPostForm({
      ...postForm,
      content,
    });
  };

  const onChangeFileList = (previewUrls: string[], fileList: File[]): void => {
    setPreviewUrl(previewUrls);

    setPostForm({
      ...postForm,
      files: fileList,
    });
  };

  const onClickModalIsOpen = () => {
    setModalType(ModalType.REGISTER_SHOP);
    setIsOpen(true);
  };

  const onClickRemoveLocation = () => {
    setFeedItem({
      title: "",
      category: "",
      address: {
        name: "",
        sigungu: "",
        sido: "",
        x: "",
        y: "",
      },
    });
  };

  const fileUpload = async (postId: string) => {
    const {files} = postForm;
    const formData = new FormData();

    files.forEach((file: File) => {
      formData.append(`files`, file);
    });

    try {
      await postImageUploadApi(postId, formData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className={styles.feedPostFormLayout} onSubmit={handleSubmitFeedPost}>
      <FeedPostTitle historyBack={() => router.back()}/>
      <FeedPostForm
        user={user}
        postForm={postForm}
        previewUrl={previewUrl}
        onChangeTextarea={onChangeTextarea}
        onChangeFileList={onChangeFileList}
        onClickModalIsOpen={onClickModalIsOpen}
        onClickRemoveLocation={onClickRemoveLocation}
      />
    </form>
  );
};
