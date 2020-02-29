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