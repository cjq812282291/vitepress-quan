import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConf";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "aQuan-demo-blog",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/img.png", // 表示docs/public/avartar.png
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [{ icon: "github", link: "https://github.com/cjq812282291" }],

    outline: {
      level: [2, 6],
      label: "目录",
    },

    search: {
      provider: "local",
    },
    i18nRouting: true,
  },
  base: "/vitepress-quan/", // 这里将会影响之后生成的根路径
});
