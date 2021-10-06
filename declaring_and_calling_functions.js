
//HELLO.js example
const sayHello = function (name) {
  console.log('Hello, ' + name);
}

//if we do a return then it won't run anything else below
sayHello('Morsal');
sayHello('Alim');
sayHello('tba');
//console.log(sayHello());


//EVEN.js example
const isEven = function (num) {
  console.log(num % 2 === 0);
  return num % 2 === 0;
  //console.log(num % 2 === 0); it won't run hee since it's after the return statment
}

console.log(isEven(10));