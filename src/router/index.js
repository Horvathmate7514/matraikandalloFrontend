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
      meta: {
        title: "Mátrai Kandalló – Kandalló, kályha és kemence építés Győr",
        description:
          "Mátrai Kandalló: egyedi kandalló, cserépkályha, téglakályha és kemence építés Győrben és Győr-Moson-Sopron megyében. Családi mesterség 1957 óta. Győrben és 15 km-es körzetében ingyenes helyszíni felmérés.",
      },
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
      meta: {
        title: "Képgaléria – kandallók és kemencék | Mátrai Kandalló Győr",
        description:
          "Referencia munkáink: egyedi kandallók, cserépkályhák, téglakályhák és kemencék Győrből és Győr-Moson-Sopron megyéből.",
      },
    },
    {
      path: "/email",
      name: "email",
      component: EmailForm,
      meta: {
        title: "Ajánlatkérés kandallóra, kályhára, kemencére | Mátrai Kandalló Győr",
        description:
          "Kérjen ajánlatot kandalló, kályha vagy kemence építésére Győrben és környékén. Győrben és 15 km-es körzetében ingyenes helyszíni felmérés.",
      },
    },
    {
      path: "/admin/login",
      name: "login",
      component: LoginView,
      meta: { noindex: true },
    },
    {
      path: "/admin/dashboard",
      name: "admin",
      meta: { noindex: true },
      beforeEnter: checkRights,
      component: Admin,
    },
  ],
});


const SITE_URL = "https://www.matraikandallo.hu";
const DEFAULT_META = router.options.routes[0].meta;

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/);
    el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

router.afterEach((to) => {
  const title = to.meta.title || DEFAULT_META.title;
  const description = to.meta.description || DEFAULT_META.description;
  const url = SITE_URL + (to.path === "/" ? "/" : to.path);

  document.title = title;
  setMeta('meta[name="description"]', "content", description);
  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[property="og:description"]', "content", description);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('link[rel="canonical"]', "href", url);
  setMeta('meta[name="robots"]', "content", to.meta.noindex ? "noindex, nofollow" : "index, follow");
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
