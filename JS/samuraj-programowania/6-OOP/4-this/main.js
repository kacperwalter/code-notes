'use strict' // tryb ścisły
// console.log(this); // this obiektu globalnego

const fn = function() {
  console.log(this.name); // odnosi się do window tak czy siak
  this.a = 5;
}

// fn();

const obj = {
  name: "Adam",
  fn: fn
}

fn();
obj.fn;