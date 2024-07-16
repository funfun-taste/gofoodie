"use client";

import { FormEventHandler, ReactElement, useState } from "react";
import * as styles from "./FeedPostForm.css";
import FlexBox from "@components/common/boxes/FlexBox";
import { Avatar } from "@components/common/avatar/Avatar";
import { Textarea } from "@components/common/textarea/Textarea";
import { Typography } from "@components/common/typography/Typography";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from "@components/common/button/Button";
import { FiMapPin } from "react-icons/fi";
import { FileUploadButton } from "@components/common/button/FileUploadButton";
import Image from "next/image";
import { queryClient } from "@lib/tanstack/queryClient";
import { User } from "@interfaces/users/user";
import useModalStore from "@store/modalStore";
import { postImageUploadApud } from "@apis/files/upload.api";
import { feedSubmitApi } from "@apis/feeds/create.feed.api";
import { FeedPostBody } from "@interfaces/feeds/feed.post";

export const FeedPostForm = (): ReactElement => {
  const { setIsOpen, setModalType } = useModalStore();
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
  const [previewUrl, setPreviewUrl] = useState<string[]>([]);
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

  const onChangeTextarea = (content: string) => {
    setPostForm({
      ...postForm,
      content,
    });
  };

  const fileUpload = async (postId: string) => {
    const { files } = postForm;
    const formData = new FormData();

    files.forEach((file: File) => {
      formData.append(`files`, file);
    });

    try {
      await postImageUploadApud(postId, formData);
    } catch (e) {
      console.log(e);
    }
  };


  const handleClickRemoveLocationData = () => {
    // setFeedItem({
    //   title: "",
    //   category: "",
    //   address: {
    //     name: "",
    //     sigungu: "",
    //     sido: "",
    //     x: "",
    //     y: "",
    //   },
    // });
  };

  const handleClickLocation = async () => {
    // setModalType("registerShop");
    setIsOpen(true);
  };

  const handleChangeFile = (previewUrls: string[], fileList: File[]) => {
    setPreviewUrl(previewUrls);
    setPostForm({
      ...postForm,
      files: fileList,
    });
  };

  return (
    <div className={styles.postLayout}>
      <div className={styles.postLayout}>
        <FlexBox
          className={styles.postBodyContainer}
          flexDirection="row"
          alignItems="flex-center"
          justifyContent="flex-start"
        >
          <div className={styles.avatarWrapper}>
            <Avatar alt={user.nickname} src={user.profileImage} />
          </div>
          <Textarea
            placeholder={"여러분의 이야기를 들려주세요."}
            onChangeTextarea={onChangeTextarea}
          />
        </FlexBox>
        {postForm.item.title.length > 0 && (
          <div className={styles.locationItemContainer}>
            <div className={styles.locationItemBox}>
              <FlexBox
                flexDirection={"row"}
                justifyContent={"space-between"}
                gap={2}
              >
                <FlexBox
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                >
                  <Typography fontSize={14} fontWeight={500}>
                    {item.title}
                  </Typography>
                  <Typography color={"gray400"} fontSize={14} fontWeight={300}>
                    {item.category}
                  </Typography>
                  <Typography color={"gray400"} fontSize={14} fontWeight={300}>
                    {item.address.sido} / {item.address.sigungu}
                  </Typography>
                  <Typography color={"gray400"} fontSize={14} fontWeight={300}>
                    {item.address.name}
                  </Typography>
                </FlexBox>

                <Button
                  className={styles.removeLocationButton}
                  variant={"icon"}
                  onClick={handleClickRemoveLocationData}
                >
                  <IoTrashOutline size={24} color={"#d3d3d3"} />
                </Button>
              </FlexBox>
            </div>
          </div>
        )}
      </div>

      <div>
        <FlexBox
          flexDirection="row"
          justifyContent="space-between"
          className={styles.postOptionContainer}
        >
          <FileUploadButton onFileChange={handleChangeFile} />

          <button type={"button"} onClick={handleClickLocation}>
            <FlexBox flexDirection="row" justifyContent="flex-end" gap={4}>
              <FiMapPin color={"#FF7101"} />
              <Typography color="primary" as="span" fontSize={14}>
                장소
              </Typography>
            </FlexBox>
          </button>
        </FlexBox>
        <div className={styles.imagesContainer}>
          {previewUrl.map((url, index) => (
            <Image
              width={40}
              height={40}
              key={index}
              src={url}
              alt={`Preview ${index}`}
              className={styles.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
