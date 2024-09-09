import { Comment } from "@interfaces/feeds/comment";
import { Typography } from "@components/common/typography/Typography";
import { Avatar } from "@components/common/avatar/Avatar";

interface CommentListProps {
  comments: Comment[];
}

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <ul>
      {comments.map((value, index) => {
        return (
          <li key={`comment-${index}`}>
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
