class Calculator {
  constructor() {
    this._opMap = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }
  }

  run(input) {
    this._setInput(input)
    return this._expression()
  }

  _setInput(input) {
    this._tokens = input
      .match(/\d+\.\d+|\d+|[\+\-\*\/\(\)]/g)
      .reverse()
      
    console.log(this._tokens)
  }

  _peekToken() {
    return this._tokens[this._tokens.length - 1]
  }

  _popToken() {
    return this._tokens.pop()
  }

  _accept(s) {
    return this._peekToken() === s && this._popToken()
  }

  _acceptNumber() {
    return !isNaN(this._peekToken()) && this._popToken()
  }

  _acceptAny(a) {
    return a.some(s => this._peekToken() === s) && this._popToken()
  }

  _doOp(op, a, b) {
    return this._opMap[op](a, b)
  }

  _unit() {
    let v
    if (this._accept('(')) {
      v = this._expression()
      this._accept(')')
    } else v = Number(this._acceptNumber())
    return v
  }

  _unary() {
    return this._accept('-') ? -this._unit() : this._unit()
  }

  _factor() {
    let v = this._unary(),
      op
    while (op = this._acceptAny(['*', '/'])) v = this._doOp(op, v, this._unary())
    return v
  }

  _expression() {
    let v = this._factor(),
      op
    while (op = this._acceptAny(['+', '-'])) v = this._doOp(op, v, this._factor())
    return v
  }
}

let calculator = new Calculator(),
  calc = expression => calculator.run(expression)

console.log(calc('12+2'))