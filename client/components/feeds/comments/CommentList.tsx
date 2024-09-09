import { Comment } from "@interfaces/feeds/comment";
import { Typography } from "@components/common/typography/Typography";
import { Avatar } from "@components/common/avatar/Avatar";
import * as styles from "./styles/CommentList.css";

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
            <Typography>{value.comment}</Typography>
          </li>
        );
      })}
    </ul>
  );
};
