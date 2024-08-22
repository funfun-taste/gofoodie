import { ReactElement } from "react";
import {TitleBox} from "@components/common/boxes/TitleBox";
import {IoIosArrowBack} from "react-icons/io";

export default function TimelinePage(): ReactElement {
  return (
    <div>
      <TitleBox title={"타임라인"}>
        <button type="button" >
          <IoIosArrowBack size={18} color={"#7a7a7a"} />
        </button>
      </TitleBox>
      <ul>
        <li>전다훈님이 좋아요를 눌렀습니다.</li>
      </ul>
    </div>
  )
}