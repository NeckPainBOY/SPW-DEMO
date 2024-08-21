import { createApp } from "vue";
import App from "./App.vue";
import "virtual:uno.css";
// 重置样式
import "@unocss/reset/normalize.css";
import { router } from "@/router/index";

const app = createApp(App);
app.use(router);
app.mount("#app");
