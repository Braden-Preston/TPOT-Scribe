const loader = require('pug-loader')

const MIXIN_REG = /mixin+\s+([^\n\r\(]+)/

module.exports = function (src) {
  this.cacheable && this.cacheable()
  const matches = src.trim().match(MIXIN_REG)
  if (!matches) {
    return loader.call(this, src)
  }
  const name = matches[1]
  const source = `${src}\n+${name}&attributes(attributes)`
  return loader.call(this, source)
}
