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
    techStack: ["Vue 3", "TypeScript", "Vite", "Pinia", "Vue Router", "Axios", "Tailwind CSS", "Sass", "Chart.js", "TMDB API", "Netlify"],
    role: {
      en: "Solo: architecture, API integration, UI and deployment",
      pl: "Realizacja samodzielna: architektura, integracja z API, UI i wdrożenie",
    },
    outcome: {
      en: "A movie search app in Vue 3 and TypeScript, built on the TMDB API, with filters, favorites and statistics charts.",
      pl: "Wyszukiwarka filmów w Vue 3 i TypeScript oparta na API TMDB, z filtrami, ulubionymi i statystykami na wykresach.",
    },
    caseStudy: {
      problem: {
        en: "An app for searching movies from The Movie Database, with filters, movie details with the cast, a favorites list and charts with statistics. I built it on my own, from architecture to deployment on Netlify. The goal was code that's easy to extend: a typed API layer, a single store and small reusable components.",
        pl: "Aplikacja do wyszukiwania filmów z bazy The Movie Database, z filtrami, szczegółami filmu z obsadą, listą ulubionych i statystykami na wykresach. Zbudowałem ją sam, od architektury do wdrożenia na Netlify. Celem było napisanie kodu, który da się łatwo rozwijać: typowana warstwa API, jeden store, małe komponenty wielokrotnego użytku.",
      },
      approach: [
        {
          en: "A typed API layer separate from components. TMDB responses are mapped to my own TypeScript types, and image paths become full URLs sized for where they appear. Components don't depend on the API format, so a change there touches one file.",
          pl: "Typowana warstwa API oddzielona od komponentów. Odpowiedzi TMDB mapuję na własne typy TypeScript, a ścieżki obrazów na gotowe URL-e w rozmiarze dopasowanym do miejsca. Komponenty nie zależą od formatu API, więc jego zmiana dotyka jednego pliku.",
        },
        {
          en: "One place for error handling. Status codes 401, 404 and 429, plus network failures, become clear messages. One store function manages loading and error state for every request. Users always know what's happening, and the code has no duplicated try/catch.",
          pl: "Jedno miejsce obsługi błędów. Kody 401, 404, 429 i brak sieci zamieniam na zrozumiałe komunikaty. Jedna funkcja w store ustawia stan ładowania i błędu dla wszystkich zapytań. Użytkownik zawsze wie, co się dzieje, a w kodzie nie ma powielonych try/catch.",
        },
        {
          en: "Filters in the URL. Search, genre, sort order, year, rating and page number go into the query string. Results can be shared as a link, the back button works, and a refresh keeps the filters.",
          pl: "Filtry w adresie URL. Wyszukiwanie, gatunek, sortowanie, rok, ocena i numer strony trafiają do query stringa. Wynikami można się podzielić linkiem, przycisk „wstecz” działa, a odświeżenie strony nie kasuje filtrów.",
        },
        {
          en: "Server-side filtering. Requests go to the /discover/movie endpoint, so results and pagination cover the whole TMDB database, not just the 20 movies already loaded.",
          pl: "Filtrowanie po stronie serwera. Zapytania idą do endpointu /discover/movie, więc wyniki i paginacja obejmują całą bazę TMDB, a nie tylko 20 pobranych filmów.",
        },
        {
          en: "Favorites without a backend. The list lives in Pinia and is saved to localStorage, so it works without login and survives a refresh. Chart.js uses it to plot ratings and release years.",
          pl: "Ulubione bez backendu. Lista żyje w Pinia i zapisuje się w localStorage, więc działa bez logowania i przetrwa odświeżenie. Na jej podstawie Chart.js rysuje rozkład ocen i lat premiery.",
        },
        {
          en: "The biggest challenge: filters and the URL have to stay in sync both ways. Without a guard, one change triggered both directions and data was fetched twice. I fixed it with a flag that tells app-driven navigation apart from user navigation, so each change now makes one API request.",
          pl: "Największe wyzwanie: filtry i URL muszą być zsynchronizowane w obie strony. Bez zabezpieczenia jedna zmiana uruchamiała oba kierunki i dane pobierały się podwójnie. Rozwiązałem to flagą, która odróżnia nawigację wywołaną przez aplikację od nawigacji użytkownika, więc każda zmiana daje jedno zapytanie do API.",
        },
      ],
      results: [
        {
          en: "5 views: home, movie list with filters, movie details, favorites, statistics.",
          pl: "5 widoków: strona główna, lista filmów z filtrami, szczegóły filmu, ulubione, statystyki.",
        },
        {
          en: "37 components grouped by feature, including shared ones: movie card, pagination, search input, spinner.",
          pl: "37 komponentów pogrupowanych według funkcji, w tym wspólne: karta filmu, paginacja, wyszukiwarka, spinner.",
        },
        {
          en: "4 of 5 routes are lazy-loaded, so the first visit downloads less code.",
          pl: "4 z 5 tras ładowane leniwie, więc pierwsze wejście pobiera mniej kodu.",
        },
        { en: "Responsive Polish UI, deployed and live.", pl: "Responsywny interfejs po polsku, wdrożony i dostępny online." },
      ],
    },
  },
  {
    slug: "soft-loft",
    name: "Soft Loft",
    type: "client",
    featured: true,
    cover: cover(
      new URL("../assets/images/projects/softloft-800.webp", import.meta.url).href,
      new URL("../assets/images/projects/softloft-1600.webp", import.meta.url).href,
      1600,
      824,
    ),
    link: "https://softloft-pilates.pl/",
    techStack: [
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "@nuxtjs/i18n",
      "@nuxt/image",
      "@nuxt/fonts",
      "Fitssey",
      "Google Maps",
      "Cloudflare Pages",
    ],
    role: {
      en: "Solo delivery: frontend, integrations, deployment and client communication",
      pl: "Realizacja samodzielna: frontend, integracje, wdrożenie i współpraca z klientką",
    },
    outcome: {
      en: "A website for a new reformer pilates studio in Kraków, with class booking built right into the site.",
      pl: "Strona nowego studia pilates na reformerach w Krakowie, z rezerwacją zajęć bezpośrednio na stronie.",
    },
    caseStudy: {
      problem: {
        en: 'A new pilates studio needed a website that turns visitors into bookings. I ran the project on my own from the first client meeting to production: first a "coming soon" page before the studio opened, then the full 7-page site.',
        pl: "Nowe studio pilates potrzebowało strony, która zamieni odwiedzających w zapisy na zajęcia. Prowadziłem projekt sam, od pierwszej rozmowy z klientką do produkcji: najpierw strona „coming soon” przed otwarciem studia, potem pełna strona z 7 podstronami.",
      },
      approach: [
        {
          en: "Static Site Generation in Nuxt, hosted on Cloudflare Pages. The site is served fast from a global CDN, is secure and search-engine friendly, and costs almost nothing to maintain. Content lives in structured JSON files (classes, pricing, FAQ, instructors, partners), so updates don't require code changes.",
          pl: "Static Site Generation w Nuxt i hosting na Cloudflare Pages. Strona działa szybko dzięki globalnemu CDN, jest bezpieczna, dobrze widoczna w wyszukiwarkach, a jej utrzymanie praktycznie nic nie kosztuje. Treści są w ustrukturyzowanych plikach JSON (zajęcia, cennik, FAQ, instruktorzy, partnerzy), więc aktualizacja nie wymaga zmian w kodzie.",
        },
        {
          en: "A token-based design system: colours and fonts are CSS variables wired into Tailwind. When the client changed her visual identity mid-project, rebranding the whole site took a few lines.",
          pl: "Design system oparty na tokenach: kolory i fonty są zdefiniowane jako CSS variables zintegrowane z Tailwind. Kiedy klientka w trakcie projektu zmieniła identyfikację wizualną, rebranding całej strony sprowadził się do kilku linijek.",
        },
        {
          en: "Internationalisation from day one, so adding English in the next phase needs no rework of routing or components.",
          pl: "Architektura gotowa na wielojęzyczność. i18n działa od pierwszego dnia, więc wersję angielską w kolejnym etapie dodam bez przebudowy routingu i komponentów.",
        },
        {
          en: "Conversion-focused UX: every CTA leads to a highlighted booking page with the embedded schedule, with a fallback in case the third-party service fails.",
          pl: "UX nastawiony na konwersję: wszystkie CTA prowadzą do wyróżnionej strony zapisów z osadzonym grafikiem. Na wypadek problemów z usługą zewnętrzną jest przygotowany fallback.",
        },
        {
          en: "Accessibility: a custom accessible modal with a focus trap, keyboard support, focus restore and ARIA attributes, plus semantic HTML and SEO meta tags on every page.",
          pl: "Dostępność: własny, dostępny komponent modala (focus trap, obsługa klawiatury, przywracanie fokusu, atrybuty ARIA), do tego semantyczny HTML i meta tagi SEO na każdej podstronie.",
        },
        {
          en: "The biggest challenge: the Fitssey booking widget wasn't built for SPAs. It only initialised once, so the schedule disappeared after client-side navigation. I built a mechanism that resets the script and its global state on every visit to the booking page and loads it again, rendered client-side only and with load error handling. Booking now works reliably whatever path the user takes.",
          pl: "Największe wyzwanie: widget rezerwacji Fitssey nie był przystosowany do aplikacji SPA. Inicjalizował się tylko raz, więc po przejściu między podstronami grafik znikał. Napisałem mechanizm, który przy każdym wejściu na stronę zapisów czyści stan skryptu i jego globalne obiekty, a potem ładuje go od nowa, tylko po stronie klienta i z obsługą błędu ładowania. Rezerwacja działa niezawodnie niezależnie od ścieżki użytkownika.",
        },
      ],
      results: [
        {
          en: "Lighthouse: Performance 95 · Accessibility 96 · SEO 92 · Best Practices 92.",
          pl: "Lighthouse: Wydajność 95 · Ułatwienia dostępu 96 · SEO 92 · Sprawdzone metody 92.",
        },
        {
          en: 'A "coming soon" page was live before the studio opened, followed by the full 7-page site.',
          pl: "Strona „coming soon” działała przed otwarciem studia, a potem wdrożyłem pełną stronę z 7 podstronami.",
        },
        { en: "Customers can book classes directly on the site.", pl: "Klienci mogą zarezerwować zajęcia bezpośrednio na stronie." },
        {
          en: "The client can keep growing the site (another language, new content, rebranding) without rewriting code.",
          pl: "Klientka może dalej rozwijać stronę (kolejny język, nowe treści, rebranding) bez przepisywania kodu.",
        },
      ],
    },
  },
  // {
  //   slug: "fullstack-blog",
  //   name: "Fullstack Blog",
  //   type: "personal",
  //   featured: false,
  //   cover: cover(
  //     new URL("../assets/images/projects/fullstack-blog-800.webp", import.meta.url).href,
  //     new URL("../assets/images/projects/fullstack-blog-1600.webp", import.meta.url).href,
  //     1600,
  //     829,
  //   ),
  //   link: "https://fullstack-blog-udax.onrender.com/",
  //   linkGithub: "https://github.com/Kamil678/fullstack-blog",
  //   techStack: [
  //     "React 18",
  //     "Vite",
  //     "Redux Toolkit",
  //     "redux-persist",
  //     "React Router",
  //     "Tailwind CSS",
  //     "Flowbite React",
  //     "React Quill",
  //     "Firebase",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //     "Mongoose",
  //     "JWT",
  //     "bcryptjs",
  //   ],
  //   role: {
  //     en: "Solo: frontend, backend and Firebase integration",
  //     pl: "Realizacja samodzielna: frontend, backend i integracja z Firebase",
  //   },
  //   outcome: {
  //     en: "A blog application with an admin dashboard, comments and Google sign-in, built on the MERN stack.",
  //     pl: "Aplikacja blogowa z panelem administratora, komentarzami i logowaniem przez Google, zbudowana w architekturze MERN.",
  //   },
  //   caseStudy: {
  //     problem: {
  //       en: "A MERN blog with sign-up, sign-in (email or Google) and an admin role. The admin writes and edits posts in a WYSIWYG editor and manages users and comments from a dashboard. I built it in stages, using feature branches merged into develop.",
  //       pl: "Blog w architekturze MERN z rejestracją, logowaniem (e-mail lub Google) i rolą administratora. Administrator tworzy i edytuje posty w edytorze WYSIWYG oraz zarządza użytkownikami i komentarzami z poziomu panelu. Projekt rozwijałem etapami na osobnych gałęziach funkcjonalnych (feature branches) scalanych do develop.",
  //     },
  //     approach: [
  //       {
  //         en: "JWT stored in an httpOnly cookie. Browser scripts cannot read it, which makes theft through XSS harder.",
  //         pl: "Token JWT w ciasteczku httpOnly. Skrypty po stronie przeglądarki nie mają do niego dostępu, więc trudniej go wykraść przez XSS.",
  //       },
  //       {
  //         en: "Permissions enforced on the backend (isAdmin flag in the token, verifyToken middleware). Hiding buttons in the UI is not enough, so the API rejects unauthorized requests itself. The frontend also uses LoggedInRoute and OnlyAdminRoute guards.",
  //         pl: "Uprawnienia sprawdzane na backendzie (flaga isAdmin w tokenie, middleware verifyToken). Ukrycie przycisków na frontendzie nie wystarcza, więc API samo odrzuca nieuprawnione żądania. Na froncie dodatkowo trasy LoggedInRoute i OnlyAdminRoute.",
  //       },
  //       {
  //         en: "Images in Firebase Storage, only the URL in the database. The database stores no binary files, and uploads show a progress bar.",
  //         pl: "Obrazy w Firebase Storage, w bazie tylko URL. Baza nie przechowuje plików binarnych, a upload pokazuje postęp (pasek procentowy).",
  //       },
  //       {
  //         en: "One GET /api/post endpoint with filters (author, category, slug, search term) and pagination (startIndex, limit). The same route serves the home page, search, post view and dashboard, and \"Show more\" loads the next batch.",
  //         pl: "Jeden endpoint GET /api/post z filtrami (autor, kategoria, slug, fraza) i paginacją (startIndex, limit). Ta sama trasa obsługuje stronę główną, wyszukiwarkę, widok posta i panel, a „Pokaż więcej” dociąga kolejną porcję.",
  //       },
  //       {
  //         en: "User and theme state in Redux Toolkit with redux-persist, so the session and dark mode survive a page refresh.",
  //         pl: "Stan użytkownika i motywu w Redux Toolkit z redux-persist, więc sesja i wybrany tryb ciemny zostają po odświeżeniu strony.",
  //       },
  //     ],
  //     results: [
  //       {
  //         en: "Working features: sign-up and sign-in (email, Google), profile and avatar editing, account deletion, post CRUD, comments with edit, delete and likes, search with filters, dashboard with stats (e.g. posts from the last month), dark mode.",
  //         pl: "Działające funkcje: rejestracja i logowanie (e-mail, Google), edycja profilu i zdjęcia, usuwanie konta, CRUD postów, komentarze z edycją, usuwaniem i polubieniami, wyszukiwarka z filtrami, panel ze statystykami (np. liczba postów z ostatniego miesiąca), tryb ciemny.",
  //       },
  //     ],
  //   },
  // },
  {
    slug: "weddings-in-krakow",
    name: "Weddings in Krakow",
    type: "client",
    featured: false,
    cover: cover(
      new URL("../assets/images/projects/weddings-in-krakow-800.webp", import.meta.url).href,
      new URL("../assets/images/projects/weddings-in-krakow-1600.webp", import.meta.url).href,
      1600,
      830,
    ),
    link: "https://weddingsinkrakow.com/",
    techStack: ["Vue 3", "Vite", "Vue Router", "vue-i18n", "SCSS", "EmailJS", "Puppeteer", "Lodash", "Font Awesome", "Cloudflare Pages"],
    role: {
      en: "Solo: UI design, frontend, SEO, migration, deployment and client communication",
      pl: "Realizacja samodzielna: projekt UI, frontend, SEO, migracja, wdrożenie i kontakt z klientką",
    },
    outcome: {
      en: "A multilingual website for a Kraków wedding planning business: 9 pages in 5 languages, replacing an old WordPress site.",
      pl: "Wielojęzyczna strona firmy organizującej śluby w Krakowie: 9 podstron w 5 językach, w miejsce starej strony na WordPressie.",
    },
    caseStudy: {
      problem: {
        en: "A Kraków wedding planner who works with couples from Poland and abroad needed a new website to replace an old WordPress site. I designed, built and deployed it myself and delivered the first version in about 4 months, including fixes after the client's review. The client still works with me: I have added new services, testimonials and offer updates, and expanded the SEO.",
        pl: "Wedding plannerka z Krakowa, która obsługuje pary z Polski i z zagranicy, potrzebowała nowej strony w miejsce starej na WordPressie. Zaprojektowałem, zbudowałem i wdrożyłem ją sam, a pierwszą wersję oddałem po około 4 miesiącach, razem z poprawkami po audycie klientki. Klientka nadal ze mną współpracuje: dodałem nowe usługi, opinie i zmiany w ofercie oraz rozbudowałem SEO.",
      },
      approach: [
        {
          en: "Language stored in the URL. Each page has a Polish and an English URL (e.g. /oferta and /offer), and a router guard redirects to the URL that matches the selected language. Each language version has its own address that Google indexes separately and people can share.",
          pl: "Język zapisany w adresie URL. Każda podstrona ma adres polski i angielski (np. /oferta i /offer), a guard routera przekierowuje na adres zgodny z wybranym językiem. Każda wersja językowa ma własny adres, który Google indeksuje osobno i który można komuś wysłać.",
        },
        {
          en: "5 languages, only 2 sets of URLs. The site is available in Polish, English, French, German and Italian, and FR, DE and IT use the English URLs. Couples from abroad read the site in their own language, and the URL structure stays simple.",
          pl: "5 języków, ale tylko 2 zestawy adresów. Strona działa po polsku, angielsku, francusku, niemiecku i włosku, a FR, DE i IT korzystają z adresów angielskich. Pary z zagranicy dostają tekst w swoim języku, a struktura adresów pozostaje prosta.",
        },
        {
          en: "Automated technical SEO. Title, description, Open Graph, canonical and hreflang are set for each page and language. A sitemap with language alternates is generated on every build, and business details are described in JSON-LD (LocalBusiness), so Google recognizes it as a local business.",
          pl: "SEO techniczne zautomatyzowane. Title, description, Open Graph, canonical i hreflang są ustawiane osobno dla każdej podstrony i języka. Sitemap z alternatywnymi wersjami językowymi generuje się sama przy każdym buildzie, a dane firmy są opisane w JSON-LD (LocalBusiness), żeby Google rozpoznawał ją jako lokalną firmę.",
        },
        {
          en: "Migration without losing links. 18 old WordPress URLs and the .pl domain redirect with 301 to the new URLs, with the rules in the Cloudflare Pages _redirects file. Old links still work, and the new URLs take over the search rankings of the old ones.",
          pl: "Migracja bez utraty linków. 18 starych adresów z WordPressa oraz domena .pl przekierowują kodem 301 na nowe adresy, a reguły są zapisane w pliku _redirects Cloudflare Pages. Stare linki dalej działają, a nowe adresy przejmują pozycje starych w wyszukiwarce.",
        },
        {
          en: "Contact form without a backend. Inquiries from couples are sent through EmailJS straight from the browser. Hosting is static, so the client pays for no server and there is nothing to maintain.",
          pl: "Formularz kontaktowy bez backendu. Zapytania od par są wysyłane przez EmailJS prosto z przeglądarki. Hosting jest statyczny, więc klientka nie płaci za serwer i nie trzeba go utrzymywać.",
        },
        {
          en: "The biggest challenge: a Vue SPA sends an empty HTML file, so bots that don't run JavaScript saw only an empty page shell, a serious problem for a business whose clients search on Google. I wrote a Puppeteer script that opens the production build in headless Chrome and saves every page as static HTML. Users still get an SPA, bots see the full content, and the app code didn't change. Along the way I fixed a second bug: on a first visit to an English URL, the router redirected to the Polish version. Now, when no language is stored yet, it reads the language from the URL.",
          pl: "Największe wyzwanie: Vue SPA wysyła pusty HTML, więc roboty, które nie wykonują JavaScriptu, widziały tylko pusty szkielet strony. To duży problem dla firmy, której klienci szukają usług w Google. Napisałem skrypt w Puppeteer, który uruchamia gotowy build w Chrome bez interfejsu i zapisuje każdą podstronę jako statyczny HTML. Użytkownik dalej dostaje SPA, roboty widzą pełną treść, a kod aplikacji pozostał bez zmian. Przy okazji naprawiłem drugi błąd: przy pierwszej wizycie z angielskiego adresu router przekierowywał na wersję polską. Teraz, gdy język nie jest jeszcze zapisany, router odczytuje go z adresu URL.",
        },
      ],
      results: [
        { en: "Live commercial site: 9 pages in 5 languages.", pl: "Działająca strona komercyjna: 9 podstron w 5 językach." },
        {
          en: "Every page has static HTML with full content and meta tags.",
          pl: "Każda podstrona ma statyczny HTML z pełną treścią i meta tagami.",
        },
        { en: "A sitemap with hreflang, generated automatically.", pl: "Sitemap z hreflang generuje się automatycznie." },
        {
          en: "Old WordPress links still lead to the right pages.",
          pl: "Stare linki z WordPressa dalej prowadzą na właściwe podstrony.",
        },
        {
          en: "Working with the client since December 2024, shipping changes as they come in.",
          pl: "Współpraca z klientką trwa od grudnia 2024, kolejne zmiany wdrażam na bieżąco.",
        },
      ],
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
    linkGithub: "https://github.com/Kamil678/weeding-friends",
    techStack: ["Vue 3", "Vue Router 4", "vue-i18n", "SCSS", "Vite 5", "Cloudflare Pages", "Google Maps Embed", "Font Awesome"],
    role: {
      en: "Solo: frontend, translations, image optimization, deployment and client changes",
      pl: "Realizacja samodzielna: frontend, wersja językowa, optymalizacja zdjęć, wdrożenie i zmiany od klientki",
    },
    outcome: {
      en: "A bilingual (PL/EN) business website for a wedding planning agency, presenting the offer, the team and past events.",
      pl: "Dwujęzyczna (PL/EN) strona wizytówka agencji organizującej śluby i wesela, prezentująca ofertę, zespół i realizacje.",
    },
    caseStudy: {
      problem: {
        en: "A bilingual (PL/EN) website for a wedding planning agency. It presents the offer, the team and past events, and makes it easy to get in touch.",
        pl: "Dwujęzyczna strona (PL/EN) dla agencji ślubnej. Ma prezentować ofertę, zespół i realizacje oraz ułatwiać kontakt",
      },
      approach: [
        {
          en: "Static SPA with no backend. Content rarely changes, and contact goes through email, phone and social media. There is no server or database to maintain, so hosting is free.",
          pl: "Statyczna SPA bez backendu. Treść zmienia się rzadko, a kontakt idzie mailem, telefonem i przez social media. Nie trzeba utrzymywać serwera i bazy, więc hosting jest darmowy.",
        },
        {
          en: "i18n with vue-i18n and one JSON file per language. Copy is kept out of the templates, so content changes from the client don't touch the components. The selected language is saved in localStorage, and Polish is the default and the fallback, because it is the main audience.",
          pl: "i18n przez vue-i18n i pliki JSON dla każdego języka. Teksty są oddzielone od szablonów, więc poprawki treści od klientki nie wymagają zmian w komponentach. Wybrany język zapisuje się w localStorage, a polski jest domyślny i służy jako fallback, bo to główna grupa odbiorców.",
        },
        {
          en: "Custom carousel instead of a library, split into 4 components (Carousel, CarouselItem, CarouselControls, CarouselIndicators) that talk through props and emits. The slide animation follows the navigation direction, and clicking an arrow restarts the timer, so the slide doesn't change right after a manual switch. No extra dependency.",
          pl: "Własna karuzela zamiast biblioteki, podzielona na 4 komponenty (Carousel, CarouselItem, CarouselControls, CarouselIndicators), które komunikują się przez props i emits. Kierunek animacji zależy od kierunku przewijania, a kliknięcie strzałki restartuje timer, żeby slajd nie zmienił się zaraz po ręcznym przełączeniu. Strona nie ma dzięki temu dodatkowej zależności.",
        },
        {
          en: "Global SCSS variables injected by Vite (additionalData). Colors and breakpoints (576 to 1600 px) live in one file, and every component can use them without importing it. Class names follow BEM, so component styles don't clash.",
          pl: "Globalne zmienne SCSS wstrzykiwane przez Vite (additionalData). Kolory i breakpointy (od 576 do 1600 px) są w jednym pliku i każdy komponent ma do nich dostęp bez ręcznego importu. Do nazw klas używam BEM, więc style w komponentach się nie gryzą.",
        },
        {
          en: "JPG to WebP conversion. The site is built around large photos, and after conversion the changed files weigh 31.5 MB instead of 76.1 MB (about 59% less).",
          pl: "Konwersja zdjęć z JPG na WebP. Strona opiera się na dużych fotografiach, a po konwersji zmienione pliki ważą 31,5 MB zamiast 76,1 MB (około 59% mniej).",
        },
        {
          en: "The biggest challenge: SPA routing on static hosting. With createWebHistory, opening or refreshing a subpage directly (e.g. /offer) returned a 404. On GitHub Pages I worked around it with a 404.html redirect and a separate Vite base, on the custom domain with an .htaccess rewrite rule, and on Cloudflare Pages with a _redirects file (/* /index.html 200). Now every path returns the app with status 200, and subpages work on refresh and from external links.",
          pl: "Największe wyzwanie: routing SPA na hostingu statycznym. Przy createWebHistory każde wejście bezpośrednio na podstronę (np. /offer) albo jej odświeżenie dawało 404. Na GitHub Pages obchodziłem to plikiem 404.html z przekierowaniem i osobnym base w Vite, na własnej domenie regułą rewrite w .htaccess, a na Cloudflare Pages plikiem _redirects (/* /index.html 200). Teraz każda ścieżka zwraca aplikację z kodem 200, a podstrony działają po odświeżeniu i z linków zewnętrznych.",
        },
      ],
      results: [
        {
          en: "The site runs in two languages and has 5 pages: Home, About, Offer, Gallery, Contact.",
          pl: "Strona działa w dwóch językach i ma 5 podstron: Home, O nas, Oferta, Galeria, Kontakt.",
        },
        {
          en: "Total size of the optimized images went down from 76.1 MB to 31.5 MB.",
          pl: "Waga zoptymalizowanych zdjęć spadła z 76,1 MB do 31,5 MB.",
        },
        {
          en: "After launch, the client kept sending change requests (offer prices, Facebook, Instagram and TikTok links), and I implemented them.",
          pl: "Po pierwszym wdrożeniu klientka zgłaszała kolejne zmiany (ceny w ofercie, linki do Facebooka, Instagrama i TikToka), a ja je wprowadzałem.",
        },
      ],
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
    techStack: ["HTML5", "CSS3", "JavaScript ES6+", "ES Modules", "Fetch API", "JSON", "localStorage", "Ionicons", "GitHub Pages"],
    role: {
      en: "Solo: all code and deployment, built from Frontend Mentor designs",
      pl: "Realizacja samodzielna: cały kod i wdrożenie, na podstawie projektu z Frontend Mentor",
    },
    outcome: {
      en: "A world countries explorer in vanilla JavaScript, with search, a region filter, country details and dark mode.",
      pl: "Przeglądarka krajów świata w czystym JavaScripcie, z wyszukiwarką, filtrem regionów, szczegółami kraju i trybem ciemnym.",
    },
    caseStudy: {
      problem: {
        en: "The app shows 250 countries of the world, with search, a region filter, a detail view with neighbouring countries and dark mode. It is one of my first projects, a Frontend Mentor challenge built from desktop and mobile mockups in both themes. I built it without a framework to learn how to work with data and the DOM in vanilla JavaScript.",
        pl: "Aplikacja pokazuje 250 krajów świata. Ma wyszukiwarkę, filtr regionów, widok szczegółów z krajami sąsiednimi i tryb ciemny. To jeden z moich pierwszych projektów, wyzwanie z Frontend Mentor odtworzone na podstawie makiet desktop i mobile w obu motywach. Zrobiłem go bez frameworka, żeby nauczyć się pracy z danymi i z DOM w czystym JavaScripcie.",
      },
      approach: [
        {
          en: "Routing with a URL parameter (?country=CODE). Without a framework I had no router, so app.js reads the parameter and picks the view: the list or the details. Every country gets its own link, the back button works, and no server configuration is needed on GitHub Pages.",
          pl: "Routing przez parametr w URL (?country=KOD). Bez frameworka nie miałem routera, więc app.js sprawdza parametr i wybiera widok: listę albo szczegóły. Każdy kraj ma własny link, przycisk „wstecz” działa, a na GitHub Pages nie trzeba konfigurować serwera.",
        },
        {
          en: "Load data once, filter in the browser. I load the country list once and combine search and the region filter in one function, so typing does not send new requests.",
          pl: "Jedno pobranie danych, filtrowanie w przeglądarce. Listę krajów pobieram raz, a wyszukiwarkę i filtr regionu łączę w jednej funkcji, więc wpisywanie kolejnych liter nie wysyła nowych zapytań.",
        },
        {
          en: "Mapping data to my own object (name, capital, population, flagUrl...). The render functions don't depend on the source format, so when I changed the data source, I didn't have to rewrite them.",
          pl: "Mapowanie danych na własny obiekt (name, capital, population, flagUrl...). Funkcje renderujące nie zależą od formatu źródła, więc przy zmianie źródła danych nie musiałem ich przepisywać.",
        },
        {
          en: "Dark mode built on CSS custom properties. A dark class on body overrides only a few variables, so no rules are duplicated for the second theme. The chosen theme is saved in localStorage and stays after a reload.",
          pl: "Tryb ciemny na zmiennych CSS. Klasa dark na body nadpisuje tylko kilka zmiennych, więc nie musiałem powielać reguł dla drugiego motywu. Wybrany motyw zapisuję w localStorage, więc zostaje po odświeżeniu strony.",
        },
        {
          en: "Local data instead of an API key. The new REST Countries API version requires a key, and on a static site anyone could read it and use up the quota. So the app reads data.json and doesn't depend on an external service.",
          pl: "Lokalne dane zamiast klucza API. Nowa wersja REST Countries API wymaga klucza, a na stronie statycznej każdy mógłby go podejrzeć i wyczerpać limit. Dlatego aplikacja czyta plik data.json i nie zależy od zewnętrznego serwisu.",
        },
        {
          en: 'The biggest challenge: years later the app stopped working. REST Countries had shut down API v3.1, and the browser blocked the redirect with a CORS error. I analysed the server responses, found the cause and moved to local data. I also added error handling: a response.ok check, .catch and an on-page message instead of a blank screen. An unknown country code in the URL now shows a "not found" message, and the app runs live again.',
          pl: "Największe wyzwanie: po latach aplikacja przestała działać. REST Countries wyłączyło API v3.1, a przeglądarka blokowała przekierowanie błędem CORS. Przeanalizowałem odpowiedzi serwera, znalazłem przyczynę i przeszedłem na lokalne dane. Dodałem też obsługę błędów: sprawdzanie response.ok, .catch i komunikat na stronie zamiast pustego ekranu. Nieznany kod kraju w URL pokazuje teraz komunikat „not found”, a aplikacja znowu działa na żywo.",
        },
      ],
      results: [
        {
          en: "The app runs live on GitHub Pages and shows 250 countries.",
          pl: "Aplikacja działa na żywo na GitHub Pages i pokazuje 250 krajów.",
        },
        {
          en: 'Search by name and the region filter work together, with a "no results" message when nothing matches.',
          pl: "Wyszukiwanie po nazwie i filtr regionu działają razem, a gdy nic nie pasuje, pojawia się komunikat o braku wyników.",
        },
        {
          en: "The detail view shows the native name, currencies, languages and neighbouring countries as clickable links.",
          pl: "Widok szczegółów pokazuje m.in. nazwę natywną, waluty, języki i kraje sąsiednie jako klikalne linki.",
        },
        {
          en: "If data fails to load, the user sees a clear message.",
          pl: "Gdy dane się nie załadują, użytkownik widzi czytelny komunikat.",
        },
        {
          en: "Responsive layout with breakpoints at 1024, 768 and 480 px.",
          pl: "Responsywny układ z punktami przełamania 1024, 768 i 480 px.",
        },
      ],
    },
  },
];

export const findProject = (slug) => PROJECTS.find((project) => project.slug === slug);
