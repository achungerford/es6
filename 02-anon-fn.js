// array helper method: forEach()
// with anonymous function and argument

const days = ['M', 'T', 'W', 'R', 'F'];

// prints out array content
days.forEach(function(blahBlahBlah) {
    console.log(blahBlahBlah);
});

console.log('\nconvention:');

// convention would be to use 'day' instead
days.forEach(function(day) {
    console.log(day);
});

console.log('\n');


// if you want the index, need a second argument
days.forEach(function(day, x) {
    console.log(x);    // print the index only
})

console.log('\n');

// if you want the index, need a second argument
days.forEach(function(day, x) {
    console.log(day, x);    // print the elements and their index
})