import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router) // Inject the router
  .mount("#app");
