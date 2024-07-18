import {ReactElement} from "react";
import {Feed} from "@interfaces/feeds/feed.list";
import * as styles from '../styles/FeedCard.css';
import FlexBox from "@components/common/boxes/FlexBox";
import Link from "next/link";
import {Avatar} from "@components/common/avatar/Avatar";
import {Typography} from "@components/common/typography/Typography";
import {CarouselSwipe} from "@components/common/carousel/CarouselSwipe";
import { FaComment, FaRegHeart } from "react-icons/fa6";

interface FeedCardProps {
  feed: Feed;
}

export const FeedCard = ({feed}: FeedCardProps): ReactElement => {
  const { feedId, content, createdDate, user, shop, files } = feed;
  return (
    <article className={styles.feedCardLayout}>
      <FlexBox gap={10} flexDirection={"row"} justifyContent={"flex-start"}>
        {/*todo 컴포넌트 분리 - card는 서버 컴포넌트로 관리*/}
        <Link href={`/feeds/${feedId}`}>
          <FlexBox
            flexDirection={"row"}
            justifyContent={"space-between"}
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
      </FlexBox>

      <div className={styles.contentBox}>
        <Typography fontSize={14} fontWeight={300}>
          {content}
        </Typography>
      </div>

      {files && files.length > 0 && <CarouselSwipe items={files} />}

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
        <FaRegHeart color={"#888888"} />
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          0
        </Typography>
        <FaComment color={"#888888"} />
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          0
        </Typography>
      </FlexBox>
    </article>
  )
}