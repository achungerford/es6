/* 
Coding Exercise 8: Challenging! Implementing 'reject'

This is a hard one! Create a function called 'reject'. Reject should work in the opposite way of 'filter' - If a
function returns 'true', the item should *not* be included in the new array. Hint: You can reuse filter.
*/

// define 'reject'
function reject(array, callback) {
    return array.filter(number => !callback(number));
}

var numbers = [1, 3, 5, 10, 20, 30]; // array to be passed

// calling 'reject' passing in numbers & callback
var lessThanFifteen = reject(numbers, function(number){
	return number > 15;
});

console.log(lessThanFifteen);




// function reject(array, iteratorFunction) {
//  return array.filter((number) => {
//      return !iteratorFunction(number)
//  });
// }

// array = [10, 20, 30, 40, 50]
// console.log(reject(array, ));