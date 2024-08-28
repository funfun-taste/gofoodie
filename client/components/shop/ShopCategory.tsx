import FlexBox from "@components/common/boxes/FlexBox";
import classNames from "classnames";
import { ReactElement } from "react";
import * as styles from "./styles/ShopCategory.css";
import { Typography } from "@components/common/typography/Typography";
import { BorderSelectBox } from "@components/common/select-box/BorderSelectBox";

interface ShopCategoryProps {
  item: any[];
  onChangeCategorySelectBox: (value: string) => void;
}

export const ShopCategory = ({
  item,
  onChangeCategorySelectBox,
}: ShopCategoryProps): ReactElement => {
  return (
    <FlexBox
      className={classNames(styles.locationItemWrapper)}
      alignItems={"flex-start"}
      gap={8}
      flexDirection={"column"}
    >
      <Typography color={"gray500"} fontSize={14} fontWeight={500}>
        카테고리
      </Typography>
      <div>
        <BorderSelectBox items={item} onChange={onChangeCategorySelectBox} />
      </div>
    </FlexBox>
  );
};
