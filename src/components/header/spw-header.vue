<template>
  <div class="SPW-header">
    <div className="mb-4">
      <span className="mb-4">Change locale of components:</span>
      <a-radio-group v-model:value="locale">
        <a-radio-button
          :key="locale"
          :value="locale"
          @click="changeLanguage(locale)"
          >En</a-radio-button
        >
      </a-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Language } from "types/i18n";
import { ref } from "vue";
defineOptions({
  name: "SPWHeader",
});
const userInfoStore = useUserInfoStore();

import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import { useUserInfoStore } from "@/store/userInfo";
let locale = ref(userInfoStore.getUserLang());
function changeLanguage(lang: Language) {
  if (lang === "en-US") {
    locale.value = "zh-CN";
    dayjs.locale(zhCN.locale);
  } else {
    locale.value = "en-US";
    dayjs.locale(enUS.locale);
  }
  userInfoStore.setUserLang(locale.value);
  console.log("changeLanguage", locale.value);
}
</script>
