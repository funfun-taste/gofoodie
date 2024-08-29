import { ReactElement } from "react";
import * as styles from "./styles/FeedPostForm.css";
import FlexBox from "@components/common/boxes/FlexBox";
import { Avatar } from "@components/common/avatar/Avatar";
import { Textarea } from "@components/common/textarea/Textarea";
import { Typography } from "@components/common/typography/Typography";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from "@components/common/buttons/Button";
import { FiMapPin } from "react-icons/fi";
import { FileUploadButton } from "@components/common/buttons/FileUploadButton";
import Image from "next/image";
import { User } from "@interfaces/users/user";
import { FeedPostBody } from "@interfaces/feeds/feed.post";
import { ModalHandler } from "@components/common/modal/ModalHandler";
import { ShopLocation } from "@components/shop/ShopLocation";
import useModalStore, { ModalType, OpenType } from "@store/modalStore";
import { MessageDialog } from "@components/common/dialog/MessageDialog";

interface FeedPostFormProps {
  user: User;
  postForm: FeedPostBody;
  previewUrl: string[];
  onChangeTextarea: (content: string) => void;
  onChangeFileList: (previewUrls: string[], fileList: File[]) => void;
  onClickModalIsOpen: () => void;
  onClickRemoveLocation: () => void;
  onClickConfirmed: (add: boolean) => void;
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
    onClickConfirmed,
  } = props;

  const type = useModalStore((state) => state.type);

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

      {type === ModalType.REGISTER_SHOP && (
        <ModalHandler modalType={ModalType.REGISTER_SHOP}>
          <ShopLocation />
        </ModalHandler>
      )}

      {type === ModalType.REGISTER_MAP && (
        <ModalHandler modalType={ModalType.REGISTER_MAP}>
          <MessageDialog
            message="내 지도에 표시하시겠습니다?"
            onClickConfirmed={onClickConfirmed}
          />
        </ModalHandler>
      )}
    </div>
  );
};
