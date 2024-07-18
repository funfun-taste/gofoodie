import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

/**
 * @description 피드 리스트 필터 관련 스토어
 */

type RegionFilterStoreState = {
  filter: string;
};

type SetRegionFilterStore = {
  setFilter: (filter: string) => void;
};

const initialState: RegionFilterStoreState = {
  filter: '전체'
};

const useRegionFilterStore = create(devtools(
  combine<RegionFilterStoreState, SetRegionFilterStore>(initialState, (set) => ({
    setFilter: (filter: string) => set(() => ({filter}))
  }))
));

export default useRegionFilterStore;