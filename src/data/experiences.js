export const EXPERIENCES = [
  {
    company: "Mediaflex",
    location: { en: "Kraków", pl: "Kraków" },
    role: { en: "Frontend Developer", pl: "Frontend Developer" },
    start: "05.2022",
    end: null,
    description: {
      en: "Web applications for the medical and pharmaceutical industry: from offline-first PWAs and admin panels to systems shared by many products.",
      pl: "Aplikacje webowe dla branży medycznej i farmaceutycznej: od PWA działających offline i paneli administracyjnych po systemy współdzielone przez wiele produktów.",
    },
    highlights: [
      {
        en: "Designed a monorepo with two applications and a shared component library, so new features land in both without duplicated code.",
        pl: "Zaprojektowałem monorepo z dwiema aplikacjami i wspólną biblioteką komponentów, dzięki czemu nowe funkcje trafiają do obu bez duplikowania kodu.",
      },
      {
        en: "Built an offline-first PWA with IndexedDB (Dexie) and a Service Worker, with automatic data sync once the connection is back.",
        pl: "Zbudowałem PWA w trybie offline-first na IndexedDB (Dexie) i Service Workerze, z automatyczną synchronizacją danych po odzyskaniu połączenia.",
      },
      {
        en: "Built a new Vue 3 + TypeScript SPA from scratch to replace a legacy jQuery app, migrated module by module with zero downtime, next to the running old version.",
        pl: "Od zera zbudowałem nowy frontend SPA w Vue 3 + TypeScript w miejsce legacy aplikacji w jQuery. Migrację prowadziłem moduł po module, bez przestojów, obok działającej starej wersji.",
      },
      {
        en: "Built a central consent management system in React and TypeScript from the ground up, now used by many applications and feeding real-time statistics microservices.",
        pl: "Od podstaw zbudowałem w React i TypeScript centralny system zarządzania zgodami, z którego korzysta wiele aplikacji, zasilający mikroserwisy statystyk w czasie rzeczywistym.",
      },
      {
        en: "Introduced Cypress integration and E2E tests for key user journeys, running automatically in GitLab CI/CD on Docker.",
        pl: "Wprowadziłem testy integracyjne i E2E w Cypress dla kluczowych ścieżek użytkownika, uruchamiane automatycznie w GitLab CI/CD w środowisku Docker.",
      },
    ],
    tasks: [
      {
        en: "State management with Pinia, routing with authorization guards and validated CRUD forms in an admin panel.",
        pl: "Zarządzanie stanem w Pinia, routing z guardami autoryzacji i formularze CRUD z walidacją w panelu administracyjnym.",
      },
      {
        en: "A library of reusable components and composables built on the Quasar design system and documented in Storybook.",
        pl: "Biblioteka reużywalnych komponentów i composables na bazie design systemu Quasar, udokumentowana w Storybooku.",
      },
      {
        en: "A token-based design system (Tailwind CSS v4, shadcn-vue) with its own component library.",
        pl: "Design system oparty na tokenach (Tailwind CSS v4, shadcn-vue) i biblioteka komponentów.",
      },
      {
        en: "A typed API layer and routing with role-based access control.",
        pl: "Typowana warstwa API i routing z kontrolą dostępu zależną od roli użytkownika.",
      },
      {
        en: "Rewrote key modules (dashboards for every user role, consents, contests) plus registration and login.",
        pl: "Przepisałem kluczowe moduły (panele dla każdej roli, zgody, konkursy) oraz rejestrację i logowanie.",
      },
      {
        en: "Fully responsive and accessible (WCAG) interfaces, true to the UX/UI designs.",
        pl: "Interfejsy w pełni responsywne i dostępne (WCAG), zgodne z makietami UX/UI.",
      },
      {
        en: "Faster first render thanks to lazy-loaded modules and asynchronous data fetching.",
        pl: "Krótszy czas pierwszego renderowania dzięki lazy loadingowi modułów i asynchronicznemu pobieraniu danych.",
      },
      {
        en: "A new landing page built with the UX/UI team and tuned with Lighthouse: faster loading, better SEO and higher conversion.",
        pl: "Nowy landing page stworzony z zespołem UX/UI i zoptymalizowany pod Lighthouse: szybsze ładowanie, lepsze SEO i wyższa konwersja.",
      },
      {
        en: "SPA architecture in React with modules, reusable hooks, state management and routing.",
        pl: "Architektura SPA w React: moduły, reużywalne hooki, zarządzanie stanem i routing.",
      },
      {
        en: "Co-designed REST API contracts with the backend team.",
        pl: "Współprojektowanie kontraktów REST API z zespołem backendowym.",
      },
      {
        en: "Active in code review and in requirements analysis with PMs, UX/UI and QA.",
        pl: "Aktywny udział w code review oraz w analizie wymagań z PM, UX/UI i QA.",
      },
    ],
    technologies: [
      "Vue 3",
      "Nuxt",
      "TypeScript",
      "React",
      "Pinia",
      "Vue Router",
      "React Router",
      "Quasar",
      "Storybook",
      "Tailwind CSS v4",
      "shadcn-vue",
      "IndexedDB (Dexie)",
      "Service Worker",
      "Cypress",
      "Docker",
      "GitLab CI/CD",
      "Symfony",
      "Laminas",
      "Doctrine",
      "Laravel",
    ],
  },
  {
    company: "Vexperio.com",
    location: { en: "Remote", pl: "Zdalnie" },
    role: { en: "Full-Stack Developer (freelance)", pl: "Full-Stack Developer (freelance)" },
    start: "09.2024",
    end: "02.2025",
    description: {
      en: "An e-commerce platform selling tours online. Development, maintenance and optimisation across frontend and backend.",
      pl: "Platforma e-commerce ze sprzedażą wycieczek online. Rozwój, utrzymanie i optymalizacja, zarówno frontend, jak i backend.",
    },
    metric: {
      value: "25%+",
      label: { en: "faster page load", pl: "szybsze ładowanie strony" },
    },
    highlights: [
      {
        en: "Cut page load time by over 25% by refactoring code and optimising SQL queries.",
        pl: "Skróciłem czas ładowania strony o ponad 25% dzięki refaktoryzacji i optymalizacji zapytań SQL.",
      },
      {
        en: "Built a new flow for searching, filtering and choosing tours, which improved the user experience and increased sales.",
        pl: "Zbudowałem nowy proces wyszukiwania, filtrowania i wyboru wycieczek, który poprawił UX i zwiększył sprzedaż.",
      },
      {
        en: "Developed, maintained and optimised the whole platform, frontend and backend.",
        pl: "Rozwijałem, utrzymywałem i optymalizowałem całą platformę, zarówno frontend, jak i backend.",
      },
    ],
    tasks: [],
    technologies: ["React", "JavaScript", "Vue.js", "Nuxt", "PHP", "Laravel", "Laravel Nova", "MySQL", "Twig", "jQuery"],
  },
];
