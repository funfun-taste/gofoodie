import { TitleBox } from "@components/common/boxes/TitleBox";
import { ReactElement } from "react";
import { IoIosArrowBack } from "react-icons/io";

interface FeedTitleProps {
  historyBack: () => void;
}

export const FeedTitle = ({ historyBack }: FeedTitleProps): ReactElement => {
  return (
    <TitleBox title={"피드"}>
      <button type="button" onClick={historyBack}>
        <IoIosArrowBack size={18} color={"#7a7a7a"} />
      </button>
    </TitleBox>
  );
};
