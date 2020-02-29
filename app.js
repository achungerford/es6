/* When our function has a name, is declared outside forEach */

var days = ['M', 'T', 'W', 'R', 'F'];

// create function sayHello
let sayHello = function() {
    console.log('Hi friend');
}

// passing function to forEach
days.forEach(sayHello);