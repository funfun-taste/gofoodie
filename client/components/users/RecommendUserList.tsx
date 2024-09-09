import FlexBox from "@components/common/boxes/FlexBox";
import { AvatarCardSkeleton } from "@components/common/skeleton/AvatarCardSkeleton";
import { Fragment, ReactElement } from "react";
import { ProfileCard, ProfileUserCard } from "./cards/ProfileCard";

interface RecommendUserProps {
  pending: boolean;
  recommendUserList: ProfileUserCard[];
}

export const RecommendUserList = ({
  pending,
  recommendUserList,
}: RecommendUserProps): ReactElement => {
  if (pending)
    return (
      <div>
        <FlexBox gap={12}>
          {Array.from({ length: 5 }).map((_, index) => (
            <AvatarCardSkeleton
              isLoading={true}
              key={`recommend_user_${index}`}
            />
          ))}
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
            {recommendUserList.map((user) => (
              <Fragment key={user._id}>
                <ProfileCard user={user} />
              </Fragment>
            ))}
          </>
        )}
      </FlexBox>
    </div>
  );
};
