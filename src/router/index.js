import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GalleryView from "../views/GalleryView.vue";
import EmailForm from "../views/EmailForm.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/email",
      name: "email",
      component: EmailForm,
    },
  ],
});

export default router;
