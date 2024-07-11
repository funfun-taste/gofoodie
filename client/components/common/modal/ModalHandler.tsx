"use client";

import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import useModalStore, { ModalType } from "@store/modalStore";
import * as styles from "./BottomUpSlider.css";
import useModalHook from "@hooks/useModal";
import { BottomUpSlider } from "@components/common/modal/BottomUpSlider";
import { SignUpAlert } from "@components/alert-box/SignUpAlert";

type Modal = PropsWithChildren;

export type ModalProps = {
  isOpen: boolean;
  ele: Element | any;
} & Modal;

export const ModalHandler: React.FC<Modal> = (props) => {
  const [showChild, setShowChild] = useState(false);
  const { children } = props;
  const { isOpen } = useModalStore();
  const ele = useRef<HTMLDivElement>(null);

  const { outerClickEvent } = useModalHook(ele);

  const element =
    typeof window !== "undefined" &&
    (document.querySelector("#modal") as HTMLDivElement);

  useEffect(() => {
    setShowChild(true);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      isOpen ? (html.style.overflow = "hidden") : (html.style.overflow = "");
    }
  }, [isOpen]);

  if (!showChild) return null;

  const modalHandler = (children: ReactNode): ReactElement => {
    return (
      <>
        <div
          className={styles.modalBackGroundLayer}
          onClick={outerClickEvent}
          style={{
            opacity: isOpen ? "1" : "0",
            visibility: isOpen ? "visible" : "hidden",
          }}
        />
        <BottomUpSlider ele={ele} isOpen={isOpen}>
          {children}
        </BottomUpSlider>
      </>
    );
  };

  if (!element) return <></>;
  else return <>{ReactDOM.createPortal(modalHandler(children), element)}</>;
};

export const ModalContainer = () => {
  const { type } = useModalStore();
  return (
    <>
      <div id="modal" />
      <ModalHandler>
        {type === ModalType.SIGN_ALERT && <SignUpAlert />}
      </ModalHandler>
    </>
  );
};
