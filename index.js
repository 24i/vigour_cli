var Repl = require('repl')
var repl = module.exports = Repl.start({ prompt: '> ', useGlobal: true })
var context = repl.context

Object.defineProperty(context, 'q', {
  get: function () { process.exit() },
  configurable: true
})
