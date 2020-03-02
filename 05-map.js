// map is also used to get a property for every element of an array

var cars = [
    {model: 'Ford', price: 'cheap'},
    {model: 'Porsce', price: 'expensive'}
];

var prices = cars.map(function(car) {
    return car.price;
});

console.log(prices);