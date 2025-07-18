import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/formations",
    name: "formations",
    component: () => import("../views/FormationsView.vue"),
  },
  {
    path: "/audits",
    name: "audits",
    component: () => import("../views/AuditsView.vue"),
  },
  {
    path: "/iprp",
    name: "iprp",
    component: () => import("../views/IprpView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/plan",
    name: "plan",
    component: () => import("../views/PlanView.vue"),
  },
  {
    path: "/glossaire",
    name: "glossaire",
    component: () => import("../views/GlossaireView.vue"),
  },
  {
    path: "/legal",
    name: "legal",
    component: () => import("../views/LegalView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
