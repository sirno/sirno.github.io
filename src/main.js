import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { configure } from "vue-gtag";
import router from "./router";

const app = createApp(App);

configure({ tagId: import.meta.env.VITE_GA_TAG_ID, pageTracker: { router } });

app.use(createPinia());
app.use(router);

app.mount("#app");
