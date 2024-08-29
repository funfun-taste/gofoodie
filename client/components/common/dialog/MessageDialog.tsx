"use client";

import FlexBox from "../boxes/FlexBox";
import { Button } from "../buttons/Button";
import { Typography } from "../typography/Typography";

interface MessageDialogProps {
  message?: string;
  onClickConfirmed?: boolean;
}

export const MessageDialog = ({
  message,
  onClickConfirmed,
}: MessageDialogProps) => {
  return (
    <FlexBox flexDirection="column">
      <div>
        <Typography>{message}</Typography>
      </div>
      <div>
        <Button>글만 작성할래요</Button>
        <Button>지도에 표시할래요</Button>
      </div>
    </FlexBox>
  );
};
