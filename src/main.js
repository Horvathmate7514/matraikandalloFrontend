import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/css/style.css';

const app = createApp(App);
const pinia = createPinia()


app.use(pinia)
app.use(router);

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);

app.mount("#app");
