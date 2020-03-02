/*
take values in an array
double them
put the new values in a new array
*/

/* traditional for-loop version

var numbers = [1, 2, 3, 4];
var double = [];

for var(i = 0; i < numbers.length; i++) {
    double.push(numbers[i] * 2);
}
*/

var numbers = [1, 2, 3, 4];

var timesTen = numbers.map(function(element) {
    return element * 10;
})

console.log(timesTen);

/*
map is similar to forEach, but instead of altering the original data (as forEach does),
map creates a new array 
because of this, map requires a return stmt

each element in the numbers array is being passed into the anonymous function
and whatever that function returns is placed into a NEW ARRAY 

so after each element has been processed, the new array has been created

we didn't have to declare the new array separately
*/