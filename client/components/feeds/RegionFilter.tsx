"use client";

import { useState } from "react";
import { RegionFilterBar } from "./RegionFIlterBar";
import { region } from "./initialState/region";
import * as styles from "./styles/RegionFilter.css";
import { Typography } from "@components/common/typography/Typography";
import { RegionFilterButton } from "./RegionFilterButton";
import useRegionFilterStore from "@store/regionFilterStore";

export const RegionFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {setFilter, filter} = useRegionFilterStore();

  const currentRegion = (value: string): void=> {
    setFilter(value);
  };

  const handleClickFilterOpen = (isOpen: boolean): void => {
    setIsOpen(isOpen);
  };

  return (
    <>
      <section
        className={styles.regionFilterContainer}
        style={{
          borderColor: !isOpen ? "#ededed" : "transparent",
        }}
      >
        <Typography variant="h2" fontWeight={600} color={"black100"}>
          미식가 여행기
        </Typography>
        <RegionFilterButton
          isOpen={isOpen}
          onClickFilterOpen={handleClickFilterOpen}
        />
      </section>
      <div
        style={{
          display: isOpen ? "inline-block" : "none",
          borderColor: isOpen ? "#ededed" : "transparent",
        }}
        className={styles.filterLists}
      >
        <RegionFilterBar currentFilter={filter} onClickHandle={currentRegion} regionList={region} />
      </div>
    </>
  );
};
