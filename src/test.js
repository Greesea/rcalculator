const antlr4 = require('antlr4/index')
const rcLexer = require('./interpreter/rcLexer').rcLexer
const rcParser = require('./interpreter/rcParser').rcParser
const myVisitor = require('./interpreter/myVisitor').myVisitor
const myErrorListener = require('./interpreter/myErrorListener').myErrorListener

let code = `
#2012-10-12# + max(1,2)#m
a = timestamp(#2020-12-12#)
a+1
`
let input = new antlr4.InputStream(code)
let lexer = new rcLexer(input)
let tokens = new antlr4.CommonTokenStream(lexer)
let parser = new rcParser(tokens)
let listener = new myErrorListener()
lexer.removeErrorListeners()
parser.removeErrorListeners()
lexer.addErrorListener(listener)
parser.addErrorListener(listener)
let tree = parser.prog()
let visitor = new myVisitor()
console.log(tree.accept(visitor))
console.log(tree.toStringTree())
