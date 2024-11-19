import { Locale } from "ant-design-vue/es/locale";

export interface Locales {
  [key: string]: Locale;
}

export type Language = "zh-CN" | "en-US" | string;
