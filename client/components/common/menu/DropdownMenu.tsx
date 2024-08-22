'use client';

import * as styles from './styles/DropdownMenu.css';
import {Children, cloneElement, PropsWithChildren, ReactElement, ReactNode} from "react";
import {Typography} from "@components/common/typography/Typography";
import {motion,} from 'framer-motion';

type Variant = 'icon' | 'default'

interface DropdownMenuProps {
  isOpen: boolean; // 아이템 박스 보여주기 여부
  onClickDropDown: () => void; // 버튼 이벤트
  label?: string; // 버튼 라벨
  icon?: ReactNode; // 아이콘
  children: ReactNode; // 드랍다운 메뉴 아이템
  variant?: Variant; // 버튼 타입
  width?: string | number; // 버튼 크기
  height?: string | number; // 버튼 높이
}

export const DropdownMenu = ({
                               children,
                               isOpen,
                               onClickDropDown,
                               label,
                               icon,
                               width,
                               height,
                               variant = 'default'
                             }: DropdownMenuProps): ReactElement => {

  const handleClickDropdownItem = (originalOnClick?: () => void) => {
    if (originalOnClick) originalOnClick();
    onClickDropDown();
  };

  return (
    <div className={styles.dropdownMenuLayout}>
      <button type={'button'}  className={styles.dropdownButtonVariants[variant]} onClick={onClickDropDown}>
        {!!icon && icon}
        <Typography fontWeight={500}>
          {label}
        </Typography>
      </button>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen && (
          <div className={styles.dropdownMenu}>
            {Children.map(children, (child) => cloneElement(child as ReactElement, {
              onClick: () => handleClickDropdownItem((child as ReactElement).props.onClick)
            }))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

interface DropdownItemProps extends PropsWithChildren {
  onClick?: () => void;
}

export const DropdownItem = ({children, onClick}: DropdownItemProps) => {
  return (
      <div className={styles.dropdownItem} onClick={onClick}>
        {children}
      </div>
  )
}