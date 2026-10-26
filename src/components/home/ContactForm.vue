<template>
  <form class="tile relative p-6 md:p-8" novalidate aria-labelledby="contact-form-title" @submit.prevent="submit">
    <h3 id="contact-form-title" class="text-lg font-semibold">{{ t("contact.form.title") }}</h3>

    <div class="mt-6 grid gap-5 sm:grid-cols-2">
      <FormField
        id="name"
        v-model="form.name"
        name="name"
        :maxlength="MAX_LENGTH.name"
        autocomplete="name"
        :label="t('contact.form.name')"
        :error="errors.name && t(errors.name)"
        @update:model-value="revalidateIfInvalid('name')"
        @blur="form.name && validateField('name')"
      />
      <FormField
        id="email"
        v-model="form.email"
        name="email"
        :maxlength="MAX_LENGTH.email"
        type="email"
        autocomplete="email"
        :label="t('contact.form.email')"
        :error="errors.email && t(errors.email)"
        @update:model-value="revalidateIfInvalid('email')"
        @blur="form.email && validateField('email')"
      />
      <FormField
        id="subject"
        v-model="form.subject"
        name="subject"
        :maxlength="MAX_LENGTH.subject"
        class="sm:col-span-2"
        :label="t('contact.form.subject')"
        :error="errors.subject && t(errors.subject)"
        @update:model-value="revalidateIfInvalid('subject')"
      />
      <FormField
        id="message"
        v-model="form.message"
        name="message"
        :maxlength="MAX_LENGTH.message"
        multiline
        class="sm:col-span-2"
        :label="t('contact.form.message')"
        :error="errors.message && t(errors.message)"
        @update:model-value="revalidateIfInvalid('message')"
      />
    </div>

    <div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
      <label for="website">{{ t("contact.form.honeypot") }}</label>
      <input id="website" v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
    </div>

    <p class="mt-5 text-xs text-muted">{{ t("contact.form.privacy") }}</p>

    <div class="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div aria-live="polite" class="text-sm">
        <p v-if="status === 'success'" class="flex items-center gap-1.5 text-accent">
          <AppIcon name="bx-check-circle" class="text-lg" />{{ t("contact.form.success") }}
        </p>
        <p v-else-if="status === 'error'" class="flex items-center gap-1.5 text-red-600 dark:text-red-400">
          <AppIcon name="bx-error-circle" class="text-lg" />{{ t("contact.form.error", { email: PROFILE.email }) }}
        </p>
      </div>
      <AppButton type="submit" :disabled="status === 'sending'" :aria-busy="status === 'sending'" icon-right="bx-send" class="shrink-0">
        {{ status === "sending" ? t("contact.form.sending") : t("contact.form.submit") }}
      </AppButton>
    </div>
  </form>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { PROFILE } from "../../data/profile";
import { MAX_LENGTH, useContactForm } from "../../composables/useContactForm";
import AppButton from "../ui/AppButton.vue";
import AppIcon from "../ui/AppIcon.vue";
import FormField from "../ui/FormField.vue";

const { t } = useI18n();
const { form, errors, status, honeypot, validateField, revalidateIfInvalid, submit } = useContactForm();
</script>
