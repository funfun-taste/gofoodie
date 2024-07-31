'use client';

import {SearchBar} from "@components/search/SearchBar";
import {useEffect, useState} from "react";
import * as styles from './styles/SearchForm.css';
import {KeywordLists} from "@components/search/KeywordLists";

export interface Keywords {
  id: number;
  text: string;
}

export const SearchForm = () => {
  const [keywords, setKeywords] = useState<Keywords[]>([]);

  // 검색어 추가
  useEffect(() => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem("keywords") || "[]";
      setKeywords(JSON.parse(result));
    }
  }, []);

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text,
    };
    const maxKeywordLists = keywords.splice(0, 10); // 최대 10개만
    const keywordLists = [newKeyword, ...maxKeywordLists];
    setKeywords([...keywordLists]);
    localStorage.setItem('keywords', JSON.stringify(keywordLists))
  };

  const onDeleteKeyword = (keywordId: number) => {
    const newKeyword = keywords.filter(keyword => keyword.id !== keywordId);
    setKeywords(newKeyword);
    localStorage.setItem('keywords', JSON.stringify(newKeyword))
  }

  const onDeleteAll = () => {
    setKeywords([])
    localStorage.removeItem('keywords');
  }

  return (
    <div className={styles.SearchFormLayout}>
      <SearchBar onAddKeyword={handleAddKeyword}/>
      <KeywordLists onDeleteAll={onDeleteAll} onDeleteKeyword={onDeleteKeyword} keywords={keywords || []}/>
    </div>
  )
}
