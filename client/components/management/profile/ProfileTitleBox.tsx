import {IoIosArrowBack} from "react-icons/io";
import {TitleBox} from "@components/common/boxes/TitleBox";

interface ProfileTitleBoxProps {
  title: string,
  onSubmit: () => void;
}

export const ProfileTitleBox = ({title, onSubmit}: ProfileTitleBoxProps) => {
  return (
    <TitleBox title={title}>
      <button type="button" onClick={onSubmit}>
        <IoIosArrowBack size={18} color={"#7a7a7a"} />
      </button>
    </TitleBox>
  )
}