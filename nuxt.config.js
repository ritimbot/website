import { resolve } from "path";

export default {
  srcDir: "src",
  target: "static",
  head: {
    title: "Ritim • Müzik Botu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#30343b" },
      {
        name: "description",
        hid: "description",
        content:
          "A Discord bot which lets you find new emojis to your server, store them. You can even send animated emotes using the bot. Give it a try!",
      },
    ],
  },
  pwa: {
    manifest: {
      name: "Emoji • Discord Bot",
      theme_color: "#30343b",
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
