const icon = (file) => new URL(`../assets/images/skills/${file}.svg`, import.meta.url).href;

export const SKILL_TIERS = ["core", "experienced", "familiar"];

// `mono`: a single-colour dark icon, inverted in dark mode so it stays visible.
// Skills without an icon get a monogram badge.
export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    skills: [
      { name: "Vue", icon: icon("vue"), tier: "core", highlight: true },
      { name: "Nuxt", icon: icon("nuxt"), tier: "core", highlight: true },
      { name: "TypeScript", icon: icon("typescript"), tier: "core", highlight: true },
      { name: "JavaScript", icon: icon("javascript"), tier: "core" },
      { name: "Pinia", icon: icon("pinia"), tier: "core" },
      { name: "Tailwind", icon: icon("tailwind"), tier: "core" },
      { name: "HTML", icon: icon("html"), tier: "core" },
      { name: "CSS", icon: icon("css"), tier: "core" },
      { name: "Scss", icon: icon("scss"), tier: "core" },
      { name: "Axios", icon: icon("axios"), tier: "core" },
      { name: "React", icon: icon("react"), tier: "experienced", highlight: true },
      { name: "React Router", icon: icon("reactrouter"), tier: "experienced" },
      { name: "Quasar", icon: icon("quasar"), tier: "experienced" },
      { name: "shadcn-vue", icon: icon("shadcn"), tier: "experienced", mono: true },
      { name: "Storybook", icon: icon("storybook"), tier: "experienced" },
      { name: "Highcharts", tier: "experienced" },
      { name: "AG Grid", tier: "experienced" },
      { name: "Bootstrap", icon: icon("bootstrap"), tier: "experienced" },
      { name: "jQuery", icon: icon("jquery"), tier: "experienced" },
      { name: "Redux", icon: icon("redux"), tier: "familiar" },
      { name: "Vuetify", icon: icon("vuetify"), tier: "familiar" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "PHP", icon: icon("php"), tier: "experienced" },
      { name: "Laravel", icon: icon("laravel"), tier: "experienced" },
      { name: "Laminas", tier: "experienced" },
      { name: "MySQL", icon: icon("mysql"), tier: "experienced" },
      { name: "Laravel Nova", icon: icon("laravelnova"), tier: "experienced" },
      { name: "Symfony", icon: icon("symfony"), tier: "familiar", mono: true },
      { name: "Doctrine", icon: icon("doctrine"), tier: "familiar" },
      { name: "Node.js", icon: icon("nodejs"), tier: "familiar" },
      { name: "Express.js", icon: icon("express"), tier: "familiar", mono: true },
      { name: "MongoDB", icon: icon("mongodb"), tier: "familiar" },
    ],
  },
  {
    id: "tools",
    skills: [
      { name: "Git", icon: icon("git"), tier: "core" },
      { name: "GitLab CI/CD", icon: icon("gitlab"), tier: "core" },
      { name: "Cypress", icon: icon("cypress"), tier: "core" },
      { name: "Claude Code", icon: icon("claude"), tier: "core", highlight: true },
      { name: "Vite", icon: icon("vite"), tier: "core" },
      { name: "ESLint", icon: icon("eslint"), tier: "core" },
      { name: "Prettier", icon: icon("prettier"), tier: "core" },
      { name: "Docker", icon: icon("docker"), tier: "experienced" },
      { name: "Figma", icon: icon("figma"), tier: "experienced" },
      { name: "Jira", icon: icon("jira"), tier: "experienced" },
      { name: "Webpack", icon: icon("webpack"), tier: "experienced" },
      { name: "Bitbucket", icon: icon("bitbucket"), tier: "experienced" },
      { name: "GitHub", icon: icon("github"), tier: "experienced", mono: true },
      { name: "Cloudflare Pages", icon: icon("cloudflare"), tier: "experienced" },
      { name: "Sentry", icon: icon("sentry"), tier: "familiar", mono: true },
    ],
  },
];

export const findSkill = (name) => SKILL_CATEGORIES.flatMap((category) => category.skills).find((skill) => skill.name === name);
