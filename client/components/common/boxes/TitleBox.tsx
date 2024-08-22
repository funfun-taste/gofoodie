import { join } from "path";
import { PropsWithChildren } from "react";
import * as styles from "./styles/TitleBox.css";

interface TitleProps extends PropsWithChildren {
  title: string;
}

export const TitleBox = ({ title, children }: TitleProps) => {
  return (
    <header className={styles.titleBoxLayout}>
      <div className={styles.childrenContainer}>{children}</div>
      <div className={styles.title}>{title}</div>
    </header>
  );
};
