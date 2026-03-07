/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KAKAO_MAPS_APP_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    kakao?: any;
  }
}

export {};

