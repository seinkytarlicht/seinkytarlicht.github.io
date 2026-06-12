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
          content: "TvxjcFOp0xq8n1kBBUF-cdAmK0WIq_uy6mUbc1OidCQ",
        },
      ],
    },
  },
});
