let destinations = ["Texas","Florida","California","Utah"]
let restaurants = ["The Cheesecake Factory","Texas Roadhouse","Applebee's","Red Robin"]
let transportation = ["Car","Train","Airplane","Boat"]
let entertainment = ["Sports Event","Hiking","Zoo","Museum"]


function pickRandomDestination(){
    let randomDestination = destinations[Math.floor(Math.random()*destinations.length)];
    console.log(randomDestination);
    return randomDestination;
}
pickRandomDestination();


function pickRandomRestaurant(){
    let randomRestaurants = restaurants[Math.floor(Math.random()*restaurants.length)];
    console.log(randomRestaurants);
    return randomRestaurants;
}
pickRandomRestaurant();

function pickRandomTransportation(){
    let randomTransportation = transportation[Math.floor(Math.random()*transportation.length)];
    console.log(randomTransportation);
    return randomTransportation;
}
pickRandomTransportation();


function pickRandomEntertainment(){
    let randomEntertainment = entertainment[Math.floor(Math.random()*entertainment.length)];
    console.log(randomEntertainment);
    return randomEntertainment;
} 
pickRandomEntertainment()