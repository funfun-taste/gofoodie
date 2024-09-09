"use client";

import { Avatar } from "@components/common/avatar/Avatar";
import { ReactElement } from "react";
import * as styles from "./styles/ProfileBox.css";
import FlexBox from "@components/common/boxes/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { Button } from "@components/common/buttons/Button";
import { CountsBox } from "@components/management/profile/CountsBox";
import { KakaoButton } from "@components/kakao/KakaoButton";
import { useSession } from "next-auth/react";

export const ProfileBox = (): ReactElement => {
  const { data: session } = useSession();

  return (
    <div className={styles.profileBoxLayout}>
      {!session ? (
        <KakaoButton />
      ) : (
        <>
          <FlexBox flexDirection="row" gap={8} justifyContent="space-between">
            <FlexBox
              flexDirection={"row"}
              justifyContent={"flex-start"}
              gap={10}
            >
              <div>
                <Avatar src={""} alt={""} />
              </div>
              <CountsBox followerCount={0} followingCount={0} postCount={0} />
            </FlexBox>

            <Button width={120} height={38}>
              <Typography fontSize={14} color={"white000"} fontWeight={500}>
                프로필 수정
              </Typography>
            </Button>
          </FlexBox>

          <FlexBox flexDirection={"column"} alignItems="flex-start" gap={10}>
            <Typography fontSize={14} fontWeight={500}>
              전다훈 님 반갑습니다.
            </Typography>
            <Typography fontSize={14} color={"gray400"} fontWeight={300}>
              소개 문구를 넣어주세요.
            </Typography>
          </FlexBox>
        </>
      )}
    </div>
  );
};
