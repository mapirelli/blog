// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-27",
});
