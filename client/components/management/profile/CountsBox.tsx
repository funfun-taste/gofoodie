import FlexBox from "@components/common/boxes/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { ReactElement } from "react";

interface CountsBoxProps {
  followerCount: number;
  followingCount: number;
  postCount: number;
}

export const CountsBox = (props: CountsBoxProps): ReactElement => {
  const { followingCount, postCount, followerCount } = props;

  return (
    <section>
      <FlexBox flexDirection="row" justifyContent="flex-start" gap={8}>
        <FlexBox justifyContent="flex-start" gap={8}>
          <FlexBox justifyContent="flex-start" gap={4}>
            <Typography
              as="span"
              fontSize={14}
              color={"black100"}
              fontWeight={700}
            >
              {followerCount}
            </Typography>
            <Typography
              as="span"
              fontSize={14}
              color={"gray400"}
              fontWeight={300}
            >
              팔로워
            </Typography>
          </FlexBox>
          <FlexBox justifyContent="flex-start" gap={4}>
            <Typography
              as="span"
              fontSize={14}
              color={"black100"}
              fontWeight={700}
            >
              {followingCount}
            </Typography>
            <Typography
              as="span"
              fontSize={14}
              color={"gray400"}
              fontWeight={300}
            >
              팔로잉
            </Typography>
          </FlexBox>

          <FlexBox justifyContent="flex-start" gap={4}>
            <Typography
              as="span"
              fontSize={14}
              color={"primary"}
              fontWeight={700}
            >
              {postCount}
            </Typography>
            <Typography
              as="span"
              fontSize={14}
              color={"gray400"}
              fontWeight={300}
            >
              포스팅
            </Typography>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </section>
  );
};
