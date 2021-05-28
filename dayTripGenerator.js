let destinations = ["Texas","Florida","California","Utah"]
let restaurants = ["The Cheesecake Factory","Texas Roadhouse","Applebee's","Red Robin"]
let transportation = ["Car","Train","Airplane","Boat"]
let entertainment = ["Sports Event","Hiking","Zoo","Museum"]


function pickRandomDestination(){
    let randomDestination = destinations[Math.floor(Math.random()*destinations.length)];
    //console.log(randomDestination);
    return randomDestination;
}
pickRandomDestination();


function pickRandomRestaurant(){
    let randomRestaurants = restaurants[Math.floor(Math.random()*restaurants.length)];
    //console.log(randomRestaurants);
    return randomRestaurants;
}
pickRandomRestaurant();

function pickRandomTransportation(){
    let randomTransportation = transportation[Math.floor(Math.random()*transportation.length)];
    //console.log(randomTransportation);
    return randomTransportation;
}
pickRandomTransportation();


function pickRandomEntertainment(){
    let randomEntertainment = entertainment[Math.floor(Math.random()*entertainment.length)];
    //console.log(randomEntertainment);
    return randomEntertainment;
} 
pickRandomEntertainment()



let dayTripArray = [pickRandomDestination(), pickRandomRestaurant(), pickRandomTransportation(), pickRandomEntertainment()];
let userDestination = dayTripArray[0];
let userRestaurant = dayTripArray[1];
let userTransporation = dayTripArray[2];
let userEntertainment = dayTripArray[3];

function userTrip(){
    alert("Your randomly generated day trip will be in " + userDestination + ", you'll eat at " + userRestaurant + ", you'll arrive by " + userTransporation + ", and you will go to a " + userEntertainment + ".");
    console.log("Your randomly generated day trip will be in " + userDestination + ", you'll eat at " + userRestaurant + ", you'll arrive by " + userTransporation + ", and you will go to a " + userEntertainment + ".")
}
userTrip();
