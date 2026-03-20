import { defineStore } from "pinia";

export const useSkillsStore = defineStore("skills", {
  state: () => ({
    frontend: [
      {
        id: 1,
        name: "HTML",
        img: new URL("../assets/images/skills/html.svg", import.meta.url).href,
        mastery: "expert",
      },
      {
        id: 2,
        name: "CSS",
        img: new URL("../assets/images/skills/css.svg", import.meta.url).href,
        mastery: "expert",
      },
      {
        id: 3,
        name: "Scss",
        img: new URL("../assets/images/skills/scss.svg", import.meta.url).href,
        mastery: "expert",
      },
      {
        id: 4,
        name: "Bootstrap",
        img: new URL("../assets/images/skills/bootstrap.svg", import.meta.url).href,
        mastery: "expert",
      },
      {
        id: 5,
        name: "Tailwind",
        img: new URL("../assets/images/skills/tailwind.svg", import.meta.url).href,
        mastery: "expert",
      },
      {
        id: 6,
        name: "JavaScript",
        img: new URL("../assets/images/skills/javascript.svg", import.meta.url).href,
        mastery: "expert",
      },
      {
        id: 7,
        name: "TypeScript",
        img: new URL("../assets/images/skills/typescript.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 8,
        name: "jQuery",
        img: new URL("../assets/images/skills/jquery.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 9,
        name: "Vue",
        img: new URL("../assets/images/skills/vue.svg", import.meta.url).href,
        mastery: "expert",
      },
      {
        id: 10,
        name: "Vite",
        img: new URL("../assets/images/skills/vite.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 11,
        name: "Quasar",
        img: new URL("../assets/images/skills/quasar.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 12,
        name: "Vuetify",
        img: new URL("../assets/images/skills/vuetify.svg", import.meta.url).href,
        mastery: "intermediate",
      },
      {
        id: 13,
        name: "React",
        img: new URL("../assets/images/skills/react.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 14,
        name: "Webpack",
        img: new URL("../assets/images/skills/webpack.svg", import.meta.url).href,
        mastery: "advanced",
      },
    ],
    backend: [
      {
        id: 1,
        name: "Node.js",
        img: new URL("../assets/images/skills/nodejs.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 2,
        name: "Express.js",
        img: new URL("../assets/images/skills/express.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 3,
        name: "PHP",
        img: new URL("../assets/images/skills/php.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 4,
        name: "Laravel",
        img: new URL("../assets/images/skills/laravel.svg", import.meta.url).href,
        mastery: "intermediate",
      },
      {
        id: 5,
        name: "MySQL",
        img: new URL("../assets/images/skills/mysql.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 6,
        name: "MongoDB",
        img: new URL("../assets/images/skills/mongodb.svg", import.meta.url).href,
        mastery: "intermediate",
      },
    ],
    tools: [
      {
        id: 1,
        name: "Cypress",
        img: new URL("../assets/images/skills/cypress.svg", import.meta.url).href,
        mastery: "expert",
      },
      {
        id: 2,
        name: "Git",
        img: new URL("../assets/images/skills/git.svg", import.meta.url).href,
        mastery: "expert",
      },
      {
        id: 3,
        name: "Gitlab",
        img: new URL("../assets/images/skills/gitlab.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 4,
        name: "Github",
        img: new URL("../assets/images/skills/github.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 5,
        name: "Docker",
        img: new URL("../assets/images/skills/docker.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 6,
        name: "ESLint",
        img: new URL("../assets/images/skills/eslint.svg", import.meta.url).href,
        mastery: "advanced",
      },
      {
        id: 7,
        name: "Jira",
        img: new URL("../assets/images/skills/jira.svg", import.meta.url).href,
        mastery: "advanced",
      },
    ],
  }),
  getters: {
    expertSkills: (state) => {
      return {
        frontend: state.frontend.filter((skill) => skill.mastery === "expert"),
        backend: state.backend.filter((skill) => skill.mastery === "expert"),
        tools: state.tools.filter((skill) => skill.mastery === "expert"),
      };
    },
    skillsByMastery: (state) => (masteryLevel) => {
      return {
        frontend: state.frontend.filter((skill) => skill.mastery === masteryLevel),
        backend: state.backend.filter((skill) => skill.mastery === masteryLevel),
        tools: state.tools.filter((skill) => skill.mastery === masteryLevel),
      };
    },
  },
});
