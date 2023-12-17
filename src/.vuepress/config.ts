import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "维思资源导航",
  description: "维思自动化资源导航网站",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
