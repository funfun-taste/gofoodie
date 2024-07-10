"use client";

import { signOut } from "next-auth/react";

export default function ManagementPage() {
  const handleClick = async () => {
    await signOut();
  };
  return (
    <div>
      관리 페이지
      <button onClick={handleClick}>TEST</button>
    </div>
  );
}
