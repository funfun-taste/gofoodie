import * as styles from "./HorizontalBar.css";
import {PropsWithChildren} from "react";

interface HorizontalNavBarProps extends PropsWithChildren {
  onClickHandle?: (value: string) => void;
}

export const HorizontalBar = ({
                                onClickHandle,
                                children,
                              }: HorizontalNavBarProps) => {

  return (
    <nav className={styles.customNavBarLayout}>
      <div className={styles.navBarLists}>{children}</div>
    </nav>
  );
};
