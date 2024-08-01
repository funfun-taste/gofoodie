'use client';

import {Avatar} from "@components/common/avatar/Avatar";
import {Typography} from "@components/common/typography/Typography";
import {Textarea} from "@components/common/textarea/Textarea";

export const ProfileEditForm = () => {
  return (
    <fieldset>
      <legend>
        <Avatar src={''} alt={''} />
      </legend>

      <label>
        <Typography>닉네임</Typography>
        <input type={'text'} />
      </label>

      <Textarea onChangeTextarea={() => {}} />
    </fieldset>
  )
}