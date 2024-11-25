/// <reference types="astro/client" />

declare global {
    interface Window {
      fbq: (...args: any[]) => void;
    }
  }
  
  declare var fbq: (...args: any[]) => void;

