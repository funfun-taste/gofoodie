import * as styles from "./styles/RegionFilterBar.css";
import { Typography } from "@components/common/typography/Typography";
import classNames from "classnames";
import { useState } from "react";
import {RegionList} from "@components/feeds/initialState/region";

interface RegionFilterBarProps {
  regionList: RegionList[];
  currentFilter: string;
  onClickHandle: (value: string) => void;
}

export const RegionFilterBar = ({
                                  regionList,
  currentFilter,
  onClickHandle,
}: RegionFilterBarProps) => {
  const [active, setActive] = useState(currentFilter);

  const onClickItem = (key: string, value: string) => {
    onClickHandle(value);
    setActive(key);
  };

  const itemActive = (value: string): boolean => {
    return value === active;
  };

  return (
    <nav className={styles.navBarLayout}>
      <ul className={styles.navBarLists}>
        {regionList.map((list) => {
          return (
            <li
              className={classNames(
                itemActive(list.key) && styles.active,
                styles.filterLabel
              )}
              key={crypto.randomUUID()}
              onClick={() => onClickItem(list.key, list.value)}
            >
              <Typography
                color={itemActive(list.key) ? "white000" : "gray400"}
                fontSize={14}
              >
                {list.label}
              </Typography>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
