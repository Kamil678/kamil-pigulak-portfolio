export const EXPERIENCES = [
  {
    company: "Mediaflex",
    location: { en: "Kraków", pl: "Kraków" },
    role: { en: "Frontend Developer", pl: "Frontend Developer" },
    start: "05.2022",
    end: null,
    description: {
      en: "Product work on web applications — improving user experience, performance and code quality across the frontend.",
      pl: "Praca produktowa nad aplikacjami webowymi — poprawa UX, wydajności i jakości kodu po stronie frontendu.",
    },
    highlights: [
      {
        en: "Rebuilt the registration / login module with multi-level validation and multiple sign-in methods, improving both security and convenience.",
        pl: "Przebudowałem moduł rejestracji i logowania: wielopoziomowa walidacja i różne metody logowania — więcej bezpieczeństwa i wygody dla użytkowników.",
      },
      {
        en: "Built a library of reusable Vue 3 + TypeScript components that sped up development and made the codebase easier to maintain.",
        pl: "Stworzyłem bibliotekę reużywalnych komponentów Vue 3 + TypeScript, która przyspieszyła development i ułatwiła utrzymanie kodu.",
      },
      {
        en: "Introduced Cypress integration and E2E tests running in GitLab CI/CD, with Docker for consistent environments.",
        pl: "Wprowadziłem testy integracyjne i E2E w Cypress, uruchamiane w GitLab CI/CD, z Dockerem dla spójnych środowisk.",
      },
      {
        en: "Improved load speed, accessibility and SEO by auditing and optimising pages with Google Lighthouse.",
        pl: "Poprawiłem szybkość ładowania, dostępność i SEO, optymalizując strony na podstawie audytów Google Lighthouse.",
      },
    ],
    tasks: [
      {
        en: "Developed a scalable consent management system with a REST API and a centralised database, integrated with microservices for real-time data analysis.",
        pl: "Rozwijałem skalowalny system zarządzania zgodami z REST API i centralną bazą danych, zintegrowany z mikroserwisami do analizy danych w czasie rzeczywistym.",
      },
      {
        en: "Implemented a PWA with offline support using resource caching and Service Worker strategies.",
        pl: "Wdrożyłem PWA z obsługą trybu offline (cache zasobów i strategie Service Workera).",
      },
      {
        en: "Worked with the UX/UI team on a new responsive landing page that improved user experience and conversion.",
        pl: "Współpracowałem z zespołem UX/UI przy nowym, responsywnym landing page'u, który poprawił UX i konwersję.",
      },
    ],
    technologies: ["Vue 3", "TypeScript", "Pinia", "Vue Router", "Tailwind", "JavaScript", "jQuery", "Bootstrap", "Scss", "PHP", "Laravel", "Cypress", "Docker", "GitLab"],
  },
  {
    company: "Vexperio.com",
    location: { en: "Remote", pl: "Zdalnie" },
    role: { en: "Fullstack Developer", pl: "Fullstack Developer" },
    start: "09.2024",
    end: "02.2025",
    description: {
      en: "Development, maintenance and optimisation of an e-commerce platform for booking tours.",
      pl: "Rozwój, utrzymanie i optymalizacja platformy e-commerce do rezerwacji wycieczek.",
    },
    metric: {
      value: "−25%",
      label: { en: "page load time", pl: "czasu ładowania strony" },
    },
    highlights: [
      {
        en: "Cut page load time by over 25% by refactoring code and optimising SQL queries.",
        pl: "Skróciłem czas ładowania stron o ponad 25% dzięki refaktoryzacji kodu i optymalizacji zapytań SQL.",
      },
      {
        en: "Designed and built a new flow for searching, filtering and selecting tours that improved the user experience and sales conversion.",
        pl: "Zaprojektowałem i wdrożyłem nowy proces wyszukiwania, filtrowania i wyboru wycieczek, który poprawił UX i konwersję sprzedaży.",
      },
      {
        en: "Worked across backend and frontend, keeping the application maintainable and scalable.",
        pl: "Pracowałem zarówno nad backendem, jak i frontendem, dbając o jakość i skalowalność aplikacji.",
      },
    ],
    tasks: [],
    technologies: ["Vue.js", "React", "JavaScript", "PHP", "Laravel", "Laravel Nova", "MySQL"],
  },
];
