export const EXPERIENCES = [
  {
    company: "Mediaflex",
    location: { en: "Kraków", pl: "Kraków" },
    role: { en: "Frontend Developer", pl: "Frontend Developer" },
    start: "05.2022",
    end: null,
    description: {
      en: "Web applications for the medical and pharmaceutical industry: a platform used by over ten thousand doctors, an admin panel with a PWA, an enterprise conference management system and a consent system shared by 5 applications.",
      pl: "Aplikacje webowe dla branży medycznej i farmaceutycznej: platforma, z której korzysta kilkanaście tysięcy lekarzy, panel administracyjny z aplikacją PWA, system enterprise do zarządzania konferencjami i system zgód współdzielony przez 5 aplikacji.",
    },
    metric: {
      value: "50 → 98",
      label: { en: "Lighthouse Performance after the landing page rebuild", pl: "Lighthouse Performance po przebudowie landing page" },
    },
    highlights: [
      {
        en: "Built a new Vue 3 + TypeScript SPA from scratch to replace a legacy jQuery app on a platform used by over ten thousand doctors. Migrated 6 modules and 50+ views step by step, with zero downtime.",
        pl: "Od zera zbudowałem nowy frontend SPA w Vue 3 + TypeScript w miejsce legacy aplikacji w jQuery, na platformie, z której korzysta kilkanaście tysięcy lekarzy. Stopniowo przeniosłem 6 modułów i ponad 50 widoków, bez przestojów.",
      },
      {
        en: "Designed a monorepo with two applications (30+ screens) and a shared library of 40+ components and composables documented in Storybook, so new features land in both apps without duplicated code.",
        pl: "Zaprojektowałem monorepo z dwiema aplikacjami (30+ ekranów) i wspólną biblioteką 40+ komponentów i composables udokumentowaną w Storybooku, dzięki czemu nowe funkcje trafiają do obu aplikacji bez duplikowania kodu.",
      },
      {
        en: "Rebuilt a landing page with the UX/UI team and raised Lighthouse scores from about 50 to 98 (Performance), 97 (Accessibility) and 100 (SEO).",
        pl: "Przebudowałem landing page z zespołem UX/UI i podniosłem wyniki Lighthouse z ok. 50 do 98 (Performance), 97 (Accessibility) i 100 (SEO).",
      },
      {
        en: "For 4 years I have owned the frontend of an enterprise conference management system with 8 role-based panels, delivering about 100 features, including an analytics dashboard for management built from scratch.",
        pl: "Od 4 lat odpowiadam za frontend systemu enterprise do zarządzania konferencjami z 8 panelami dla różnych ról. Wdrożyłem ok. 100 funkcjonalności, w tym zbudowany od zera dashboard analityczny dla zarządu.",
      },
      {
        en: "Wrote about 40 E2E and integration tests in Cypress for key user journeys, running automatically in a CI/CD pipeline on Docker.",
        pl: "Napisałem ok. 40 testów E2E i integracyjnych w Cypress dla kluczowych ścieżek użytkownika, uruchamianych automatycznie w pipeline CI/CD w Dockerze.",
      },
    ],
    tasks: [
      {
        en: "Architecture of the new SPA: a typed REST API integration layer, state management in Pinia and routing with role-based access control (RBAC).",
        pl: "Architektura nowego SPA: typowana warstwa integracji z REST API, zarządzanie stanem w Pinia i routing z kontrolą dostępu opartą na rolach (RBAC).",
      },
      {
        en: "A token-based design system (Tailwind CSS v4, shadcn-vue) with its own component library.",
        pl: "Design system oparty na tokenach (Tailwind CSS v4, shadcn-vue) i biblioteka komponentów.",
      },
      {
        en: "An admin panel and a PWA built on Vue 3, Nuxt and Quasar; responsive and accessible (WCAG 2.1 AA).",
        pl: "Panel administracyjny i aplikacja PWA na Vue 3, Nuxt i Quasarze; responsywne i dostępne (WCAG 2.1 AA).",
      },
      {
        en: "Faster first render thanks to lazy-loaded modules and asynchronous data fetching.",
        pl: "Krótszy czas pierwszego renderowania dzięki lazy loadingowi modułów i asynchronicznemu pobieraniu danych.",
      },
      {
        en: "Co-designed REST API contracts (Axios) with the backend team.",
        pl: "Współprojektowanie kontraktów REST API (Axios) z zespołem backendowym.",
      },
      {
        en: "Conference system dashboard: KPI tiles, interactive Highcharts charts, AG Grid data tables, filters and detail views, in modular framework-free JavaScript.",
        pl: "Dashboard w systemie konferencyjnym: kafelki KPI, interaktywne wykresy (Highcharts), tabele danych (AG Grid), filtry i widoki szczegółów, w modularnym JavaScripcie bez frameworka.",
      },
      {
        en: "A new layout with side and top navigation, rolled out as a shared pattern for all 8 panels.",
        pl: "Nowy layout z nawigacją boczną i górną, wdrożony jako wspólny wzorzec dla wszystkich 8 paneli.",
      },
      {
        en: "Multi-step forms with validation, file upload and electronic signature, plus tablet views for the field team.",
        pl: "Wieloetapowe formularze z walidacją, uploadem plików i podpisem elektronicznym oraz responsywne widoki pod tablety dla zespołu terenowego.",
      },
      {
        en: "Developed a central system for marketing consents and terms used by 5 applications, replacing separate solutions in each product with a single source of truth.",
        pl: "Rozwijałem centralny system zgód marketingowych i regulaminów, z którego korzysta 5 aplikacji. Zastąpił osobne rozwiązania w każdym produkcie jednym źródłem prawdy.",
      },
      {
        en: "Role- and scope-based access control in the consent system, integration with statistics microservices and live data monitoring views.",
        pl: "Kontrola dostępu oparta na rolach i zakresach uprawnień w systemie zgód, integracja z mikroserwisami statystyk i widoki do bieżącego monitorowania danych.",
      },
      {
        en: "Active in code review and in refining requirements with PMs, UX/UI and QA.",
        pl: "Aktywny udział w code review oraz w analizie i doprecyzowaniu wymagań z PM, UX/UI i QA.",
      },
    ],
    technologies: [
      "Vue 3",
      "Nuxt",
      "TypeScript",
      "Pinia",
      "Vue Router",
      "Axios",
      "Quasar",
      "Storybook",
      "Tailwind CSS v4",
      "shadcn-vue",
      "PWA",
      "Highcharts",
      "AG Grid",
      "SCSS",
      "Webpack",
      "Cypress",
      "Docker",
      "GitLab CI/CD",
      "Bitbucket",
      "PHP",
      "Symfony",
      "Laminas",
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
      en: "An e-commerce platform selling tours online. I was responsible for it end to end: React and Vue frontend, Laravel backend, admin panel and production maintenance.",
      pl: "Platforma e-commerce ze sprzedażą wycieczek online. Odpowiadałem za nią end-to-end: frontend w React i Vue, backend w Laravelu, panel administracyjny i utrzymanie produkcji.",
    },
    metric: {
      value: "25%+",
      label: { en: "faster page load", pl: "szybsze ładowanie strony" },
    },
    highlights: [
      {
        en: "Built a tour search in React with filters and sorting kept in the URL, plus a checkout integrated with the API.",
        pl: "Zbudowałem w React wyszukiwarkę wycieczek z filtrami i sortowaniem (stan w URL) oraz checkout zintegrowany z API.",
      },
      {
        en: "Cut page load time by over 25% by refactoring code and optimising SQL queries.",
        pl: "Skróciłem czas ładowania strony o ponad 25% dzięki refaktoryzacji kodu i optymalizacji zapytań SQL.",
      },
      {
        en: "Owned the platform end to end: frontend, backend, a Laravel Nova admin panel and production maintenance.",
        pl: "Odpowiadałem za platformę end-to-end: frontend, backend, panel w Laravel Nova i utrzymanie produkcji.",
      },
    ],
    tasks: [],
    technologies: ["React", "Vue.js", "JavaScript", "PHP", "Laravel", "Laravel Nova", "MySQL"],
  },
];
