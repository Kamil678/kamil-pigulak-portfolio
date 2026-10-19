import { createApp } from "vue";
import "boxicons/css/boxicons.min.css";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { i18n } from "./i18n";
import { reveal } from "./directives/reveal";

createApp(App).use(router).use(i18n).directive("reveal", reveal).mount("#app");
