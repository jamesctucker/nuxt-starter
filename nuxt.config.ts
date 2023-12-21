// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@vee-validate/nuxt",
    "@nuxtjs/supabase",
    "@hebilicious/vue-query-nuxt",
    "@nuxtjs/plausible",
    "nuxt-bugsnag",
    "nuxt-vitest",
  ],
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  supabase: {
    // TODO: don't hardcode this
    redirect: false,
  },
});
