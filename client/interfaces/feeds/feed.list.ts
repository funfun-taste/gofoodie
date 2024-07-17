
export interface FeedDetailSate  {
  shop: {
    shopName: string;
    shopCategory: string;
    shopAddress: {
      name: string;
      sido: string;
      sigungu: string;
      fullAddress: string;
      x: string;
      y: string;
    };
  };
}
export interface RecentlyFeedListsState  {}

export interface FeedListUser {
  userId: string;
  username: string;
  nickname: string;
  profileImage: string;
  creatorId: string;
}

export interface FeedThumbnail {
  originName: string;
  path1: string;
}

export interface FeedListShop {
  shopId: string;
  shopName: string;
  shopDescription: string;
  shopCategory: string;
  shopAddress: {
    sido: string;
    sigungu: string;
    fullAddress: string;
  };
}

export interface FeedLists {
  feedId: string;
  feedContent: string;
  feedCreatedDate: string;
  user: FeedListUser;
  shop: FeedListShop | null;
  files: FeedThumbnail[];
}
