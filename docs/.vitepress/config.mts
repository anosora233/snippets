import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ["link", { href: "/vite.svg", rel: "icon" }],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Google+Sans+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700",
        rel: "stylesheet",
      },
    ],
  ],
  title: "Rabbit Hole",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Snippets", link: "/snippets" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: {
      "/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
      "/snippets/": [],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
