
/// <reference types="vite/client" />

interface Window {
  __BASE_PATH__?: string;
  getAssetPath: (path: string) => string;
}
