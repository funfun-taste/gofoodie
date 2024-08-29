"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement } from "react";
import { ModalProps } from "./ModalHandler";
import useModalHook from "@hooks/useModal";
import * as styles from "./styles/FadeModal.css";

export const FadeModal = (props: ModalProps): ReactElement => {
  const { isOpen, children, ele } = props;
  const { outerClickEvent } = useModalHook(ele);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          className={styles.modalLayout}
          key={"fade-modal-key"}
          onClick={outerClickEvent}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div className={styles.fadeModalContainer}>
            <div className={styles.fadeModalBody} ref={ele}>
              {children}
            </div>
          </motion.div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};
