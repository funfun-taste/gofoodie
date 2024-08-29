"use client";

import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import useModalStore from "@store/modalStore";
import * as styles from "./styles/BottomUpSlider.css";
import useModal from "@hooks/useModal";
import { BottomUpSlider } from "@components/common/modal/BottomUpSlider";

type Modal = PropsWithChildren;

export type ModalProps = {
  isOpen: boolean;
  ele: Element | any;
} & Modal;

export const ModalHandler: React.FC<Modal> = (props) => {
  const [showChild, setShowChild] = useState(false);
  const { children } = props;
  const { isOpen, type } = useModalStore();
  const ele = useRef<HTMLDivElement>(null);

  const { outerClickEvent } = useModal(ele);

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

  const modalHandler = useCallback(
    (children: ReactNode): ReactElement => {
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
    },
    [type, outerClickEvent]
  );

  if (!showChild) return null;

  if (!element) return <></>;
  else return <>{ReactDOM.createPortal(modalHandler(children), element)}</>;
};
