"use client";

import * as styles from "./styles/CommentForm.css";
import { IoIosSend } from "react-icons/io";

export const CommentForm = () => {
  return (
    <form className={styles.commentFormLayout}>
      <div className={styles.commentBox}>
        <input
          placeholder={"여러분의 생각을 이야기 해주세요.!"}
          type={"text"}
          className={styles.commentInputText}
        />
        <button type={"submit"} className={styles.commentSubmitButton}>
          <IoIosSend color={"#fff"} size={24} />
        </button>
      </div>
    </form>
  );
};
