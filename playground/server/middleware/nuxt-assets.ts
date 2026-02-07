export default defineEventHandler((event) => {
  if (event.path === '/_nuxt/' || event.path === '/_nuxt') {
    event.node.res.statusCode = 204
    event.node.res.end()
  }
})
