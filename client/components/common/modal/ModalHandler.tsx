"use client";

import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import useModalStore, { ModalType, OpenType } from "@store/modalStore";
import * as styles from "./styles/BottomUpSlider.css";
import useModal from "@hooks/useModal";
import { BottomUpSlider } from "@components/common/modal/BottomUpSlider";
import { FadeModal } from "./FadeModal";

type Modal = PropsWithChildren;

export type ModalProps = {
  isOpen: boolean;
  ele: Element | any;
  outerClick?: boolean;
} & Modal;

interface ModalHandlerProps extends PropsWithChildren {
  outerClick?: boolean;
  modalType: ModalType;
}

export const ModalHandler = (props: ModalHandlerProps) => {
  const [showChild, setShowChild] = useState(false);
  const { children, outerClick, modalType } = props;
  const { isOpen, type, openType: modalOpenType } = useModalStore();
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

  const open = useMemo((): boolean => {
    return isOpen && modalType === type;
  }, [isOpen, modalType]);

  const modalHandler = useCallback(
    (children: ReactNode): ReactElement => {
      if (modalOpenType === OpenType.FADE)
        return (
          <>
            <div
              className={styles.modalBackGroundLayer}
              onClick={outerClickEvent}
              style={{
                opacity: open ? "1" : "0",
                visibility: open ? "visible" : "hidden",
              }}
            />
            <FadeModal ele={ele} isOpen={open}>
              {children}
            </FadeModal>
          </>
        );

      return (
        <>
          <div
            className={styles.modalBackGroundLayer}
            onClick={outerClickEvent}
            style={{
              opacity: open ? "1" : "0",
              visibility: open ? "visible" : "hidden",
            }}
          />
          <BottomUpSlider ele={ele} isOpen={open}>
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
