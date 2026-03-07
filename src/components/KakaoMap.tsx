import React, { useEffect, useMemo, useRef, useState } from "react";

type KakaoMapStatus = "idle" | "loading" | "ready" | "error";

function loadKakaoMapsSdk(appKey: string) {
  if (typeof window === "undefined") return Promise.reject(new Error("No window"));
  if (window.kakao?.maps) return Promise.resolve(window.kakao);

  const existing = document.getElementById("kakao-maps-sdk");
  if (existing) {
    return new Promise<any>((resolve, reject) => {
      existing.addEventListener("load", () => resolve(window.kakao));
      existing.addEventListener("error", () =>
        reject(new Error("Failed to load Kakao Maps SDK"))
      );
    });
  }

  return new Promise<any>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = "kakao-maps-sdk";
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(
      appKey
    )}&autoload=false&libraries=services`;
    script.onload = () => resolve(window.kakao);
    script.onerror = () => reject(new Error("Failed to load Kakao Maps SDK"));
    document.head.appendChild(script);
  });
}

export function KakaoMap({
  address,
  level = 3,
  className,
}: {
  address: string;
  level?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<KakaoMapStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const appKey = useMemo(() => {
    const key = import.meta.env.VITE_KAKAO_MAPS_APP_KEY;
    return key?.trim() || "";
  }, []);

  useEffect(() => {
    let disposed = false;

    async function init() {
      if (!containerRef.current) return;
      if (!appKey) {
        setStatus("error");
        setErrorMessage(
          "카카오맵 키가 설정되지 않았습니다. VITE_KAKAO_MAPS_APP_KEY 환경변수를 추가하세요."
        );
        return;
      }

      try {
        setStatus("loading");
        const kakao = await loadKakaoMapsSdk(appKey);
        if (disposed) return;

        kakao.maps.load(() => {
          if (disposed || !containerRef.current) return;

          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(address, (result: any[], status: string) => {
            if (disposed || !containerRef.current) return;

            if (status !== kakao.maps.services.Status.OK || !result?.[0]) {
              setStatus("error");
              setErrorMessage("주소를 찾지 못했습니다. 주소를 확인해주세요.");
              return;
            }

            const { x, y } = result[0];
            const lat = Number(y);
            const lng = Number(x);
            const center = new kakao.maps.LatLng(lat, lng);

            const map = new kakao.maps.Map(containerRef.current, {
              center,
              level,
            });

            const marker = new kakao.maps.Marker({
              map,
              position: center,
            });

            const iwContent = `
              <div style="padding:8px 10px;">
                <div style="font-size:13px;margin-bottom:4px;">${address}</div>
                <a
                  href="https://map.kakao.com/link/to/${encodeURIComponent(
                    address
                  )},${lat},${lng}"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="display:inline-block;margin-top:2px;font-size:12px;color:#0055ff;text-decoration:underline;"
                >
                  길찾기
                </a>
              </div>
            `;

            const infoWindow = new kakao.maps.InfoWindow({
              content: iwContent,
              removable: true,
            });

            kakao.maps.event.addListener(marker, "click", () => {
              infoWindow.open(map, marker);
            });

            setStatus("ready");
            setErrorMessage(null);
          });
        });
      } catch (e: any) {
        if (disposed) return;
        setStatus("error");
        setErrorMessage(e?.message ?? "지도를 불러오지 못했습니다.");
      }
    }

    init();
    return () => {
      disposed = true;
    };
  }, [address, appKey, level]);

  return (
    <div className={`relative ${className ?? ""}`}>
      <div ref={containerRef} className="w-full h-full" />

      {status !== "ready" && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80">
          <div className="text-center px-6">
            {status === "loading" && (
              <p className="text-gray-700">지도를 불러오는 중...</p>
            )}
            {status === "error" && (
              <p className="text-gray-700">{errorMessage ?? "오류가 발생했습니다."}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

