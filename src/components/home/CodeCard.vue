<template>
  <div class="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-[#0d0d10] text-[#e4e4e7]">
    <div class="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
      <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true"></span>
      <span class="ml-2 font-mono text-xs text-white/50">kamil.ts</span>
    </div>
    <pre
      class="flex-1 overflow-x-auto px-4 py-4 font-mono text-[0.75rem] leading-6 sm:text-[0.8rem]"
      aria-hidden="true"
    ><code><span class="tok-c">// quick facts for busy recruiters</span>
<span class="tok-k">const</span> <span class="tok-v">kamil</span> = {
  <span class="tok-p">role</span>: <span class="tok-s">"Frontend Developer"</span>,
  <span class="tok-p">stack</span>: [<span class="tok-s">"vue"</span>, <span class="tok-s">"nuxt"</span>, <span class="tok-s">"ts"</span>, <span class="tok-s">"react"</span>],
  <span class="tok-p">also</span>: [<span class="tok-s">"php"</span>],
  <span class="tok-p">shipped</span>: [<span class="tok-s">"monorepo"</span>, <span class="tok-s">"pwa"</span>, <span class="tok-s">"legacy migration"</span>],
  <span class="tok-p">quality</span>: [<span class="tok-s">"cypress e2e"</span>, <span class="tok-s">"ci/cd"</span>, <span class="tok-s">"wcag 2.1 aa"</span>],
  <span class="tok-p">workflow</span>: <span class="tok-s">"ai-assisted"</span>,
  <span class="tok-p">experience</span>: <span class="tok-n">{{ years }}</span>, <span class="tok-c">// years</span>
  <span class="tok-p">location</span>: <span class="tok-s">"Kraków, PL"</span>,
  <span class="tok-p">english</span>: <span class="tok-s">"B2"</span>,
  <span class="tok-p">openToWork</span>: <span class="tok-n">{{ PROFILE.openToWork }}</span>,
};

<span class="tok-k">export default</span> <span class="tok-v">kamil</span>;<span class="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-[#34d399]"></span></code></pre>
  </div>
</template>

<script setup>
import { PROFILE, yearsOfExperience } from "../../data/profile";

const years = yearsOfExperience();
</script>

<style scoped>
.tok-k {
  color: #c084fc;
}
.tok-v {
  color: #7dd3fc;
}
.tok-p {
  color: #e4e4e7;
}
.tok-s {
  color: #34d399;
}
.tok-n {
  color: #fbbf24;
}
.tok-c {
  color: #a1a1aa;
}
</style>
