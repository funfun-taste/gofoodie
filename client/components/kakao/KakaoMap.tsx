"use client";

import { ReactElement, useEffect, useRef } from "react";
import { useAuth } from "@providers/AuthProvider";
import "@styles/lib/kakao.map.label.scss";
import { KAKAO_API_KEY } from "@config/processConfig";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@states/keys/query.key";
import { getMarkerApi, Marker } from "@apis/map/marker.api";

const KakaoMap = (): ReactElement => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { userId } = useAuth();

  const { data: mapData, isLoading } = useQuery<
    Marker[],
    unknown,
    any,
    string[]
  >({
    queryKey: queryKeys.map.marker(userId),
    queryFn: () => getMarkerApi(userId),
    placeholderData: (previousData) => previousData,
    gcTime: 6 * 1000,
    staleTime: 6 * 1000,
  });

  const drawMarker = async (kakao: any, map: any): Promise<void> => {
    const positions = mapData.map((value: any) => {
      const { feedId, x, y, title, shopId, address, description } = value;
      return {
        feedId,
        title,
        shopId,
        address,
        description,
        latlng: new kakao.maps.LatLng(+y, +x),
      };
    });

    const imageSrc =
      "https://gofoodie-images.s3.ap-northeast-2.amazonaws.com/assets/marker.svg";

    for (let i = 0; i < positions.length; i++) {
      const imageSize = new kakao.maps.Size(20, 30);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      const content =
        '<div class="wrap">' +
        '    <div class="info">' +
        '        <div class="title">' +
        `            <span >${positions[i].title}</span>` +
        "        </div>" +
        '        <div class="body">' +
        '            <div class="desc">' +
        `                <div class="jibun ellipsis">${positions[i].description}</div>` +
        `                <div class="ellipsis">${positions[i].address}</div>` +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "</div>";

      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });

      const { La, Ma } = marker.getPosition();
      const position = new kakao.maps.LatLng(Ma, La);
      const overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: position,
      });

      overlay.setMap(null);

      kakao.maps.event.addListener(
        marker,
        "click",
        makeClickListener(map, overlay)
      );

      let isOpen = false;

      function makeClickListener(map: any, overlay: any) {
        return function () {
          isOpen = !isOpen;
          if (isOpen) overlay.setMap(map);
          else overlay.setMap(null);
        };
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`;
      script.type = "text/javascript";
      script.async = true;
      document.head.appendChild(script);

      script.onload = async () => {
        const kakao: any = (window as any).kakao;
        kakao.maps.load(() => {
          const mapElement = document.getElementById("map");

          navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
            const options = {
              center: new kakao.maps.LatLng(lat, lon),
              level: 7,
            };
            const map = new kakao.maps.Map(mapElement, options);
            map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); // 교통 정보 삭제
            const locPosition = new kakao.maps.LatLng(lat, lon);

            if (!!mapData) drawMarker(kakao, map);
            map.setCenter(locPosition);
          });
        });
      };
    }

    return () => {
      const scripts = document.head.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i];
        if (
          script.parentNode &&
          script.src &&
          script.src.includes("dapi.kakao.com")
        ) {
          script.parentNode.removeChild(script);
        }
      }
    };
  }, [mapContainer, mapData]);

  if (isLoading) return <div />;

  return (
    <div
      id={"map"}
      ref={mapContainer}
      style={{
        width: "100%",
        height: 300,
      }}
    />
  );
};

export default KakaoMap;
