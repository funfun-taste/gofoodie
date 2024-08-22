'use client';

import {ReactElement, useEffect, useRef, useState} from "react";
import {Skeleton} from "@components/common/skeleton/Skeleton";
import {useAuth} from "@providers/AuthProvider";
import {getMarkerApi} from "@apis/shop/marker.api";
import {useSession} from "next-auth/react";
import '@styles/lib/kakao.map.label.scss';
import {KAKAO_API_KEY} from "@config/processConfig";

export const KakaoMap = (): ReactElement => {
  const {data: session} = useSession();
  const mapContainer = useRef<HTMLDivElement>(null);
  const [pending, setPending] = useState(true);
  const {userId} = useAuth();

  // const {data: mapData, isLoading} = useQuery(
  //   {
  //     queryKey: queryKeys.map.marker(userId),
  //     queryFn: () => getMarkerApi(userId),
  //     placeholderData: (previousData) => previousData,
  //     gcTime: 6 * 1000,
  //     staleTime: 6 * 1000
  //   }
  // );


  useEffect(() => {
    const id = userId || session?.id || '';

    if (!id) {
      setPending(false);
      return;
    }

    setPending(true);

    getMarkerApi(id).then(res => {
      const {data} = res;
      if (data.result) {
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`;
        script.type = "text/javascript";
        script.async = true;
        document.head.appendChild(script);

        script.onload = async () => {
          const kakao: any = (window as any).kakao;
          if (!kakao) {
            console.error("Kakao Maps API가 로드되지 않았습니다.");
            setPending(false);
            return;
          }

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

              if (res.data.data) drawMarker(kakao, map, res.data.data);
              map.setCenter(locPosition);
              setPending(false);
            });
          });
        };
      }
    });

    setPending(false);

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
  }, [mapContainer, userId, session]);

  const drawMarker = async (kakao: any, map: any, mapData: any[]): Promise<void> => {
    const positions = mapData.map((value: any) => {
      const {_id, x, y, title, shopId, fullAddress, sido, sigungu, category} =
        value;
      return {
        feedId: _id,
        title,
        shopId,
        fullAddress,
        sido,
        sigungu,
        category,
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
        `                <div class="ellipsis">${positions[i].fullAddress}</div>` +
        `                <div class="jibun ellipsis">${positions[i].category} / ${positions[i].sido} ${positions[i].sigungu}</div>` +
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
      const {La, Ma} = marker.getPosition();
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

  return (
    <>
      {pending ? (
        <Skeleton height={300} isLoading={pending}/>
      ) : (
        <div
          id={"map"}
          ref={mapContainer}
          style={{
            width: "100%",
            height: 300,
          }}
        />
      )}
    </>
  );
};
