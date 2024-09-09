import React, { ReactElement } from "react";
import * as styles from "./Layout.css";
import { AppBanner } from "@components/landing/AppBanner";
import { MenuBar } from "@components/navigation/MenuBar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props): ReactElement => {
  return (
    <main className={styles.appLayout}>
      <AppBanner />
      <div className={styles.appContainer}>
        {children}
        <div id="modal" />
        <MenuBar />
      </div>
    </main>
  );
};
