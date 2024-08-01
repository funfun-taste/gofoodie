import { OptionLists } from "@components/management/OptionLists";
import { ReactElement } from "react";
import { ProfileBox } from "@components/management/profile/ProfileBox";

export default function ManagementPage(): ReactElement {
  return (
    <div>
      <ProfileBox />
      <OptionLists />
    </div>
  );
}
