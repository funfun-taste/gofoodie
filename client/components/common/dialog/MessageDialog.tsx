"use client";

import useModalStore, { ModalType, OpenType } from "@store/modalStore";
import FlexBox from "../boxes/FlexBox";
import { Button } from "../buttons/Button";
import { Typography } from "../typography/Typography";

interface MessageDialogProps {
  message?: string;
  onClickConfirmed: (add: boolean) => void;
}

export const MessageDialog = ({
  message,
  onClickConfirmed,
}: MessageDialogProps) => {
  const { closeModal } = useModalStore();

  const handleClickButton = (add: boolean): void => {
    closeModal();
    onClickConfirmed && onClickConfirmed(add);
  };

  return (
    <FlexBox flexDirection="column">
      <div>
        <Typography>{message}</Typography>
      </div>
      <div>
        <Button onClick={() => handleClickButton(false)}>
          글만 작성할래요
        </Button>
        <Button onClick={() => handleClickButton(true)}>
          지도에 표시할래요
        </Button>
      </div>
    </FlexBox>
  );
};
