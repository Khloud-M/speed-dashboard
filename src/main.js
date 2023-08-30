
import App from './App.vue'
import router from "./Router";

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import "@/assets/css/main.css";
const app = createApp(App)

registerPlugins(app)
app.use(router);

app.mount('#app')
