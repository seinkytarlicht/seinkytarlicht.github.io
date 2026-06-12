// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: "OIM5c_P0ZbCLmgtNpbryqwvsEqpPSAY9enx7FpGdVf8",
        },
      ],
    },
  },
});
