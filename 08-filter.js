/* 
use 'filter' if you want to get a subset of an array

Think of books on amazon.com and you want to select only books
from a particular author.
*/
console.log('example 1');
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





console.log('example 2');
// filter the array of users, returning only users with admin priveleges
var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
    return user.admin === true;
});

console.log(filteredUsers);





console.log('example 3');
// use filter to create a new array of numbers only greater than 50
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(numbers){
    return numbers > 50;
});

console.log(filteredNumbers);





console.log('example 4');
/* given a list of comments and a particular blog post,
return just the comments associated with that post.
*/

var post = { id: 4, title: 'New Post'};

var comments = [
    {postId: 4, content: 'So cool!'},
    {postId: 3, content: 'Love this.'},
    {postId: 4, content: 'Strongly disagree'}
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    });
}

console.log(commentsForPost(post, comments));