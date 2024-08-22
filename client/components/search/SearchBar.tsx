'use client';

import * as styles from './styles/SearchBar.css';
import React, {useCallback, useState} from "react";
import {useRouter} from "next/navigation";

interface SearchBarProps {
  onAddKeyword: (string: string) => void;
  keyword?: string;
}

export const SearchBar = (props: SearchBarProps) => {
  const {onAddKeyword, keyword} = props;
  const [searchValue, setSearchValue] = useState(keyword || "");
  const router = useRouter();

  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      if (searchValue.length === 0) {
        alert("키워드를 입력해 주세요.");
        return;
      }
      // await router.push(`/search/result?keyword=${encodeURIComponent(searchValue)}`);
      onAddKeyword(searchValue);
      setSearchValue("");
    },
    [searchValue, router, onAddKeyword]
  );


  return (
    <form onSubmit={onSubmit}>
      <label className={styles.searchInputLabel}>
        <input
          value={searchValue}
          onChange={onChangeSearch}
          placeholder={"지역, 장소, 메뉴 검색"}
          type={"search"}
          className={styles.searchInput}
        />
      </label>
    </form>
  )
}
