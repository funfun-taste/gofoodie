import {Keywords} from "@components/search/SearchForm";
import * as styles from './styles/KeywordList.css';
import {Typography} from "@components/common/typography/Typography";
import {IoIosCloseCircle} from "react-icons/io";
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
        <button type={'button'} onClick={onDeleteAll}>
          <Typography as={'span'} fontSize={12} color={"gray350"} fontWeight={300}>전체 삭제</Typography>
        </button>
      </FlexBox>

      <ul className={styles.KeywordLists}>
        {keywords.length > 0 && keywords.map((keyword, index) => {
          return (
            <li key={`search_keyword_${keyword.text}_${index}`} className={styles.Keyword}>
              <Typography fontSize={13} color={"black100"}>
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
