/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";
import portfolio from "../pages/abhome.vue";
import about from "../pages/about.vue";
import project from "../pages/Project.vue";
import contact from "../pages/contact.vue";
const routes = [
  {
    path: "/",
    component: portfolio,
  },
  {
    path:"/about",
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
