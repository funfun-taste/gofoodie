'use client';

import {ReactElement} from "react";
import {useForm} from "react-hook-form";
import {ProfileEditForm} from "@components/management/profile/ProfileEditForm";
import {ProfileTitleBox} from "@components/management/profile/ProfileTitleBox";

interface ProfileUpdateState {
  nickname: '',
}

export const ProfileEdit = (): ReactElement => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileUpdateState>({
    values: { nickname: ''},
  });


  return (
    <form>
      <ProfileTitleBox title={'프로필'} onSubmit={() => {}} />
      <ProfileEditForm />
    </form>
  )
}