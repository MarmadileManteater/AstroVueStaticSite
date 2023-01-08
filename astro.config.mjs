import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import { readdirSync } from 'fs'
// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  site: 'https://marmadilemanteater.pythonanywhere.com/astro',
  vite: {
    define: {
      emojiDirectory: {
        mutantstd: Array.from(readdirSync('data/public/emoji/mutantstd')),
        twemoji: Array.from(readdirSync('data/public/emoji/twemoji'))
      }
    },
    publicDir: 'data/public'
  }
})
