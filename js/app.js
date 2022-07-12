'use strict';


let userName = prompt("What is your name?");
alert(`Welcome ${userName} to my personal website! I would you like to ask you a few yes or no questions about me, and see if you can get them right!`); 


let questionResponseOne = prompt("Do you think I was born in the United States?  Please answer yes or no.").toLowerCase();
console.log(questionResponseOne.toLowerCase);

if(questionResponseOne === 'y' || questionResponseOne === 'yes') {
  console.log("You are right!")
  alert("You are right!")
} else if(questionResponseOne === 'n' || questionResponseOne === 'no') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}


let questionResponseTwo = prompt("Do you think I ever worked in Cambodia? Please answer yes or no.").toLowerCase();
console.log(questionResponseTwo.toLowerCase);

if(questionResponseTwo === 'y' || questionResponseTwo === 'yes') {
  console.log("You are right!")
  alert("You are right!")
} else if(questionResponseTwo === 'n' || questionResponseTwo === 'no') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}


let questionResponseThree = prompt("Do you think I ever worked in Afghanistan?  Please answer yes or no.").toLowerCase();
console.log(questionResponseThree.toLowerCase);

if(questionResponseThree === 'y' || questionResponseThree === 'yes') {
  console.log("You are right!")
  alert("You are right!")
} else if(questionResponseThree === 'n' || questionResponseThree === 'no') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}

let questionResponseFour = prompt("Do you think I speak fluent Portugese? Please answer yes or no.").toLowerCase();
console.log(questionResponseFour.toLowerCase);

if(questionResponseFour === 'y' || questionResponseFour === 'yes') {
  console.log("You are right!")
  alert("You are right!")
} else if(questionResponseFour === 'n' || questionResponseFour === 'no') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}

let questionResponseFive = prompt("Do you think I was married in Europe? Please answer yes or no.").toLowerCase();
console.log(questionResponseFive.toLowerCase);

if(questionResponseFive === 'y' || questionResponseFive === 'yes') {
  console.log("You are right!")
  alert("You are right!")
} else if(questionResponseFive === 'n' || questionResponseFive === 'no') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}


alert(`Thank you ${userName} for playing the "About Me Guessing Game!"`); 

