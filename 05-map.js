/*
Each element of your original array must be passed into the
anonymous (callback) function.

The anonymous function manipulates and returns that data to a new array.
*/

// map can be used to get a property for every element of an array


var cars = [
    {model: 'Ford', price: 'cheap'},
    {model: 'Porsce', price: 'expensive'}
];

/*
new array will be 'prices'. In general:

var prices = cars.map(function(element) {
    return element.price;
});
*/

var prices = cars.map( function(car) {
    return car.price;
});

console.log(prices);

/* arrow version:
var prices = cars.map((car) => car.price );
*/
