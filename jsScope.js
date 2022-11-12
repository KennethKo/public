/**
  Bit of util for more functional js
  
  `let x = y+1` is eqivalent to the debug `let x = y.inspect()+1`
*/

Object.prototype.let = f => { f(this) }
Object.prototype.apply = f => { this.let(f); this }
Object.prototype.inspect = () => { this.apply(console.log) }
