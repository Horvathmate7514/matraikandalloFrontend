import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GalleryView from "../views/GalleryView.vue";
import EmailForm from "../views/EmailForm.vue";
import LoginView from "../views/LoginView.vue";
import Admin from "../views/AdminDashBoardView.vue";
import { useUserStore } from "../../store/store";
import { nextTick } from "vue";


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
    {
      path: "/admin/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/admin/dashboard",
      name: "admin",
      beforeEnter: checkRights,
      component: Admin,
    },
  ],
});


function checkRights() {
  let user;
  let store = useUserStore()

  try {
    user = store.getUser

    console.log(user.user.role)

    if (user.user.role == 1) {
      nextTick();

    } else {
      window.location.href = '/admin/login';

    }
  } catch (error) {
    window.location.href = '/admin/login';
  }
}

export default router;
