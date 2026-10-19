<template>
  <form class="tile p-6 md:p-8" novalidate aria-labelledby="contact-form-title" @submit.prevent="submit">
    <h3 id="contact-form-title" class="text-lg font-semibold">{{ t("contact.form.title") }}</h3>

    <div class="mt-6 grid gap-5 sm:grid-cols-2">
      <FormField
        id="name"
        v-model="form.name"
        name="name"
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
        class="sm:col-span-2"
        :label="t('contact.form.subject')"
        :error="errors.subject && t(errors.subject)"
        @update:model-value="revalidateIfInvalid('subject')"
      />
      <FormField
        id="message"
        v-model="form.message"
        name="message"
        multiline
        class="sm:col-span-2"
        :label="t('contact.form.message')"
        :error="errors.message && t(errors.message)"
        @update:model-value="revalidateIfInvalid('message')"
      />
    </div>

    <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div aria-live="polite" class="text-sm">
        <p v-if="status === 'success'" class="flex items-center gap-1.5 text-accent">
          <i class="bx bx-check-circle text-lg" aria-hidden="true"></i>{{ t("contact.form.success") }}
        </p>
        <p v-else-if="status === 'error'" class="flex items-center gap-1.5 text-red-600 dark:text-red-400">
          <i class="bx bx-error-circle text-lg" aria-hidden="true"></i>{{ t("contact.form.error", { email: PROFILE.email }) }}
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
import { useContactForm } from "../../composables/useContactForm";
import AppButton from "../ui/AppButton.vue";
import FormField from "../ui/FormField.vue";

const { t } = useI18n();
const { form, errors, status, validateField, revalidateIfInvalid, submit } = useContactForm();
</script>
