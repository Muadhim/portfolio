// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    strict: true,
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  supabase: {
    redirect: false,
    url: process.env.SUPABASE_URL || "",
    key: process.env.SUPABASE_KEY || "",
  },

  css: ["~/assets/css/main.scss"],

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/supabase"],
});
