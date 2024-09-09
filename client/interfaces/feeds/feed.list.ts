export interface FeedDetailSate {
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

export interface FeedUser {
  username: string;
  profileImage: string;
}

interface FeedFiles {
  name: string;
  path: string;
}

interface FeedShop {
  category: string;
  fullAddress: string;
  title: string;
}

export interface FeedsList {
  feedId: string;
  content: string;
  createdDate: Date;
  shop?: FeedShop;
  files?: FeedFiles[];
  user: FeedUser;
}

export interface Feed extends FeedsList {}
