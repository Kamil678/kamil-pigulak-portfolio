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
  projectsCount: 15,
  coreStack: ["Vue", "React", "TypeScript", "JavaScript"],
  alsoStack: ["Nuxt", "Tailwind", "PHP", "Symfony"],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kamil-pigulak/", icon: "bxl-linkedin" },
    { name: "GitHub", url: "https://github.com/Kamil678", icon: "bxl-github" },
  ],
};

export function yearsOfExperience(now = new Date()) {
  const msPerYear = 365.25 * 24 * 60 * 60 * 1000;

  return Math.round(((now - new Date(PROFILE.careerStart)) / msPerYear) * 2) / 2;
}
