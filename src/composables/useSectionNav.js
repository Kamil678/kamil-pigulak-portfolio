import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export const SECTIONS = ["work", "experience", "stack", "about", "contact"];

// Navigates to a section of the home page. On the home page it scrolls directly
// (the router ignores navigation to an identical location); elsewhere it routes to /#id.
export function useSectionNav() {
  const route = useRoute();
  const router = useRouter();

  const goToSection = (id) => {
    if (route.name === "home") {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    } else {
      router.push({ name: "home", hash: `#${id}` });
    }
  };

  return { goToSection };
}

// Tracks which home section takes up most of the viewport (logic ported from the previous Nav.vue).
export function useActiveSection() {
  const activeSection = ref(null);
  const hasScrolled = ref(false);

  const update = () => {
    hasScrolled.value = window.scrollY > 8;

    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;

    if (viewportBottom >= document.body.offsetHeight - 50) {
      activeSection.value = document.getElementById("contact") ? "contact" : null;
      return;
    }

    let best = null;
    let bestVisible = 0;
    for (const id of SECTIONS) {
      const section = document.getElementById(id);
      if (!section) continue;
      const top = section.offsetTop;
      const visible = Math.min(top + section.offsetHeight, viewportBottom) - Math.max(top, viewportTop);
      if (visible > bestVisible) {
        bestVisible = visible;
        best = id;
      }
    }
    // The hero has no nav item, so nothing is active until a section fills a third of the screen.
    activeSection.value = bestVisible > window.innerHeight / 3 ? best : null;
  };

  onMounted(() => {
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
  });

  return { activeSection, hasScrolled, update };
}
