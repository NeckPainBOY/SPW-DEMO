import { defineStore } from "pinia";
import { Language } from "types/i18n";

export const useUserInfoStore = defineStore("userInfo", {
  state: (): { lang: Language } => ({
    lang: "zh-CN",
  }),
  actions: {
    getUserInfo() {},
    getUserLang(): Language {
      this.lang = localStorage.getItem("lang") || "zh-CN";
      return this.lang;
    },
    setUserLang(lang: Language) {
      this.lang = lang;
      localStorage.setItem("lang", lang);
    },
  },
});
