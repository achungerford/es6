/* 
use 'filter' if you want to get a subset of an array

Think of books on amazon.com and you want to select only books
from a particular author.
*/

var products = [
    {name: 'cucumber', type: 'vegetable', qty: 0, price: 1},
    {name: 'banana', type: 'fruit', qty: 10, price: 15},
    {name: 'celery', type: 'vegetable', qty: 30, price: 6},
    {name: 'orange', type: 'fruit', qty: 3, price: 5}
];

// get subset: vegetables, qty > 0, price < 10

result = products.filter(function(product) {
    return product.type === 'vegetable'
        && product.qty > 0
        && product.price < 10;
});

console.log(result);
