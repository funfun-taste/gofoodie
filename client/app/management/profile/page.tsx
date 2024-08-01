import { ReactElement } from "react";
import {User} from "@interfaces/users/user";
import {ProfileEdit} from "@components/management/profile/ProfileEdit";

interface ProfileEditProps {
  user: User;
}

export default function ProfileEditPage({user}: ProfileEditProps): ReactElement {
  return (
    <div>
      <ProfileEdit />
    </div>
  );
}
