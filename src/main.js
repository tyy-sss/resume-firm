import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIconModules from "@element-plus/icons";

import VuePdf from "vue3-pdfjs";

import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app
  .use(store)
  .use(ElementPlus)
  .use(VueAxios, axios)
  .use(router)
  .use(VuePdf)
  .mount("#app");

// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName];
    app.component(iconName, item);
  }
}
