// /src/stores/skillsStore.js
import { defineStore } from "pinia";

export const useSkillsStore = defineStore("skills", {
  state: () => ({
    frontend: [
      {
        id: 1,
        name: "HTML",
        img: "src/assets/skills/html.svg",
        mastery: "expert", // 'expert', 'advanced', 'intermediate', 'basic'
      },
      {
        id: 2,
        name: "CSS",
        img: "src/assets/skills/css.svg",
        mastery: "expert",
      },
      {
        id: 3,
        name: "Scss",
        img: "src/assets/skills/scss.svg",
        mastery: "expert",
      },
      {
        id: 4,
        name: "Bootstrap",
        img: "src/assets/skills/bootstrap.svg",
        mastery: "expert",
      },
      {
        id: 5,
        name: "Tailwind",
        img: "src/assets/skills/tailwind.svg",
        mastery: "expert",
      },
      {
        id: 6,
        name: "JavaScript",
        img: "src/assets/skills/javascript.svg",
        mastery: "expert",
      },
      {
        id: 7,
        name: "TypeScript",
        img: "src/assets/skills/typescript.svg",
        mastery: "advanced",
      },
      {
        id: 8,
        name: "jQuery",
        img: "src/assets/skills/jquery.svg",
        mastery: "advanced",
      },
      {
        id: 9,
        name: "Vue",
        img: "src/assets/skills/vue.svg",
        mastery: "expert",
      },
      {
        id: 10,
        name: "Vite",
        img: "src/assets/skills/vite.svg",
        mastery: "advanced",
      },
      {
        id: 11,
        name: "Quasar",
        img: "src/assets/skills/quasar.svg",
        mastery: "advanced",
      },
      {
        id: 12,
        name: "Vuetify",
        img: "src/assets/skills/vuetify.svg",
        mastery: "intermediate",
      },
      {
        id: 13,
        name: "React",
        img: "src/assets/skills/react.svg",
        mastery: "advanced",
      },
      {
        id: 14,
        name: "Webpack",
        img: "src/assets/skills/webpack.svg",
        mastery: "advanced",
      },
    ],
    backend: [
      {
        id: 1,
        name: "Node.js",
        img: "src/assets/skills/nodejs.svg",
        mastery: "advanced",
      },
      {
        id: 2,
        name: "Express.js",
        img: "src/assets/skills/express.svg",
        mastery: "advanced",
      },
      {
        id: 3,
        name: "PHP",
        img: "src/assets/skills/php.svg",
        mastery: "advanced",
      },
      {
        id: 4,
        name: "Laravel",
        img: "src/assets/skills/laravel.svg",
        mastery: "intermediate",
      },
      {
        id: 5,
        name: "MySQL",
        img: "src/assets/skills/mysql.svg",
        mastery: "advanced",
      },
      {
        id: 6,
        name: "MongoDB",
        img: "src/assets/skills/mongodb.svg",
        mastery: "intermediate",
      },
    ],
    tools: [
      {
        id: 1,
        name: "Cypress",
        img: "src/assets/skills/cypress.svg",
        mastery: "expert",
      },
      {
        id: 2,
        name: "Git",
        img: "src/assets/skills/git.svg",
        mastery: "expert",
      },
      {
        id: 3,
        name: "Gitlab",
        img: "src/assets/skills/gitlab.svg",
        mastery: "advanced",
      },
      {
        id: 4,
        name: "Github",
        img: "src/assets/skills/github.svg",
        mastery: "advanced",
      },
      {
        id: 5,
        name: "Docker",
        img: "src/assets/skills/docker.svg",
        mastery: "advanced",
      },
      {
        id: 5,
        name: "ESLint",
        img: "src/assets/skills/eslint.svg",
        mastery: "advanced",
      },
      {
        id: 6,
        name: "Jira",
        img: "src/assets/skills/jira.svg",
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
        frontend: state.frontend.filter(
          (skill) => skill.mastery === masteryLevel
        ),
        backend: state.backend.filter(
          (skill) => skill.mastery === masteryLevel
        ),
        tools: state.tools.filter((skill) => skill.mastery === masteryLevel),
      };
    },
  },
});
