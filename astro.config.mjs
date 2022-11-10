import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  base: './'
});
