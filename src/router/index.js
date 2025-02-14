/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from "vue-router";
import portfolio from "../pages/abhome.vue";
import about from "../pages/About.vue";
import project from "../pages/Project.vue";
import contact from "../pages/contact.vue";
const routes = [
  {
    path: "/",
    component: portfolio,
  },
  {
    path:"/about",
    component: about,
  },
  {
    path: "/project",
     component: project,
  },
  {
    path: "/contact",
    component: contact,
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
