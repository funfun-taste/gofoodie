"use client";

import { ReactElement } from "react";
import { TitleBox } from "@components/common/boxes/TitleBox";
import { IoIosArrowBack } from "react-icons/io";

export const ManagementTitle = (): ReactElement => {
  const handleClickHistoryBack = () => {
    //todo 뒤로가기
  };
  return (
    <TitleBox title="마이페이지">
      <button type="button" onClick={handleClickHistoryBack}>
        <IoIosArrowBack size={18} color={"#7a7a7a"} />
      </button>
    </TitleBox>
  );
};
