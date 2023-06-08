import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIconModules from "@element-plus/icons";

import VuePdf from 'vue3-pdfjs'

import $ from 'jquery';

const app = createApp(App);
app.use(store).use(ElementPlus).use(router).use($).use(VuePdf).mount("#app");

// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName];
    app.component(iconName, item);
  }
}
