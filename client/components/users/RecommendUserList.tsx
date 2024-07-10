import FlexBox from "@components/common/boxes/FlexBox";
import { AvatarCardSkeleton } from "@components/common/skeleton/AvatarCardSkeleton";
import { Typography } from "@components/common/typography/Typography";
import { ReactElement } from "react";

interface RecommendUserProps {
  pending: boolean;
  recommendUserList: any[];
}

export const RecommendUserList = ({
  pending,
  recommendUserList,
}: RecommendUserProps): ReactElement => {
  if (pending)
    return (
      <div>
        <FlexBox gap={12}>
          <AvatarCardSkeleton isLoading={true} />
          <AvatarCardSkeleton isLoading={true} />
          <AvatarCardSkeleton isLoading={true} />
          <AvatarCardSkeleton isLoading={true} />
        </FlexBox>
      </div>
    );

  return (
    <div>
      <FlexBox gap={12}>
        {recommendUserList.length === 0 ? (
          <div>
            <p>미식가가 없어요 ㅠ.ㅠ</p>
          </div>
        ) : (
          <>
            {recommendUserList.map((recommendUser) => (
              <div key={recommendUser.id}>
                <Typography>프로필 이미지</Typography>
                <Typography>닉네임</Typography>

                <button>팔로우</button>
              </div>
            ))}
          </>
        )}
      </FlexBox>
    </div>
  );
};
