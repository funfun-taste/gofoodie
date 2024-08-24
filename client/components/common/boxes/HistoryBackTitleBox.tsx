"use client";

import { ReactElement } from "react";
import { TitleBox } from "@components/common/boxes/TitleBox";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface HistoryBackTitleBoxProps {
  title: string;
}

export const HistoryBackTitleBox = ({
  title,
}: HistoryBackTitleBoxProps): ReactElement => {
  const router = useRouter();

  const handleClickHistoryBack = () => {
    router.back();
  };
  return (
    <TitleBox title={title}>
      <button type="button" onClick={handleClickHistoryBack}>
        <IoIosArrowBack size={18} color={"#7a7a7a"} />
      </button>
    </TitleBox>
  );
};
