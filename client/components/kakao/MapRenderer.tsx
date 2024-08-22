'use client';

import React, {ReactElement, Suspense} from "react";
import {Skeleton} from "@components/common/skeleton/Skeleton";

const KakaoMap = React.lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import('./KakaoMap')), 2000);
  })
);

export const MapRenderer = (): ReactElement => {
  return (
    <Suspense fallback={<Skeleton height={300} isLoading={true} />}>
      <KakaoMap />
    </Suspense>
  )
}