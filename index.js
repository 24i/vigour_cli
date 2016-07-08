const Repl = require('repl')
const repl = module.exports = Repl.start({ prompt: '> ', useGlobal: true })
const context = repl.context

Object.defineProperty(context, 'q', {
  get: function () { process.exit() },
  configurable: true
})
