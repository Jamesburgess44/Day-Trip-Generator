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
// need a reroll funciton
function reroll() { // i dont think this is working... need to debugg a see whats happening
    tripDestination = pickRandomDestination();
    tripRestaurant = pickRandomRestaurant();
    tripTransporation = pickRandomTransportation();
    tripEntertainment = pickRandomEntertainment();
    return tripDestination, tripRestaurant, tripTransporation, tripEntertainment;
}

function userTrip(){
    alert("Your randomly generated day trip will be in " + userDestination + ", you'll eat at " + userRestaurant + ", you'll arrive by " + userTransporation + ", and you will go to a " + userEntertainment + ".");
    //console.log("Your randomly generated day trip will be in " + userDestination + ", you'll eat at " + userRestaurant + ", you'll arrive by " + userTransporation + ", and you will go to a " + userEntertainment + ".")
}
userTrip();

function userValue() {
    let choice = parseInt(prompt("Please enter 0 if you are happy with your trip! Enter 1 to change destination, 2 for restaurant, 3 for transportation, or 4 for entertainment. Please press 5 for an entire new trip!"));
     return choice
 }
 //userValue()

 //need a while statement to allow the entered prompt to pick a new random value from array, if user enters a corrisponding nubmer it should reroll the random value.
 let userChoice = true   // spent 20 min debugging and then remembered that this was needed to function properly 

while (userChoice) {
    let userInput = userValue();

    if(userInput === 1) {
        userDestination = destinations[Math.floor(Math.random()*destinations.length)];   // I thought pickRandom function would work but it pulled the same value from the array, i believe it wassnt doing the matha again so putting code here seems to have fixed the issue.
        userTrip();
    }
    else if(userInput === 2) {
        userRestaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
        userTrip();
    }
    else if(userInput === 3) {
        userTransporation = transportation[Math.floor(Math.random()*transportation.length)];
        userTrip();
    }
    else if(userInput === 4) {
        userEntertainment = entertainment[Math.floor(Math.random()*entertainment.length)];
        userTrip();
    }
    else if (userInput === 5) {
        reroll();
        userTrip();
    }
    else if (userInput === 0) {
        alert("Your randomly generated day trip is all set!");
        console.log(userDestination, " ", userRestaurant, " ", userTransporation, " ", userEntertainment);
        userChoice = false;
    }
    else {
        console.log("Invalid choice.");
    }

}
// 