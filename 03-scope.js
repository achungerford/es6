/*
demonstrating forEach array-helper
demonstrating push array method
demonstrating global scope

any variable declared outside a function is global in scope and
can be accessed from anywhere
*/

// Calculate the area of each image and store it in a new array called 'areas'
var images = [
    { height: 2, width: 4 },
    { height: 3, width: 5 },
    { height: 5, width: 10 }
];

var areas = [];

images.forEach(function(image) {
    areas.push(image.height * image.width);
});

console.log(areas);