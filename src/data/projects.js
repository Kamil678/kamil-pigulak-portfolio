const cover = (small, large, width, height) => ({ src: small, srcset: `${small} 800w, ${large} 1600w`, width, height });

export const PROJECTS = [
  {
    slug: "movie-app",
    name: "Movie App",
    type: "personal",
    featured: true,
    cover: cover(
      new URL("../assets/images/projects/movie-app-800.webp", import.meta.url).href,
      new URL("../assets/images/projects/movie-app-1600.webp", import.meta.url).href,
      1600,
      801,
    ),
    link: "https://dazzling-valkyrie-c0fb6c.netlify.app/",
    linkGithub: "https://github.com/Kamil678/movie-app",
    techStack: ["Vue 3", "TypeScript", "Pinia", "Tailwind CSS", "Axios", "Vite"],
    role: { en: "Solo project: design & development", pl: "Projekt solo: projekt i development" },
    outcome: {
      en: "A responsive movie browser built from scratch with a fully typed Vue 3 architecture.",
      pl: "Responsywna przeglądarka filmów zbudowana od zera na w pełni otypowanej architekturze Vue 3.",
    },
    caseStudy: {
      problem: {
        en: "I wanted a project that mirrors how I work commercially: a Vue 3 + TypeScript app talking to a real external API, with state, routing and a responsive UI, not a tutorial clone.",
        pl: "Chciałem projektu, który odzwierciedla to, jak pracuję komercyjnie: aplikacji Vue 3 + TypeScript komunikującej się z prawdziwym zewnętrznym API, ze stanem, routingiem i responsywnym UI, a nie kopii tutoriala.",
      },
      approach: [
        {
          en: "A typed API layer built on a shared Axios instance, so components never deal with raw responses.",
          pl: "Otypowana warstwa API oparta na wspólnej instancji Axios, dzięki czemu komponenty nie operują na surowych odpowiedziach.",
        },
        {
          en: "Pinia stores for shared state (search, lists, details), keeping views thin and easy to test.",
          pl: "Store'y Pinia dla współdzielonego stanu (wyszukiwanie, listy, szczegóły), dzięki czemu widoki są proste i łatwe do testowania.",
        },
        {
          en: "Small, reusable components written with the Composition API and strict TypeScript props.",
          pl: "Małe, reużywalne komponenty pisane w Composition API ze ściśle otypowanymi propsami.",
        },
        {
          en: "Tailwind CSS with a mobile-first layout, so the app works equally well on phones and desktops.",
          pl: "Tailwind CSS i układ mobile-first, dzięki czemu aplikacja działa tak samo dobrze na telefonie, jak i na desktopie.",
        },
      ],
      results: [
        { en: "Deployed and publicly available on Netlify.", pl: "Wdrożona i publicznie dostępna na Netlify." },
        { en: "A codebase I use as a reference for structuring Vue 3 + TypeScript projects.", pl: "Kod, który traktuję jako wzorzec struktury projektów Vue 3 + TypeScript." },
      ],
      learnings: {
        en: "Typing the API boundary first pays off quickly, because most bugs surfaced at compile time instead of in the browser.",
        pl: "Otypowanie granicy z API na samym początku szybko się zwraca, bo większość błędów wychodziła już przy kompilacji, a nie w przeglądarce.",
      },
    },
  },
  {
    slug: "fullstack-blog",
    name: "Fullstack Blog",
    type: "personal",
    featured: true,
    cover: cover(
      new URL("../assets/images/projects/fullstack-blog-800.webp", import.meta.url).href,
      new URL("../assets/images/projects/fullstack-blog-1600.webp", import.meta.url).href,
      1600,
      829,
    ),
    link: "https://fullstack-blog-udax.onrender.com/",
    linkGithub: "https://github.com/Kamil678/fullstack-blog",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    role: { en: "Solo project: frontend & backend", pl: "Projekt solo: frontend i backend" },
    outcome: {
      en: "A complete blogging platform: React frontend, Express REST API and MongoDB, with JWT authentication.",
      pl: "Kompletna platforma blogowa: frontend w React, REST API w Express i MongoDB, z uwierzytelnianiem JWT.",
    },
    caseStudy: {
      problem: {
        en: "Build an end-to-end product on my own: user accounts, protected content management and a public reading experience, and deploy it as one application.",
        pl: "Samodzielnie zbudować produkt end-to-end: konta użytkowników, chronione zarządzanie treścią i publiczną część do czytania, a potem wdrożyć całość jako jedną aplikację.",
      },
      approach: [
        {
          en: "A REST API in Express with a clear split into routes, controllers and data models in MongoDB.",
          pl: "REST API w Express z czytelnym podziałem na routing, kontrolery i modele danych w MongoDB.",
        },
        {
          en: "JWT-based authentication, with protected routes enforced on both the API and the React client.",
          pl: "Uwierzytelnianie oparte na JWT, z chronionymi ścieżkami zarówno w API, jak i w kliencie React.",
        },
        {
          en: "A React frontend with client-side routing and forms for creating and editing posts.",
          pl: "Frontend w React z routingiem po stronie klienta i formularzami do tworzenia oraz edycji postów.",
        },
      ],
      results: [
        { en: "Deployed on Render with the frontend and API running together.", pl: "Wdrożony na Render, frontend i API działają razem." },
        { en: "Shows I can own a feature from the database to the UI.", pl: "Pokazuje, że potrafię odpowiadać za funkcjonalność od bazy danych po UI." },
      ],
      learnings: {
        en: "Designing the API contract before writing UI made the React side much simpler and taught me to think about auth as a whole-system concern.",
        pl: "Zaprojektowanie kontraktu API przed pisaniem UI mocno uprościło część w React i nauczyło mnie myśleć o autoryzacji jako o sprawie całego systemu.",
      },
    },
  },
  {
    slug: "weddings-in-krakow",
    name: "Weddings In Krakow",
    type: "client",
    featured: false,
    cover: cover(
      new URL("../assets/images/projects/weddings-in-krakow-800.webp", import.meta.url).href,
      new URL("../assets/images/projects/weddings-in-krakow-1600.webp", import.meta.url).href,
      1600,
      830,
    ),
    link: "https://weddingsinkrakow.com/",
    techStack: ["Vue", "Vue Router", "Vue-i18n", "JavaScript", "Vite", "Scss"],
    role: {
      en: "Freelance: website, domain, DNS & hosting",
      pl: "Freelance: strona, domena, DNS i hosting",
    },
    outcome: {
      en: "A multilingual wedding-planning platform connecting couples with trusted vendors in Kraków.",
      pl: "Wielojęzyczna platforma do planowania ślubu, łącząca pary z zaufanymi usługodawcami w Krakowie.",
    },
    caseStudy: {
      problem: {
        en: "Couples, many of them from abroad, needed one place to discover the wedding services available in Kraków, in their own language.",
        pl: "Pary, w dużej części z zagranicy, potrzebowały jednego miejsca, w którym w swoim języku poznają ofertę ślubną w Krakowie.",
      },
      approach: [
        {
          en: "Vue with Vue Router for a fast, app-like site split into clear sections for couples and services.",
          pl: "Vue i Vue Router dla szybkiej strony działającej jak aplikacja, z czytelnym podziałem na sekcje dla par i usług.",
        },
        {
          en: "Full internationalisation with vue-i18n, so every page and piece of content is available in multiple languages.",
          pl: "Pełna internacjonalizacja z vue-i18n, dzięki której każda strona i treść jest dostępna w kilku językach.",
        },
        {
          en: "A custom, responsive design implemented in SCSS to match the brand.",
          pl: "Autorski, responsywny design zaimplementowany w SCSS, zgodny z identyfikacją marki.",
        },
      ],
      results: [
        { en: "Live in production at weddingsinkrakow.com.", pl: "Działa produkcyjnie pod adresem weddingsinkrakow.com." },
        {
          en: "Delivered end to end, from the code to configuring the domain, DNS and hosting.",
          pl: "Dowiezione od A do Z, od kodu po konfigurację domeny, DNS i hostingu.",
        },
        { en: "Reaches international couples in their own language.", pl: "Trafia do par z zagranicy w ich własnym języku." },
      ],
      learnings: {
        en: "Planning translations into the content structure from day one is far cheaper than retrofitting i18n later.",
        pl: "Uwzględnienie tłumaczeń w strukturze treści od pierwszego dnia jest dużo tańsze niż dokładanie i18n później.",
      },
    },
  },
  {
    slug: "wedding-friends",
    name: "Wedding Friends",
    type: "client",
    featured: false,
    cover: cover(
      new URL("../assets/images/projects/wedding-friends-page-800.webp", import.meta.url).href,
      new URL("../assets/images/projects/wedding-friends-page-1600.webp", import.meta.url).href,
      1600,
      806,
    ),
    link: "https://weddingfriends.pl/",
    techStack: ["Vue", "Vue Router", "Vue-i18n", "JavaScript", "Vite", "Scss"],
    role: { en: "Frontend developer", pl: "Frontend developer" },
    outcome: {
      en: "A responsive, multilingual website for a wedding-planning agency, built on a custom design.",
      pl: "Responsywna, wielojęzyczna strona agencji ślubnej, zbudowana na autorskim projekcie graficznym.",
    },
    caseStudy: {
      problem: {
        en: "A wedding-planning agency needed an elegant site that presents its services and works for both Polish and international clients.",
        pl: "Agencja ślubna potrzebowała eleganckiej strony prezentującej jej usługi, która sprawdzi się zarówno u polskich, jak i zagranicznych klientów.",
      },
      approach: [
        {
          en: "Vue + Vue Router single-page site with fast transitions between pages.",
          pl: "Strona SPA w Vue + Vue Router z szybkimi przejściami między podstronami.",
        },
        {
          en: "Multi-language support with vue-i18n.",
          pl: "Obsługa wielu języków z vue-i18n.",
        },
        {
          en: "Pixel-accurate implementation of a custom design in SCSS, responsive down to small phones.",
          pl: "Dokładna implementacja autorskiego projektu w SCSS, responsywna aż do małych telefonów.",
        },
      ],
      results: [
        { en: "Live in production at weddingfriends.pl.", pl: "Działa produkcyjnie pod adresem weddingfriends.pl." },
      ],
      learnings: {
        en: "Working from a designer's mock-ups sharpened my eye for spacing, typography and the details that make a site feel premium.",
        pl: "Praca na projektach od grafika wyostrzyła moje oko na odstępy, typografię i detale, dzięki którym strona wygląda premium.",
      },
    },
  },
  {
    slug: "all-countries-app",
    name: "All Countries App",
    type: "personal",
    featured: false,
    cover: cover(
      new URL("../assets/images/projects/all-countries-app-800.webp", import.meta.url).href,
      new URL("../assets/images/projects/all-countries-app-1600.webp", import.meta.url).href,
      1600,
      829,
    ),
    link: "https://kamil678.github.io/countries-project/",
    linkGithub: "https://github.com/Kamil678/countries-project",
    techStack: ["JavaScript", "HTML5", "CSS3", "REST API"],
    role: { en: "Solo project", pl: "Projekt solo" },
    outcome: {
      en: "A fast, framework-free app for exploring countries of the world, built on a public REST API.",
      pl: "Szybka aplikacja bez frameworka do przeglądania krajów świata, oparta na publicznym REST API.",
    },
    caseStudy: {
      problem: {
        en: "Practise the fundamentals without a framework: fetching data, rendering lists, search and filtering, all in plain JavaScript.",
        pl: "Przećwiczyć podstawy bez frameworka: pobieranie danych, renderowanie list, wyszukiwanie i filtrowanie, wszystko w czystym JavaScripcie.",
      },
      approach: [
        {
          en: "Data fetched from a public REST API with async/await and rendered with plain DOM APIs.",
          pl: "Dane pobierane z publicznego REST API przez async/await i renderowane czystym DOM API.",
        },
        {
          en: "Search and filtering implemented on the client for instant feedback.",
          pl: "Wyszukiwanie i filtrowanie po stronie klienta, więc wyniki pojawiają się natychmiast.",
        },
        {
          en: "Responsive layout in modern CSS, without a UI library.",
          pl: "Responsywny layout w nowoczesnym CSS, bez biblioteki UI.",
        },
      ],
      results: [
        { en: "Hosted on GitHub Pages.", pl: "Hostowana na GitHub Pages." },
      ],
      learnings: {
        en: "Building without a framework made it much clearer what Vue and React actually do for me and when they're worth it.",
        pl: "Praca bez frameworka pokazała mi, co tak naprawdę robią za mnie Vue i React oraz kiedy warto po nie sięgać.",
      },
    },
  },
];

export const findProject = (slug) => PROJECTS.find((project) => project.slug === slug);
