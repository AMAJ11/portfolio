/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import HomeView from "../pages/home.vue";
import about from "../pages/About.vue";
import project from "../pages/Project.vue";
import contact from "../pages/contact.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/project",
    name: "project",
    component: project,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
