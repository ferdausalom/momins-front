import { createApp } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/entry.scss";
import "bootstrap";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

createApp(App).use(router).mount("#app");
