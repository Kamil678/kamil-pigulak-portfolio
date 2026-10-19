import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { findProject } from "../data/projects";
import { PROFILE, yearsOfExperience } from "../data/profile";
import { useLocalized } from "./useLocalized";

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

    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
  });
}
