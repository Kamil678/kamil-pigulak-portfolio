import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { findProject } from "../data/projects";
import { PROFILE, yearsOfExperience } from "../data/profile";
import { useLocalized } from "./useLocalized";

const SITE_URL = "https://kamilpigulak.com";

function setMeta(selector, content) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export function usePageMeta() {
  const route = useRoute();
  const { t } = useI18n();
  const { l } = useLocalized();

  watchEffect(() => {
    let title = t("meta.homeTitle");
    let description = t("meta.homeDescription", {
      years: yearsOfExperience(),
      since: new Date(PROFILE.careerStart).getFullYear(),
    });

    if (route.name === "case-study") {
      const project = findProject(route.params.slug);
      if (project) {
        title = t("meta.caseStudyTitle", { name: project.name });
        description = l(project.outcome);
      } else {
        title = t("meta.notFoundTitle");
      }
    } else if (route.name === "not-found") {
      title = t("meta.notFoundTitle");
    }

    const url = SITE_URL + route.path;

    document.title = title;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
  });
}
