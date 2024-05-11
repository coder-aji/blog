import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  dest:"dist",

  base: "/blog",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "探索编程世界",
      description: "记录我的学习笔记",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
