
import { CSSProperties, ReactElement } from "react";
import * as styles from "./styles/Skeleton.css";

interface SkeletonProps {
  isLoading: boolean;
  width?: string | number;
  height?: string | number;
}

export const Skeleton = (props: SkeletonProps): ReactElement => {
  const { isLoading, width, height } = props;

  const auto = width === 'auto' ? 'auto' : `${width}px`

  const inlineStyle: CSSProperties = {
    width: auto,
    height: `${height}px`,
  };

  return (
    <>
      {isLoading ? (
        <div style={inlineStyle} className={styles.loadingMapOverlay} />
      ) : null}
    </>
  );
};
