/**
  Bit of util for more functional js
  
  `let x = y+1` is eqivalent to the debug `let x = y.inspect()+1`
*/

Object.prototype.let = function(f) { f(this) }
Object.prototype.apply = function(f) { this.let(f); this }
Object.prototype.inspect = function() { this.apply(console.log) }

export jsScope
