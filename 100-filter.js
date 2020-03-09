/* 
Coding Exercise 8: Challenging! Implementing 'reject'

This is a hard one! Create a function called 'reject'. Reject should work in the opposite way of 'filter' - If a
function returns 'true', the item should *not* be included in the new array. Hint: You can reuse filter.
*/

// SOLUTION ONE:

// define 'reject'
function reject(array, callback) {
    return array.filter(number => !callback(number));
}

// need an example array to be passed
var numbers = [1, 3, 5, 10, 20, 30];

// calling 'reject' passing in numbers & callback
var lessThanFifteen = reject(numbers, function(number){
	return number > 15;
});

// print output
console.log(lessThanFifteen);


// SOLUTION 2 (must comment out solution 1 definition):

// function reject(array, iteratorFunction) {
//  return array.filter((number) => {
//      return !iteratorFunction(number);
//  });
// }
