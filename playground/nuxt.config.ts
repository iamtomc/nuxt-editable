import config from './editable.config'

export default defineNuxtConfig({
  modules: [
    ['../src/module', config],
  ],
  devtools: { enabled: false },
  build: {
    chunkSizeWarningLimit: 1500,
  },
  runtimeConfig: {
    database: process.env.MONGODB_URI,
  },
})
