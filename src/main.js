import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/css/style.css';

const app = createApp(App);

app.use(router);

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);

app.mount("#app");
