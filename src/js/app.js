// Import Vue
import { createApp } from "vue";
import { createPinia } from "pinia";
// save to localstorage
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// Import Framework7
import Framework7 from "framework7/lite-bundle";

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from "framework7-vue/bundle";

// Import Framework7 Styles
import "framework7/css/bundle";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.less";

// Import App Component
import App from "../components/app.vue";

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

// Register Framework7 Vue components
registerComponents(app);

// Mount the app
app.use(pinia);
app.mount("#app");
