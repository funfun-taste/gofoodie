"use client";

import { ReactElement, useState } from "react";
import { Feed } from "@interfaces/feeds/feed.list";
import * as styles from "./styles/FeedCard.css";
import FlexBox from "@components/common/boxes/FlexBox";
import Link from "next/link";
import { Avatar } from "@components/common/avatar/Avatar";
import { Typography } from "@components/common/typography/Typography";
import { CarouselSwipe } from "@components/common/carousel/CarouselSwipe";
import { FaComment, FaRegHeart } from "react-icons/fa6";
import { formatDate } from "@utils/date";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  DropdownItem,
  DropdownMenu,
} from "@components/common/menu/DropdownMenu";

interface FeedCardProps {
  feed: Feed;
}

export const FeedCard = ({ feed }: FeedCardProps): ReactElement => {
  const [show, setShow] = useState(false);
  const { feedId, content, createdDate, user, shop, files } = feed;
  return (
    <div className={styles.feedCardLayout}>
      <FlexBox
        gap={10}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={`/feeds/${feedId}`} className={styles.feedUserBox}>
          <FlexBox
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={10}
          >
            <div className={styles.profileBox}>
              <Avatar
                alt={`${user.username}_profile_image`}
                src={user.profileImage}
              />
            </div>
            <Typography as={"span"} fontSize={14} fontWeight={500}>
              {user.username}
            </Typography>
          </FlexBox>
        </Link>
        <FlexBox
          gap={10}
          flexDirection={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Typography as={"span"} color={"gray400"} fontSize={12}>
            {formatDate(new Date(createdDate))}
          </Typography>
          {/*todo 내 게시글만*/}
          <DropdownMenu
            variant={"icon"}
            isOpen={show}
            onClickDropDown={() => setShow(!show)}
            icon={<HiOutlineDotsVertical color={"#989898"} size={16} />}
          >
            <DropdownItem onClick={() => alert("test1")}>
              <Typography fontSize={13} color={"black100"} fontWeight={500}>
                수정
              </Typography>
            </DropdownItem>
            <DropdownItem onClick={() => alert("test2")}>
              <Typography fontSize={13} color={"black100"} fontWeight={500}>
                삭제
              </Typography>
            </DropdownItem>
          </DropdownMenu>
        </FlexBox>
      </FlexBox>

      <div className={styles.contentBox}>
        <Typography fontSize={14} fontWeight={300}>
          {content}
        </Typography>
      </div>

      {files && files.length > 0 && <CarouselSwipe items={files} />}

      {shop && Object.entries(shop).length > 0 && (
        <div className={styles.storeInfoBox}>
          <Typography fontSize={14} fontWeight={500}>
            {shop?.title}
          </Typography>
          <Typography color={"gray400"} fontSize={14} fontWeight={300}>
            {shop?.fullAddress}
          </Typography>
        </div>
      )}

      <FlexBox
        flexDirection={"row"}
        justifyContent={"flex-start"}
        gap={10}
        className={styles.storeOptions}
      >
        <FaRegHeart color={"#FF7101"} />
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          0
        </Typography>
        <FaComment color={"#FF7101"} />
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          0
        </Typography>
      </FlexBox>
    </div>
  );
};
