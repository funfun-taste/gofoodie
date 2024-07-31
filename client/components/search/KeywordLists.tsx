import {Keywords} from "@components/search/SearchForm";
import * as styles from './styles/KeywordList.css';
import {Typography} from "@components/common/typography/Typography";
import {IoIosCloseCircle} from "react-icons/io";
import {BsFillTrashFill} from "react-icons/bs";
import FlexBox from "@components/common/boxes/FlexBox";

interface KeywordListsProps {
  keywords: Keywords[];
  onDeleteKeyword: (keywordId: number) => void;
  onDeleteAll: () => void;
}

export const KeywordLists = (props: KeywordListsProps) => {
  const {keywords, onDeleteKeyword, onDeleteAll} = props;
  return (
    <section className={styles.KeywordListLayout}>
      <FlexBox justifyContent={'flex-end'} alignItems={'flex-end'} gap={6}>
        <Typography>전체 삭제</Typography>
        <button type={'button'} onClick={onDeleteAll}>
          <BsFillTrashFill color={'#4d4d4d'} size={14}/>
        </button>
      </FlexBox>

      <ul className={styles.KeywordLists}>
        {keywords.length > 0 && keywords.map((keyword, index) => {
          return (
            <li key={`search_keyword_${keyword.text}_${index}`} className={styles.Keyword}>
              <Typography fontSize={14}>
                {keyword.text}
              </Typography>
              <button type={'button'} onClick={() => onDeleteKeyword(keyword.id)}>
                <IoIosCloseCircle size={20} color={'#e1e1e1'}/>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
