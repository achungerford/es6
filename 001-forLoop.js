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
        { id: 23, title: 'NYC' },
        { id: 52, title: 'LA' },
        { id: 105, title: 'Miami' }
    ];
    
    cities.forEach((city) => console.log(city));
}

handlePosts();
handleCities();