import { ref } from "vue";

const isDark = ref(document.documentElement.classList.contains("dark"));

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
    try {
      localStorage.setItem("darkMode", JSON.stringify(isDark.value));
    } catch {}
  };

  return { isDark, toggleTheme };
}
