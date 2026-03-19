import { defineStore } from "pinia";

export const useSkillsStore = defineStore("skills", {
  state: () => ({
    frontend: [
      {
        id: 1,
        name: "HTML",
        img: "src/assets/images/skills/html.svg",
        mastery: "expert", // 'expert', 'advanced', 'intermediate', 'basic'
      },
      {
        id: 2,
        name: "CSS",
        img: "src/assets/images/skills/css.svg",
        mastery: "expert",
      },
      {
        id: 3,
        name: "Scss",
        img: "src/assets/images/skills/scss.svg",
        mastery: "expert",
      },
      {
        id: 4,
        name: "Bootstrap",
        img: "src/assets/images/skills/bootstrap.svg",
        mastery: "expert",
      },
      {
        id: 5,
        name: "Tailwind",
        img: "src/assets/images/skills/tailwind.svg",
        mastery: "expert",
      },
      {
        id: 6,
        name: "JavaScript",
        img: "src/assets/images/skills/javascript.svg",
        mastery: "expert",
      },
      {
        id: 7,
        name: "TypeScript",
        img: "src/assets/images/skills/typescript.svg",
        mastery: "advanced",
      },
      {
        id: 8,
        name: "jQuery",
        img: "src/assets/images/skills/jquery.svg",
        mastery: "advanced",
      },
      {
        id: 9,
        name: "Vue",
        img: "src/assets/images/skills/vue.svg",
        mastery: "expert",
      },
      {
        id: 10,
        name: "Vite",
        img: "src/assets/images/skills/vite.svg",
        mastery: "advanced",
      },
      {
        id: 11,
        name: "Quasar",
        img: "src/assets/images/skills/quasar.svg",
        mastery: "advanced",
      },
      {
        id: 12,
        name: "Vuetify",
        img: "src/assets/images/skills/vuetify.svg",
        mastery: "intermediate",
      },
      {
        id: 13,
        name: "React",
        img: "src/assets/images/skills/react.svg",
        mastery: "advanced",
      },
      {
        id: 14,
        name: "Webpack",
        img: "src/assets/images/skills/webpack.svg",
        mastery: "advanced",
      },
    ],
    backend: [
      {
        id: 1,
        name: "Node.js",
        img: "src/assets/images/skills/nodejs.svg",
        mastery: "advanced",
      },
      {
        id: 2,
        name: "Express.js",
        img: "src/assets/images/skills/express.svg",
        mastery: "advanced",
      },
      {
        id: 3,
        name: "PHP",
        img: "src/assets/images/skills/php.svg",
        mastery: "advanced",
      },
      {
        id: 4,
        name: "Laravel",
        img: "src/assets/images/skills/laravel.svg",
        mastery: "intermediate",
      },
      {
        id: 5,
        name: "MySQL",
        img: "src/assets/images/skills/mysql.svg",
        mastery: "advanced",
      },
      {
        id: 6,
        name: "MongoDB",
        img: "src/assets/images/skills/mongodb.svg",
        mastery: "intermediate",
      },
    ],
    tools: [
      {
        id: 1,
        name: "Cypress",
        img: "src/assets/images/skills/cypress.svg",
        mastery: "expert",
      },
      {
        id: 2,
        name: "Git",
        img: "src/assets/images/skills/git.svg",
        mastery: "expert",
      },
      {
        id: 3,
        name: "Gitlab",
        img: "src/assets/images/skills/gitlab.svg",
        mastery: "advanced",
      },
      {
        id: 4,
        name: "Github",
        img: "src/assets/images/skills/github.svg",
        mastery: "advanced",
      },
      {
        id: 5,
        name: "Docker",
        img: "src/assets/images/skills/docker.svg",
        mastery: "advanced",
      },
      {
        id: 5,
        name: "ESLint",
        img: "src/assets/images/skills/eslint.svg",
        mastery: "advanced",
      },
      {
        id: 6,
        name: "Jira",
        img: "src/assets/images/skills/jira.svg",
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
