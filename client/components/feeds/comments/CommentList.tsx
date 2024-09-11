import { Comment } from "@interfaces/feeds/comment";
import { Typography } from "@components/common/typography/Typography";
import { Avatar } from "@components/common/avatar/Avatar";
import * as styles from "./styles/CommentList.css";
import { formatDate } from "@utils/date";
import FlexBox from "@components/common/boxes/FlexBox";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  DropdownItem,
  DropdownMenu,
} from "@components/common/menu/DropdownMenu";

interface CommentListProps {
  comments: Comment[];
}

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <ul className={styles.commentListLayout}>
      {comments.map((value, index) => {
        return (
          <li key={`comment-${index}`} className={styles.commentItem}>
            <div>
              <Avatar src={""} alt={""} />
            </div>
            <FlexBox flexDirection={"column"} alignItems={"flex-start"} gap={2}>
              <FlexBox flexDirection={"row"} justifyContent={"space-between"}>
                <FlexBox
                  flexDirection={"row"}
                  justifyContent={"flex-start"}
                  gap={8}
                >
                  <Typography fontWeight={600} fontSize={14}>
                    {value.user.username}
                  </Typography>
                  <Typography fontSize={12} color={"gray400"}>
                    {formatDate(new Date(value.createdDate))}
                  </Typography>
                </FlexBox>

                <DropdownMenu
                  variant={"icon"}
                  isOpen={false}
                  onClickDropDown={() => {}}
                  icon={<HiOutlineDotsVertical color={"#989898"} size={16} />}
                >
                  <DropdownItem onClick={() => alert("test1")}>
                    <Typography
                      fontSize={13}
                      color={"black100"}
                      fontWeight={500}
                    >
                      수정
                    </Typography>
                  </DropdownItem>
                  <DropdownItem onClick={() => alert("test2")}>
                    <Typography
                      fontSize={13}
                      color={"black100"}
                      fontWeight={500}
                    >
                      삭제
                    </Typography>
                  </DropdownItem>
                </DropdownMenu>
              </FlexBox>

              <div>
                <Typography fontWeight={400} fontSize={14}>
                  {value.comment}
                </Typography>
              </div>
            </FlexBox>
          </li>
        );
      })}
    </ul>
  );
};
