<template>
  <component :is="ICONS[name]" class="inline-block shrink-0 align-middle" aria-hidden="true" />
</template>

<script>
// Boxicons compiled to inline SVG at build time (unplugin-icons), so only the icons used here end up in the bundle.
import BxBriefcaseAlt2 from "~icons/bx/briefcase-alt-2";
import BxCheck from "~icons/bx/check";
import BxCheckCircle from "~icons/bx/check-circle";
import BxChevronDown from "~icons/bx/chevron-down";
import BxCopy from "~icons/bx/copy";
import BxDownload from "~icons/bx/download";
import BxEnvelope from "~icons/bx/envelope";
import BxErrorCircle from "~icons/bx/error-circle";
import BxFile from "~icons/bx/file";
import BxLeftArrowAlt from "~icons/bx/left-arrow-alt";
import BxLinkExternal from "~icons/bx/link-external";
import BxMap from "~icons/bx/map";
import BxMenu from "~icons/bx/menu";
import BxMoon from "~icons/bx/moon";
import BxPhone from "~icons/bx/phone";
import BxRightArrowAlt from "~icons/bx/right-arrow-alt";
import BxSend from "~icons/bx/send";
import BxSun from "~icons/bx/sun";
import BxUpArrowAlt from "~icons/bx/up-arrow-alt";
import BxX from "~icons/bx/x";
import BxlGithub from "~icons/bx/bxl-github";
import BxlLinkedin from "~icons/bx/bxl-linkedin";

const ICONS = {
  "bx-briefcase-alt-2": BxBriefcaseAlt2,
  "bx-check": BxCheck,
  "bx-check-circle": BxCheckCircle,
  "bx-chevron-down": BxChevronDown,
  "bx-copy": BxCopy,
  "bx-download": BxDownload,
  "bx-envelope": BxEnvelope,
  "bx-error-circle": BxErrorCircle,
  "bx-file": BxFile,
  "bx-left-arrow-alt": BxLeftArrowAlt,
  "bx-link-external": BxLinkExternal,
  "bx-map": BxMap,
  "bx-menu": BxMenu,
  "bx-moon": BxMoon,
  "bx-phone": BxPhone,
  "bx-right-arrow-alt": BxRightArrowAlt,
  "bx-send": BxSend,
  "bx-sun": BxSun,
  "bx-up-arrow-alt": BxUpArrowAlt,
  "bx-x": BxX,
  "bxl-github": BxlGithub,
  "bxl-linkedin": BxlLinkedin,
};
</script>

<script setup>
defineProps({
  name: { type: String, required: true, validator: (value) => value in ICONS },
});
</script>
