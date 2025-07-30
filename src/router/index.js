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

  // Formations
  {
    path: "/formations/sst",
    name: "formations-sst",
    component: () => import("../views/formations/FormaSST.vue"),
  },
  {
    path: "/formations/mac-sst",
    name: "formations-mac-sst",
    component: () => import("../views/formations/FormaMacSST.vue"),
  },
  {
    path: "/formations/prap-ibc",
    name: "formations-prap-ibc",
    component: () => import("../views/formations/FormaPrapIBC.vue"),
  },
  {
    path: "/formations/mac-prap",
    name: "formations-mac-prap",
    component: () => import("../views/formations/FormaMacPrap.vue"),
  },
  {
    path: "/formations/prap-2s",
    name: "formations-prap-2s",
    component: () => import("../views/formations/FormaPrap2S.vue"),
  },
  {
    path: "/formations/mac-prap-2s",
    name: "formations-mac-prap-2s",
    component: () => import("../views/formations/FormaMacPrap2S.vue"),
  },
  {
    path: "/formations/epi",
    name: "formations-epi",
    component: () => import("../views/formations/FormaEpi.vue"),
  },
  {
    path: "/formations/bases",
    name: "formations-bases",
    component: () => import("../views/formations/FormaBases.vue"),
  },

  // Audits
  {
    path: "/audits/document-unique",
    name: "audits-document-unique",
    component: () => import("../views/audits/AuditDocumentUnique.vue"),
  },
  {
    path: "/audits/epi",
    name: "audits-epi",
    component: () => import("../views/audits/AuditEPI.vue"),
  },
  {
    path: "/audits/etude-postes",
    name: "audits-etude-postes",
    component: () => import("../views/audits/AuditEtudePostes.vue"),
  },

  // Other
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
