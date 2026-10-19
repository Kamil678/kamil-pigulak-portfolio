// v-reveal: fades an element in when it scrolls into view.
// Optional value is a delay in ms, e.g. v-reveal="index * 60" for staggered grids.
const observer =
  typeof IntersectionObserver === "undefined"
    ? null
    : new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );

export const reveal = {
  mounted(el, binding) {
    if (!observer) return;
    el.classList.add("reveal");
    if (binding.value) el.style.setProperty("--reveal-delay", `${binding.value}ms`);
    observer.observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
