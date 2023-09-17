import router from "./Router";
import "@/assets/css/main.css";

// Composables
import { createApp } from "vue";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
// Plugins
import { registerPlugins } from "@/plugins";
const app = createApp(App);

registerPlugins(app);
app.use(router);
app.use(vuetify);

app.mount("#app");
