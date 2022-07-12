'use strict';


let userName = prompt("What is your name?");
alert(`Welcome ${userName} to my personal website! I would you like to ask you a few yes or no questions about me, and see if you can get them right!`); 


let questionResponseOne = prompt("Do you think I was born in the United States?  Please answer yes or no.").toLowerCase();
console.log(questionResponseOne.toLowerCase);

if(questionResponseOne === 'y' || questionResponseOne === 'yes') {
  alert("You are right!")
} else if(questionResponseOne === 'n' || questionResponseOne === 'no') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}


let questionResponseTwo = prompt("Do you think I ever worked in Cambodia? Please answer yes or no.");
console.log(questionResponseTwo.toLowerCase);
alert("Welcome " + questionResponseOne + " from " + userResponseTwo + "!"); 

let questionResponseThree = prompt("Do you think I ever worked in Afghanistan?  Please answer yes or no.");
console.log(questionResponseThree.toLowerCase);
alert("Welcome " + questionResponseOne + " from " + userResponseTwo + "!" + " We are glad to hear you like " + userResponseThree + "."); 

let questionResponseFour = prompt("Do you think I speak fluent Portugese? Please answer yes or no.");
console.log(questoinResponseFour.toLowerCase);
alert("Welcome " + questionResponseOne + " from " + userResponseTwo + "!" + " We are glad to hear you like " + userResponseThree + " and feed them " + userResponseFour + "."); 

let questionResponseFive = prompt("Do you think I was married in Europe? Please answer yes or no.");
console.log(userResponseFive.toLowerCase);
alert("Welcome " + questionResponseFive + " from " + userResponseTwo + "!" + " We are glad to hear you like " + userResponseThree + " and feed them " + userResponseFour + "."); 

alert(`Thank you ${userName} for playing the "About Me Guessing Game!'"); 

