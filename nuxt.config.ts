// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/eslint"],

  devtools: { enabled: true },

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

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
});
