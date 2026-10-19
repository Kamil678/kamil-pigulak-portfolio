export const PROFILE = {
  name: "Kamil Pigulak",
  initials: "KP",
  // First commercial role (Mediaflex) — years of experience are computed from this date.
  careerStart: "2022-05-01",
  openToWork: true,
  email: "kamilpigulak@gmail.com",
  phone: "+48 518 144 228",
  location: { en: "Kraków area, Poland", pl: "Kraków" },
  workMode: { en: "Remote · Hybrid · On-site", pl: "Zdalnie · Hybrydowo · Stacjonarnie" },
  cvUrl: "/cv/Kamil-Pigulak-CV.pdf",
  projectsCount: 15,
  coreStack: ["Vue", "React", "TypeScript", "Tailwind"],
  alsoStack: ["Node.js", "Laravel"],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kamil-pigulak/", icon: "bxl-linkedin" },
    { name: "GitHub", url: "https://github.com/Kamil678", icon: "bxl-github" },
  ],
};

export function yearsOfExperience(now = new Date()) {
  const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
  return Math.floor((now - new Date(PROFILE.careerStart)) / msPerYear);
}
