import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { router } from "@/router/index";
import "@/assets/styles/css/tailwind.css";
import "ant-design-vue/dist/reset.css";
import "dayjs/locale/zh";
import "dayjs/locale/en";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
const messages = {
  "en-us": (await import("@/i18n/en-US.json")).default,
  "zh-cn": (await import("@/i18n/zh-CN.json")).default,
};

const i18n = createI18n({
  locale: "zh-cn",
  messages,
});

app.use(router);
app.use(Antd);
app.use(i18n);
app.use(pinia);

app.mount("#app");
