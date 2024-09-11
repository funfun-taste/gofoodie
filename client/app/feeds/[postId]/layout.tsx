import React from "react";
import { HistoryBackTitleBox } from "@components/common/boxes/HistoryBackTitleBox";
import * as styles from "./page.css";

export default function ManagementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.feedDetailsPageLayout}>
      <HistoryBackTitleBox title={"마이피드"} />
      {children}
    </div>
  );
}
