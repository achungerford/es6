/* 
use 'filter' if you want to get a subset of an array

Think of books on amazon.com and you want to select only books
from a particular author.
*/

var sports = [
    {name: 'baseball', surface: 'field'},
    {name: 'basketball', surface: 'court'},
    {name: 'tennis', surface: 'court'},
    {name: 'swimming', surface: 'pool'},
    {name: 'soccer', surface: 'field'}
];

// var filteredSports = [];

/*
// get only sports played on a field using traditional for-loop
for (i = 0; i < sports.length; i++) {
    if (sports[i].surface === 'field') {
        filteredSports.push(sports[i]);
    }
}

console.log(filteredSports);
*/


filteredSports = sports.filter(function(sport) {
    return sport.surface === 'pool';
});

console.log(filteredSports);