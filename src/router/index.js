import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// Eager on purpose: both views are tiny, and a lazy chunk delays first paint on direct visits.
import CaseStudyView from "../views/CaseStudyView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const HEADER_OFFSET = 80;
const MAX_WAIT_FOR_TARGET_MS = 2000;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/work/:slug", name: "case-study", component: CaseStudyView, props: true },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    // "instant" overrides the global CSS smooth scrolling for page changes
    if (!to.hash) return { top: 0, behavior: "instant" };

    const position = { el: to.hash, top: HEADER_OFFSET, behavior: prefersReducedMotion() ? "auto" : "smooth" };
    // Coming from another page, the target section only exists once the out-in page transition finishes.
    return new Promise((resolve) => {
      const startedAt = performance.now();
      const waitForTarget = () => {
        if (document.querySelector(to.hash)) resolve(position);
        else if (performance.now() - startedAt > MAX_WAIT_FOR_TARGET_MS) resolve({ top: 0 });
        else requestAnimationFrame(waitForTarget);
      };
      waitForTarget();
    });
  },
});
