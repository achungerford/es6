var colors = ['red', 'white', 'blue'];

for(i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// anonymous callback with {}
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach((post) => {
        console.log(post);
    });
}


// anonymous callback without {}
function handleCities() {
    var cities = [
        { id: 2, title: 'NYC' },
        { id: 4, title: 'LA' },
        { id: 6, title: 'Miami' }
    ];
    
    cities.forEach((city) => console.log(city));
}

// anonymous callback without {}, log the properties only
function handleStates() {
    var states = [
        { id: 1, title: 'NY' },
        { id: 5, title: 'CA' },
        { id: 10, title: 'FL' }
    ];
    
    states.forEach((states) => console.log(states.id));
}

handlePosts();
handleCities();
handleStates();

// note: the only reason you need to pass 'post' and 'city'
// into callback is bc we're printing it to the console.