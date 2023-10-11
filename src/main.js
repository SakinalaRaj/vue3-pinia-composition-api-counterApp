import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
