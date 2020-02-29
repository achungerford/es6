/* Anonymous function */

var days = ['M', 'T', 'W', 'R', 'F'];

// example of our anonymous function
//
// function() {
//     console.log('Hi friend');
// }

/* you would just place the entire anon function inside forEach */
days.forEach(function() {
    console.log('Hi friend');
});