import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { router } from "@/router/index";
import "@/assets/styles/css/tailwind.css";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount("#app");
