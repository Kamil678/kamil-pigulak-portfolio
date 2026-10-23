export const PROFILE = {
  name: "Kamil Pigulak",
  initials: "KP",
  careerStart: "2022-05-01",
  openToWork: true,
  email: "kamilpigulak@gmail.com",
  phone: "+48 518 144 228",
  location: { en: "Kraków, Poland", pl: "Kraków" },
  workMode: { en: "Hybrid or remote", pl: "Hybrydowo lub zdalnie" },
  cvUrl: "/cv/Kamil-Pigulak-CV.pdf",
  repoUrl: "https://github.com/Kamil678/kamil-pigulak-portfolio",
  projectsCount: 15,
  coreStack: ["Vue", "Nuxt", "TypeScript", "React"],
  alsoStack: ["Tailwind", "Cypress", "PHP", "Laravel"],
  languages: [
    { name: { en: "Polish", pl: "polski" }, level: { en: "native", pl: "ojczysty" } },
    { name: { en: "English", pl: "angielski" }, level: { en: "B2", pl: "B2" } },
  ],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kamil-pigulak/", icon: "bxl-linkedin" },
    { name: "GitHub", url: "https://github.com/Kamil678", icon: "bxl-github" },
  ],
};

export function yearsOfExperience(now = new Date()) {
  const msPerYear = 365.25 * 24 * 60 * 60 * 1000;

  return Math.round(((now - new Date(PROFILE.careerStart)) / msPerYear) * 2) / 2;
}
