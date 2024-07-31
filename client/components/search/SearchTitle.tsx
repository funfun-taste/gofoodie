'use client';

import {IoIosArrowBack} from "react-icons/io";
import {primaryIconColor} from "@styles/theme.css";
import {useRouter} from "next/navigation";
import {TitleBox} from "@components/common/boxes/TitleBox";

export const SearchTitle = () => {
  const router = useRouter();
  const handleCloseSearch = () => {
    router.push("/");
  };

  return (
    <TitleBox title={'검색'}>
      <button onClick={handleCloseSearch} type={'button'} aria-label={"close_search_page_button"}>
        <IoIosArrowBack size={24} color={primaryIconColor}/>
      </button>
    </TitleBox>
  )
}
