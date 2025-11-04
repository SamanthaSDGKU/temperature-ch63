console.log("functions");

// function declaration (create)
function sayHello(){
    console.log("Welcome to Angry Birds!");
}

// call/run/trigger/execute the fn
sayHello();
sayHello();


// Example 2 with 1 parameter

function greetBird(birdName){
    console.log(`Hello <b> ${birdName} </b>! Ready to destroy some pigs?`);
    //console.log("Hello " + birdName + "! Ready to destroy some pigs?");
}

greetBird("Red");
greetBird("Blue");
greetBird("Bomb");

// Example 3 with 2 parameter

function greetPlayer(firstName, lastName){
    console.log(`Welcome back, ${firstName} ${lastName}`);
}

greetPlayer("Samantha","Jimenez");
greetPlayer("Reece","Rollins");

// Challenge 1: 
// task: 
// Create a function called `doubleScore` that takes one number (the player's score).
// The function should display the score multiplied by 2. (console)
function doubleScore(score){
    let total = score * 2;
    console.log(`Your new score is: ${total}`);
}

doubleScore(10); //20
doubleScore(12); //24
doubleScore(8); //16

//Example 4 with prompt()

function askPigName(){
    let pigName = prompt("Enter Pig's name");
    console.log(`Target: ${pigName}`)
}

// 1) call the function on the code
//askPigName();
// 2) on the console: askPigName();
// 3) the user on the HTML

function addPoints(points1,points2){
    let total = points1 + points2;
    console.log(`Total points earned: ${total} `);
}

addPoints(100,200);
addPoints(0,20);
addPoints(50,100);


// Challenge 2: Convert Minutes to Seconds

// Task:
// - Create a function called `convertToSeconds` that takes one parameter, `minutes`.
// - The function should return the number of seconds by multiplying the minutes by 60.
// - Call the function with different values of minutes and print the results.

// fn with 1 parameter
// function convertToSeconds(mins){
//     let secs = mins * 60;
//     console.log(`${mins} minutes are ${secs}s`);
// }


// dynamic function
function convertToSeconds(){
    let mins = prompt("Enter the mins: ");//the user will input mins
    let secs = mins * 60; //. calculates the secs
    document.getElementById("result").innerHTML += `<li>${mins} minutes are ${secs}s</li>`; // display/print
}

// trigger the function with button on the HTML