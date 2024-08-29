import { IoLocate, IoLocation } from "react-icons/io5";
import * as styles from "./styles/LocationTabs.css";
import { Typography } from "@components/common/typography/Typography";
import classNames from "classnames";
import FlexBox from "@components/common/boxes/FlexBox";
import { primaryIconColor } from "@styles/theme.css";

export enum LocationType {
  MAP = "map",
  ADDRESS = "address",
}

export interface LocationTabsProps {
  locationType: LocationType;
  onClick: (type: LocationType) => void;
}

export const LocationTabs = ({ locationType, onClick }: LocationTabsProps) => {
  const handleClick = (type: LocationType) => {
    onClick(type);
  };

  return (
    <FlexBox
      className={styles.addressSearchTab}
      flexDirection={"row"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      gap={4}
    >
      <button
        className={classNames(
          styles.tabButton,
          `${
            locationType === LocationType.MAP
              ? styles.currentTabActive
              : styles.currentTabUnActive
          }`
        )}
        onClick={() => handleClick(LocationType.MAP)}
      >
        <IoLocation
          color={
            locationType === LocationType.MAP ? primaryIconColor : "#e3e3e3"
          }
          size={20}
        />
        <Typography
          as={"span"}
          color={locationType === LocationType.MAP ? "primary" : "gray300"}
          fontSize={14}
        >
          지도로 검색
        </Typography>
      </button>
      <button
        className={classNames(
          styles.tabButton,
          `${
            locationType === LocationType.ADDRESS
              ? styles.currentTabActive
              : styles.currentTabUnActive
          }`
        )}
        onClick={() => handleClick(LocationType.ADDRESS)}
      >
        <IoLocate
          color={
            locationType === LocationType.ADDRESS ? primaryIconColor : "#e3e3e3"
          }
          size={20}
        />
        <Typography
          as={"span"}
          color={locationType === "address" ? "primary" : "gray300"}
          fontWeight={300}
          fontSize={14}
        >
          주소로 검색
        </Typography>
      </button>
    </FlexBox>
  );
};
