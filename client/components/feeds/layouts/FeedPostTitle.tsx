import { TitleBox } from "@components/common/boxes/TitleBox";
import { Button } from "@components/common/buttons/Button";
import { Typography } from "@components/common/typography/Typography";
import { ReactElement } from "react";
import { IoIosArrowBack } from "react-icons/io";

interface FeedPostTitleProps {
  historyBack: () => void;
}

export const FeedPostTitle = ({
  historyBack,
}: FeedPostTitleProps): ReactElement => {
  return (
    <TitleBox title="피드">
      <button type="button" onClick={historyBack}>
        <IoIosArrowBack size={18} color={"#7a7a7a"} />
      </button>

      <Button type="submit">
        <Typography as="span" fontSize={14} color={"white000"} fontWeight={300}>
          포스팅
        </Typography>
      </Button>
    </TitleBox>
  );
};
