// Create an application that displays 10 cities you have visited from a database 
// (stored in local storage)
// Details for each city
// a. City name
// b. Year you visited
// c. Image of city
// d. List of top 5 attractions
// Display your trips on the Dom, styled in cards. City name should appear above the image, 
// in a larger font size, with all other details below the image
// Filter the cards based on specific year visited, or all cities
// Style each card with a different background color, colored by continent 
// (North America = green, South America = blue, Asia = purple, Antarctica = yellow, Europe = orange, Africa = red, Australia = brown)



// Define the database as an object
const CityDatabase = {};


 const newYork = {
    name: "New York",
    year: "2012",
    image: "nyc.jpeg",
    attractions: ['Madison Square Garden', 'Empire State Building', 'Central Park', 'Bloomberg','5th Ave']
 }
 const bangkok = {
    name: "Bangkok",
    year: "2013",
    image: "bkk.jpg",
    attractions: ['Wat Arun', 'Lumpini Stadium', 'Lumpini Park', 'MBK','Soi Nana']
 }
 const london = {
    name: "London",
    year: "2000",
    image: "london.jpg",
    attractions: ['Big Ben', 'Big Ben', 'River Thames', 'Tower of London','Kensington']
 }
 const nashville = {
    name: "Nasvhille",
    year: "2018",
    image: "nash.jpg",
    attractions: ['Broadway', 'Country Music Hall of Fame', 'Parthenon', 'Vanderbilt','Centennial Park']
 }
 const beijing = {
    name: "Beijing",
    year: "2013",
    image: "beijing.jpeg",
    attractions: ['Great Wall', 'Tianamen Square', 'Hutongs', 'Summer Palace','Forbidden City']
 }
 CityDatabase.newYork = newYork;
 CityDatabase.bangkok = bangkok;
 CityDatabase.beijing = beijing;
 CityDatabase.nashville = nashville;
 CityDatabase.london = london;


 const saveDatabase = function (database, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(database)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
saveDatabase(CityDatabase, "City Database");

const cities = document.querySelector("#cities");

const setBackground = function(city){
    switch(city){
       case "New York":
       color = "green";
       break;
       case "Nashville":
       color = "green";
       break;
       case "Bangkok":
       color = "purple";
       break;
       case "Beijing":
       color = "purple";
       break;
       case "London":
       color = "orange";
    }
    return color;
}

const buildDom = function(year){

    for(let city in CityDatabase){
        const currentCity = CityDatabase[city];
        if(year === currentCity.year || !year){
            const itemSection = document.createElement("section");
            const hComponent = document.createElement("h1");
            hComponent.textContent = currentCity.name;
            const color = setBackground(currentCity.name);
            hComponent.setAttribute("style", `background-color: ${color};`);

            const image = document.createElement("img");
            image.setAttribute("height", "200px");
            image.setAttribute("width", "200px");
                image.src = currentCity.image;
            const year = document.createElement("p");
            year.textContent = currentCity.year;
            const attractionList = document.createElement("ul");
            const attractions = currentCity.attractions;
            attractions.forEach(function(place) {
                const attraction = document.createElement("li");
                attraction.textContent = place;
                attractionList.appendChild(attraction);
            });

            cities.appendChild(hComponent)
            cities.appendChild(image)
            cities.appendChild(year)
            cities.appendChild(attractionList)
        }
    }
}

buildDom();


