import { ReactElement } from "react";
import * as styles from "./Footer.css";
import FlexBox from "@components/common/boxes/FlexBox";

export const Footer = (): ReactElement => {
  return (
    <footer className={styles.footerLayout}>
      <div className={styles.information}>
        <div>
          <p className={styles.informationLabel}>운영 시간 : 09:00 ~ 18:00</p>
          <p className={styles.informationLabel}>점심 시간 : 12:30 ~ 13:30</p>
          <p className={styles.informationLabel}>주말 및 공휴일 휴무</p>
        </div>
        <address>
          <p className={styles.informationLabel}>대표자 : 전다훈</p>
          <p className={styles.informationLabel}>
            이메일 : gofoodie.team@gmail.com
          </p>
        </address>
      </div>
      <div className={styles.copyright}>
        <p className={styles.copyrightLabel}>
          ⓒ 2024. goFoodie. All rights reserved.
        </p>
        <FlexBox flexDirection="row" gap={10}>
          <p className={styles.copyrightLabel}>이용약관</p>
          <p className={styles.copyrightLabel}>개인정보처리방침</p>
        </FlexBox>
      </div>
    </footer>
  );
};
