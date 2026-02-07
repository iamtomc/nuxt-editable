import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  features: {
    tooling: true
  }
}).override('nuxt/vue/rules', {
  rules: {
    'vue/multi-word-component-names': 'off'
  }
})
