<template>
  <a-config-provider :locale="locales[locale]">
    <RouterView />
  </a-config-provider>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { Locales } from "types/i18n";
import dayjs from "dayjs";
import { useUserInfoStore } from "./store/userInfo";
dayjs.locale("zh-cn");

const userInfoStore = useUserInfoStore();

const locale = computed(() => userInfoStore.getUserLang());
console.log("app" + locale.value);
let locales: Locales = {
  "zh-CN": zhCN,
  "en-US": enUS,
};
</script>

<style lang="less" scoped></style>
