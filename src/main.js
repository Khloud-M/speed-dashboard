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
// import * as Vue from 'vue' // in Vue 3
// import axios from 'axios'
// import VueAxios from 'vue-axios'

const app = createApp(App);

registerPlugins(app);
app.use(router);
app.use(vuetify);
// app.use(VueAxios, axios)
app.mount("#app");
