// Skills grouped by category. `tier` reflects how often a tool is used, not a self-rating:
// core = daily, experienced = used commercially, familiar = used in smaller projects.
const icon = (file) => new URL(`../assets/images/skills/${file}.svg`, import.meta.url).href;

export const SKILL_TIERS = ["core", "experienced", "familiar"];

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    skills: [
      { name: "HTML", icon: icon("html"), tier: "core" },
      { name: "CSS", icon: icon("css"), tier: "core" },
      { name: "Scss", icon: icon("scss"), tier: "core" },
      { name: "Bootstrap", icon: icon("bootstrap"), tier: "core" },
      { name: "Tailwind", icon: icon("tailwind"), tier: "core" },
      { name: "JavaScript", icon: icon("javascript"), tier: "core" },
      { name: "TypeScript", icon: icon("typescript"), tier: "experienced", highlight: true },
      { name: "jQuery", icon: icon("jquery"), tier: "experienced" },
      { name: "Vue", icon: icon("vue"), tier: "core", highlight: true },
      { name: "Vite", icon: icon("vite"), tier: "experienced" },
      { name: "Quasar", icon: icon("quasar"), tier: "experienced" },
      { name: "Vuetify", icon: icon("vuetify"), tier: "familiar" },
      { name: "React", icon: icon("react"), tier: "experienced", highlight: true },
      { name: "Webpack", icon: icon("webpack"), tier: "experienced" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "Node.js", icon: icon("nodejs"), tier: "experienced" },
      { name: "Express.js", icon: icon("express"), tier: "experienced" },
      { name: "PHP", icon: icon("php"), tier: "experienced" },
      { name: "Laravel", icon: icon("laravel"), tier: "familiar" },
      { name: "MySQL", icon: icon("mysql"), tier: "experienced" },
      { name: "MongoDB", icon: icon("mongodb"), tier: "familiar" },
    ],
  },
  {
    id: "tools",
    skills: [
      { name: "Cypress", icon: icon("cypress"), tier: "core" },
      { name: "Git", icon: icon("git"), tier: "core" },
      { name: "Gitlab", icon: icon("gitlab"), tier: "experienced" },
      { name: "Github", icon: icon("github"), tier: "experienced" },
      { name: "Docker", icon: icon("docker"), tier: "experienced" },
      { name: "ESLint", icon: icon("eslint"), tier: "experienced" },
      { name: "Jira", icon: icon("jira"), tier: "experienced" },
    ],
  },
];
