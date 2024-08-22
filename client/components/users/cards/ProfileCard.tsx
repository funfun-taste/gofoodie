'use client';

import React, {ReactElement} from "react";
import * as styles from './styles/ProfileCard.css';
import FlexBox from "@components/common/boxes/FlexBox";
import {Avatar} from "@components/common/avatar/Avatar";
import {Typography} from "@components/common/typography/Typography";
import {Button} from "@components/common/buttons/Button";

export interface ProfileUserCard {
  _id: string;
  username: string;
  profileImage: string;
  description?: string;
}

interface ProfileCardProps {
  user: ProfileUserCard
}

export const ProfileCard = React.memo((props: ProfileCardProps): ReactElement => {
  const {profileImage, username, description} = props.user;
  const follow = null;
  const handleClickFollowButton = () => {
    alert('팔로우')
  }
  return (
    <article className={styles.profileCardLayout}>
      <FlexBox justifyContent={"flex-start"} flexDirection={'column'}>
        <div className={styles.thumbnailImageBox}>
          <Avatar src={profileImage} alt="profile_image"/>
        </div>

        <FlexBox justifyContent={"space-between"} alignItems={"center"} flexDirection={'column'}>
          <Typography fontWeight={600}>{username}</Typography>
          {!!follow && (
            <Typography fontWeight={300} color={"gray500"} fontSize={12}>
              팔로우 {follow} 명
            </Typography>
          )}

          <Typography
            fontWeight={300}
            color={"gray500"}
            className={styles.profileDescription}
          >
            {description}
          </Typography>
        </FlexBox>
        <Button width={90} height={32} onClick={handleClickFollowButton}>
          <Typography as={"span"} color={"white000"}>
            팔로우
          </Typography>
        </Button>
      </FlexBox>
    </article>
  )
})

ProfileCard.displayName = 'ProfileCard';
