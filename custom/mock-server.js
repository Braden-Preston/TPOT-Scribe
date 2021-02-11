const fs = require('fs')
const zlib = require('zlib')
const path = require('path')
const fastify = require('fastify')({ logger: false })
const fastifyCompress = require('fastify-compress')

// For later, serving Brotli files
// fastify.register(fastifyCompress, {
//   global: false
// })

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '..', 'build'),
  wildcard: false // SPA fallback to root
})

// All routes handled by index.html's router
fastify.get('/*', (req, reply) => {
  return reply.sendFile('index.html')
})

const start = async () => {
  try {
    await fastify.listen(5000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
