import { OptionLists } from "@components/management/OptionLists";
import { ReactElement } from "react";
import { ProfileBox } from "@components/management/profile/ProfileBox";
import FlexBox from "@components/common/boxes/FlexBox";

export default function ManagementPage(): ReactElement {
  return (
    <FlexBox flexDirection={"column"} justifyContent={"flex-start"}>
      <ProfileBox />
      <OptionLists />
    </FlexBox>
  );
}
