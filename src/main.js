import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import VueGtag from "vue-gtag";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueGtag, {
  config: { id: import.meta.env.GA_TAG_ID },
});

app.mount("#app");
