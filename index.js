//returning the integer 12, this is a working function

function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 3));



//function that returns an if else statment 


function myFunction(person) {   
    if (person === 13) {       
        console.log("Yay, you're a pre-teen");   
    } else {       
        console.log("You're not a pre-teen");   
    }
}

console.log(myFunction(13));

// function with && and %

function hw() {    
    for (var i = 0; i <= 5; i++) {        
        if (i % 3 && i % 4) {            
            console.log("Youre almost done!");        
        } else {            
            console.log("Do your hw!");        
        }    
    }
}

//function that has 3 arguments and returns a calculation using all 3

function myFunction(attendees) {        
    if (attendees === 0) {                
        console.log("Your class sucks")       
    } else if (attendees >= 5) {        
        console.log("You must be a great teacher")    
    } else {                
        console.log("Just forget teaching");        
    }
}

console.log(myFunction(0));

//function that has 2 variables that returns the length of the string

function str() {

        
    var string1 = "Hello there";    
    var string2 = "My name is Ana";

        
    console.log(string1.length);    
    console.log(string2.length);
}
str();

//function that returns a random number between 0-10

function Math.floor((Math.random() * 10) + 1);
console.log(Math.random);

//Reminader of 5/2

function mod(a, b) {
    return a % b
}

mod(5, 2)