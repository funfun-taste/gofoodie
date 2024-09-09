"use client";

import { ReactElement } from "react";
import * as styles from "./styles/OptionLists.css";
import { Typography } from "@components/common/typography/Typography";
import { useAuth } from "@providers/AuthProvider";
import { Cookies } from "react-cookie";
import { signOut } from "next-auth/react";
import { queryClient } from "@lib/tanstack/queryClient";
import { DOMAIN } from "@config/processConfig";

export const OptionLists = (): ReactElement => {
  const { isLogin } = useAuth();
  const cookies = new Cookies();

  const handleClickSignOut = async () => {
    queryClient.invalidateQueries();
    cookies.remove("Authorization", {
      domain: DOMAIN,
      path: "/",
    });
    cookies.remove("foodie-id", {
      domain: DOMAIN,
      path: "/",
    });
    await signOut();
  };

  return (
    <section className={styles.managementItemContainer}>
      <ul className={styles.managementItemList}>
        <li className={styles.managementItem}>
          <Typography fontSize={14} color={"gray400"} fontWeight={300}>
            공지사항
          </Typography>
        </li>
        {isLogin && (
          <>
            <li className={styles.managementItem}>
              <button type="button" onClick={handleClickSignOut}>
                <Typography
                  as={"span"}
                  fontSize={14}
                  color={"gray400"}
                  fontWeight={300}
                >
                  로그아웃
                </Typography>
              </button>
            </li>
            <li className={styles.managementItem}>
              <Typography fontSize={14} color={"gray400"} fontWeight={300}>
                회원탈퇴
              </Typography>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};
