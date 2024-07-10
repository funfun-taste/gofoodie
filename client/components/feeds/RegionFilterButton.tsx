import { ReactElement } from "react";
import * as styles from "./RegionFilterButton.css";
import FlexBox from "@components/common/boxes/FlexBox";
import { Typography } from "@components/common/typography/Typography";

interface RegionFilterButtonProps {
  isOpen: boolean;
  onClickFilterOpen: (isOpen: boolean) => void;
}

export const RegionFilterButton = ({
  isOpen,
  onClickFilterOpen,
}: RegionFilterButtonProps): ReactElement => {
  const handleClickFilterOpen = () => {
    onClickFilterOpen(!isOpen);
  };

  return (
    <button
      type={"button"}
      onClick={handleClickFilterOpen}
      className={styles.filterButton}
    >
      <FlexBox flexDirection={"row"} gap={6}>
        {/* <VscSettings size={14} color={"#8c8c8c"} /> */}
        <Typography color={"gray400"} fontSize={12}>
          필터
        </Typography>
      </FlexBox>
    </button>
  );
};
