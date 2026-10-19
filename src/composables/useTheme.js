import { ref } from "vue";

// The initial class is set by the inline script in index.html (saved choice → prefers-color-scheme).
const isDark = ref(document.documentElement.classList.contains("dark"));

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
    try {
      localStorage.setItem("darkMode", JSON.stringify(isDark.value));
    } catch {
      // ignore — the choice just won't persist
    }
  };

  return { isDark, toggleTheme };
}
