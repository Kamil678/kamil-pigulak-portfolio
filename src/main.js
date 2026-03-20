import { createApp } from "vue";
import { createPinia } from "pinia";
import "boxicons/css/boxicons.min.css";
import "./style.css";
import "./assets/styles/main.scss";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
