import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kirakira.zhaohe.org",
  integrations: [tailwind()],
});
