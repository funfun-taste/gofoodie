import {ReactElement} from "react";
import * as styles from './AvatarCardSkeleton.css';
import FlexBox from "@components/common/boxes/FlexBox";
import classNames from "classnames";

interface SkeletonProps {
  isLoading: boolean;
}


export const AvatarCardSkeleton = (props: SkeletonProps): ReactElement => {
  const {isLoading} = props;
  return (
    <>
      {isLoading ? (
        <div className={styles.skeletonContainer}>
          <FlexBox flexDirection={'column'} gap={10}>
            <div className={classNames(styles.avatar, styles.skeletonOverlay)}/>
            <FlexBox flexDirection={'column'} gap={4}>
              <div className={classNames(styles.description, styles.skeletonOverlay)}/>
              <div className={classNames(styles.description, styles.skeletonOverlay)}/>
              <div className={classNames(styles.description, styles.skeletonOverlay)}/>
            </FlexBox>
          </FlexBox>
        </div>
      ) : null}
    </>
  )
}
