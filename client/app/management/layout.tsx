import "@styles/reset.scss";
import React from "react";
import { ManagementTitle } from "@components/management/ManagementTitle";
import { Footer } from "@components/footer/Footer";
import * as styles from "./page.css";

export default function ManagementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.managementPageLayout}>
      <ManagementTitle />
      <div className={styles.managementPageContainer}>
        {children}
        <Footer />
      </div>
    </div>
  );
}
