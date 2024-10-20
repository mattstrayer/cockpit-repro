import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import adonisjs from '@adonisjs/vite/client'
import vue from '@vitejs/plugin-vue'
import cockpit from 'adonis-cockpit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: false } }),
    vue(),
    adonisjs({ entrypoints: ['inertia/app/app.ts'], reload: ['resources/views/**/*.edge'] }),
    cockpit({ entrypoints: ['inertia/app/cockpit.ts'] }),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia/`,
    },
  },
})
