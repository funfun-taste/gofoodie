import { ReactElement } from "react";
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
import { User } from "@interfaces/users/user";
import { FeedPostBody } from "@interfaces/feeds/feed.post";

interface FeedPostFormProps {
  user: User;
  postForm: FeedPostBody;
  previewUrl: string[];
  onChangeTextarea: (content: string) => void;
  onChangeFileList: (previewUrls: string[], fileList: File[]) => void;
  onClickModalIsOpen: () => void;
  onClickRemoveLocation: () => void;
}

export const FeedPostForm = (props: FeedPostFormProps): ReactElement => {
  const {
    user,
    postForm,
    previewUrl,
    onChangeTextarea,
    onChangeFileList,
    onClickModalIsOpen,
    onClickRemoveLocation,
  } = props;
  

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
                    {postForm.item.title}
                  </Typography>
                  <Typography color={"gray400"} fontSize={14} fontWeight={300}>
                    {postForm.item.category}
                  </Typography>
                  <Typography color={"gray400"} fontSize={14} fontWeight={300}>
                    {postForm.item.address.sido} /{" "}
                    {postForm.item.address.sigungu}
                  </Typography>
                  <Typography color={"gray400"} fontSize={14} fontWeight={300}>
                    {postForm.item.address.name}
                  </Typography>
                </FlexBox>

                <Button
                  className={styles.removeLocationButton}
                  variant={"icon"}
                  onClick={onClickRemoveLocation}
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
          <FileUploadButton
            onFileChange={(previewUrls: string[], fileList: File[]) =>
              onChangeFileList(previewUrls, fileList)
            }
          />

          <button type={"button"} onClick={onClickModalIsOpen}>
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
