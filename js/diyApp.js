// JavaScript File

// Greeting on Home Page - If/Else loop
var today = new Date();
var hourNow = today.getHours();
var greetingArray = ['Good Evening', 'Good Afternoon', 'Good Morning'];
greetingArray.push('Welcome');
var greeting;

if (hourNow > 18) {
    greeting = greetingArray[0];
    //greeting = "Good Evening!";
} else if (hourNow > 12) {
    greeting = greetingArray[1];
    //greeting = "Good Afternoon!";
} else if (hourNow > 0) {
    greeting = greetingArray[2];
    //greeting = "Good Morning!";
} else {
    greeting = greetingArray[3];
    //greeting = "Welcome";
}

document.write('<h2>' + greeting + '</h2>')

var greetingArray = ['Good Evening', 'Good Afternoon', 'Good Morning'];
greetingArray.push('Welcome');
var greeting;

    greeting = greetingArray[0];  // replace <greeting = "Good Evening!";>
    
    greeting = greetingArray[1];  // replace <greeting = "Good Afternoon!";>
    
    greeting = greetingArray[2];  // replace <greeting = "Good Morning!";>
    
    greeting = greetingArray[3];  // replace <greeting = "Welcome";>
    