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

var timesTen = numbers.map(function(number) {
    return number * 10;
})

console.log(timesTen);

/*
map is similar to forEach, but notice the return stmt

each number in the numbers array is being passed into the anon fn
and whatever this function returns is placed into a NEW ARRAY and
after each element has been processed, that NEW ARRAY IS RETURNED

we didn't have to declare the new array separately
*/