"use client";

import React, { ReactElement, useState } from "react";
import * as styles from "./styles/ShopLocation.css";
import useModalStore, { ModalType, OpenType } from "@store/modalStore";
import { IoAdd, IoClose } from "react-icons/io5";
import { Typography } from "@components/common/typography/Typography";
import useFeedStore, { LocationState } from "@store/feedStore";
import FlexBox from "@components/common/boxes/FlexBox";
import { KakaoAddressMap } from "@components/kakao/KakaoAddressMap";
import { Button } from "@components/common/buttons/Button";
import { KakaoAddressSearch } from "@components/kakao/KakaoAddressSearch";
import { ShopCategory } from "@components/shop/ShopCategory";
import { ShopTitle } from "@components/shop/ShopTitle";
import { LocationTabs, LocationType } from "./LocationTabs";

const categories = [
  { label: "한식", key: "한식" },
  { label: "카페/디저트", key: "카페/디저트" },
  { label: "중식", key: "분식" },
  { label: "샌드위치", key: "샌드위치" },
  { label: "샐러드", key: "샐러드" },
  { label: "회/초밥", key: "회/초밥" },
  { label: "버거", key: "버거" },
  { label: "일식/돈까스", key: "일식/돈까스" },
  { label: "양식/피자", key: "양식/피자" },
  { label: "아시안", key: "아시안" },
  { label: "고기/구이", key: "고기/구이" },
  { label: "찜/탕", key: "찜/탕" },
  { label: "족발/보쌈", key: "족발/보쌈" },
  { label: "야식", key: "야식" },
  { label: "도시락/죽", key: "도시락/죽" },
];

export const ShopLocation = (): ReactElement => {
  const { setIsOpen, setModalType, type, setOpenType } = useModalStore();
  const [locationData, setLocationData] = useState<LocationState>({
    title: "",
    category: "한식",
    mapRegister: false,
  });
  const { setFeedItem, item } = useFeedStore();
  const [locationType, setLocationType] = useState<LocationType>(
    LocationType.MAP
  );

  const handleClickLocationForm = () => {
    setIsOpen(false);
    setModalType(ModalType.EMPTY);
  };

  const handleClickSendLocationData = () => {
    setModalType(ModalType.REGISTER_MAP);
    setOpenType(OpenType.FADE);

    setFeedItem({
      ...item,
      ...locationData,
    });
  };

  const handleChange = (name: string, value: string) => {
    setLocationData({
      ...locationData,
      [name]: value,
    });
  };

  const onChangeCategorySelectBox = (value: string) => {
    setLocationData({
      ...locationData,
      category: value,
    });
  };

  return (
    <>
      <div className={styles.feedLocationLayout}>
        <FlexBox justifyContent="flex-end" alignItems="flex-end">
          <button type="button" onClick={handleClickLocationForm}>
            <IoClose size={24} color={"#FF7101"} />
          </button>
        </FlexBox>

        <LocationTabs
          locationType={locationType}
          onClick={(type: LocationType) => setLocationType(type)}
        />

        <ShopCategory
          item={categories}
          onChangeCategorySelectBox={onChangeCategorySelectBox}
        />

        <ShopTitle onChage={handleChange} value={locationData.title} />

        <div className={styles.addressSearchContainer}>
          {locationType === "address" ? (
            <KakaoAddressSearch />
          ) : (
            <KakaoAddressMap />
          )}
        </div>

        <label className={styles.feedLocationContainer}>
          <input
            disabled={true}
            readOnly={true}
            value={item.address.name}
            className={styles.fullAddressInput}
            type="text"
            placeholder={"전체 주소"}
          />
        </label>

        <FlexBox>
          <Button
            borderRadius={4}
            width={200}
            onClick={handleClickSendLocationData}
          >
            <FlexBox flexDirection="row" gap={8}>
              <IoAdd size={24} color={"#fff"} />
              <Typography as={"span"} color="white000">
                장소 등록
              </Typography>
            </FlexBox>
          </Button>
        </FlexBox>
      </div>
    </>
  );
};
