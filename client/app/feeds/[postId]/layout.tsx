import React from "react";
import { HistoryBackTitleBox } from "@components/common/boxes/HistoryBackTitleBox";

export default function ManagementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HistoryBackTitleBox title={"마이피드"} />
      {children}
    </div>
  );
}
