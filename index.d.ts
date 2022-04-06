import { PolkadonConfig } from 'react-polkadon';

export {};

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

declare global {
  interface Window {
    initPolkadon: (config: PolkadonConfig) => void;
  }
}
