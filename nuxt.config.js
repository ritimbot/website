import { resolve } from "path";

export default {
  srcDir: "src",
  target: "static",
  head: {
    title: "Ritim • Müzik Botu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#17161d" },
      { name: "keywords", content: "Türkçe, Müzik, Eğlence, Sosyal" },
      { name: "author", content: "Ritim" },
      {
        name: "description",
        hid: "description",
        content:
          "Sunucunda özgürce kullanabileceğin ritim bot, hiç sınırlama olmadan, playlist limitsiz ve akıcı bir müzik deneyimi sunar.",
      },
    ],
  },
  modules: [
    ['@nuxtjs/redirect-module', {
      
    }]
  ],
  redirect: [
  { from: '/dbl', to: 'https://top.gg/bot/711411719922253884/' }
],
  pwa: {
    manifest: {
      name: "Ritim • Discord Bot",
      theme_color: "#17161d",
      description:
        "Sunucunda özgürce kullanabileceğin ritim bot, hiç sınırlama olmadan, playlist limitsiz ve akıcı bir müzik deneyimi sunar.",
    },
  },
  css: ["@/assets/css/main.scss"],
  components: true,
  tailwindcss: {
    configPath: resolve("./tailwind.config.js"),
    viewer: false,
    jit: true,
  },
  plugins: [{ src: "~/plugins/vue-unicons", mode: "client" }],
  buildModules: [
    "@nuxtjs/pwa",
    "@nuxtjs/tailwindcss",
    "@nuxt/postcss8",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Roboto: {
        wght: [400, 500, 700, 900],
      },
    },
    display: "swap",
  },
  build: {
    postcss: {
      plugins: {
        "postcss-nested": {},
      },
    },
  },
};
