import { OptionLists } from "@components/management/OptionLists";
import { ReactElement } from "react";

export default function ManagementPage(): ReactElement {
  return (
    <div>
      <div>
        프로필 공간
      </div>
      <OptionLists />
    </div>
  );
}
