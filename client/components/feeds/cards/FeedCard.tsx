import {ReactElement} from "react";
import {Feed} from "@interfaces/feeds/feed.list";
import * as styles from '../styles/FeedCard.css';
import FlexBox from "@components/common/boxes/FlexBox";
import Link from "next/link";
import {Avatar} from "@components/common/avatar/Avatar";
import {Typography} from "@components/common/typography/Typography";
import {CarouselSwipe} from "@components/common/carousel/CarouselSwipe";
import {FaComment, FaRegHeart} from "react-icons/fa6";
import {formatDate} from "@utils/date";
import {HiOutlineDotsVertical} from "react-icons/hi";

interface FeedCardProps {
  feed: Feed;
}

export const FeedCard = ({feed}: FeedCardProps): ReactElement => {
  const {feedId, content, createdDate, user, shop, files} = feed;
  return (
    <article className={styles.feedCardLayout}>
      <FlexBox gap={10} flexDirection={"row"} justifyContent={"flex-start"}>
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
        <FlexBox gap={10} flexDirection={"row"} justifyContent={"flex-end"}>
          <Typography as={"span"} color={"gray400"} fontSize={12}>
            {formatDate(new Date(createdDate))}
          </Typography>
          <HiOutlineDotsVertical color={"#989898"} size={16}/>
        </FlexBox>
      </FlexBox>

      <div className={styles.contentBox}>
        <Typography fontSize={14} fontWeight={300}>
          {content}
        </Typography>
      </div>

      {files && files.length > 0 && <CarouselSwipe items={files}/>}

      {shop && Object.entries(shop) && (
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
        className={styles.storeOptions}>
        <FaRegHeart color={"#888888"}/>
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          0
        </Typography>
        <FaComment color={"#888888"}/>
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          0
        </Typography>
      </FlexBox>
    </article>
  )
}
