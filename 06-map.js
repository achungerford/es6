/* challenge 

Implement a function we create called 'pluck'.
It should accept an array and a string representing a property name.
It should return an array containing that property from each object.
*/

var paints = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'yellow'}
];

/*
// solution 1:
function pluck(array, property) {
    return array.map(function(element) {
        return element[property]   
    });
}

console.log(pluck(paints,'color'));
*/

// solution 2
function pluck(array, property) {
    return array.map( (element) => element[property] );
}

console.log(pluck(paints,'color'));

