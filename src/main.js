import { createApp } from "vue";
import 'bootstrap';


import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// createApp({
//     created() {
//         AOS.init({});
//     },
//     router,
//     render: h => h(App)
// }).mount("#app");


