// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      content: ["content/**.md"],
      theme: {
        extend: {},
      },
      plugins: [],
    },
    //viewer: false,
    //exposeConfig: false,
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
  vite: {
    server: {
      fs: {
        strict: false, // Disable strict file serving restrictions
      },
    },
  },
});
