import React, { ReactElement } from "react";
import * as styles from "./Layout.css";
import { AppBanner } from "@components/landing/AppBanner";
import { Header } from "@components/header/Header";
import { MenuBar } from "@components/navigation/MenuBar";
import { ModalContainer } from "@components/common/modal/ModalHandler";
import { Footer } from "./footer/Footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props): ReactElement => {
  return (
    <main className={styles.appLayout}>
      <AppBanner />
      <div className={styles.appContainer}>
        <Header />
        {children}
        <Footer />
        <ModalContainer />
        <MenuBar />
      </div>
    </main>
  );
};
