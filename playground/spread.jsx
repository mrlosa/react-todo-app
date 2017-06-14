//regular function example
// function addd (a + b) {
//   return a + b;
// }

// console.log(add(3 ,1));

// spread function using the srpead operator ... before a var or an array
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// this spread allow you to combine multiple arrays or vars
// var groupA = ['Tito', 'Pebbles'];
// var groupB = ['Rob'];
// var person = 'Mia';
// var final = [...groupA, ...groupB, person];
//
// console.log('combine multiple arrays or vars: ' + final);


var personOne = ['Rob', 49];
var personTwo = ['Mia', 52];

//console.log('Hi '+ personOne[0] + ' you are ' + personOne[1]);
function greet (name, age) {
  console.log('Hi '+ name + ',you are ' + age);
}
greet(...personOne);
greet(...personTwo);

var names = ['Tito', 'Pebbles'];
var final = ['Rob', ...names];

final.forEach(function(name) {
  console.log('Hi ' + name);
});
