import React from "react";
import useModalStore, { ModalType, OpenType } from "../states/store/modalStore";

export type Element = React.MutableRefObject<HTMLDivElement> | any;

export default function useModal(ele: Element) {
  const { setModalType, setIsOpen, setOpenType } = useModalStore();

  const onRequestClose = () => {
    setIsOpen(false);
    setModalType(ModalType.EMPTY);
    setOpenType(OpenType.SLIDE);
  };

  const outerClickEvent = (e: React.MouseEvent) => {
    const { target } = e;
    if (ele && ele.current) {
      const elements = ele.current.contains(target as Node);
      if (!elements) onRequestClose();
    }
  };

  return { onRequestClose, outerClickEvent };
}
