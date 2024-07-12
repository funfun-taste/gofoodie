import { TitleBox } from "@components/common/boxes/TitleBox";
import { ReactElement } from "react";
import { IoIosArrowBack } from "react-icons/io";

interface FeedPostTitleProps {
  onClickFeedSave: () => void;
  historyBack: () => void;
}

export const FeedPostTitle = ({
  onClickFeedSave,
  historyBack,
}: FeedPostTitleProps): ReactElement => {
  return (
    <TitleBox title="피드">
      <button type="button" onClick={historyBack}>
        <IoIosArrowBack size={18} color={"#7a7a7a"} />
      </button>

      <button type="button" onClick={onClickFeedSave}>
        저장
      </button>
    </TitleBox>
  );
};
