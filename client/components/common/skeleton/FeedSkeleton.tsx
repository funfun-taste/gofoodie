
import * as styles from "@components/common/skeleton/FeedSkeleton.css";
import classNames from "classnames";
import FlexBox from "@components/common/boxes/FlexBox";

interface SkeletonProps {
  isLoading: boolean;
}

export const FeedSkeleton = (props: SkeletonProps) => {
  const { isLoading } = props;

  return (
    <>
      {isLoading ? (
        <div className={styles.feedSkeletonContainer}>
          <FlexBox className={styles.feedSkeletonTop}>
            <FlexBox gap={10} justifyContent={'flex-start'}>
              <div className={classNames(styles.skeletonOverlay, styles.avatar)} />
              <div className={classNames(styles.skeletonOverlay, styles.avatarName)} />
            </FlexBox>
            <div className={classNames(styles.skeletonOverlay, styles.subContent)} />
          </FlexBox>

          <div>
            <div className={classNames(styles.skeletonOverlay, styles.content)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
