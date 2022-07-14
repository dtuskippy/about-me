'use strict';


let userName = prompt("What is your name?");
alert(`Welcome ${userName} to my personal website! I would you like to ask you a few yes or no questions about me, and see if you can get them right!`); 

let uberCount = 0;

// Question 1
let questionResponseOne = prompt("Do you think I was born in the United States?  Please answer yes or no.").toLowerCase();

if(questionResponseOne === 'y' || questionResponseOne === 'yes') {
  // console.log("You are right!")
  alert("You are right!");
  uberCount++;
} else if(questionResponseOne === 'n' || questionResponseOne === 'no') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}

// Question 2
let questionResponseTwo = prompt("Do you think I ever worked in Cambodia? Please answer yes or no.").toLowerCase();

if(questionResponseTwo === 'n' || questionResponseTwo === 'no') {
  // console.log("You are right!")
  alert("You are right!");
  uberCount++;
} else if(questionResponseTwo === 'y' || questionResponseTwo === 'yes') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}

// Question 3
let questionResponseThree = prompt("Do you think I ever worked in Afghanistan?  Please answer yes or no.").toLowerCase();

if(questionResponseThree === 'y' || questionResponseThree === 'yes') {
  // console.log("You are right!")
  alert("You are right!");
  uberCount++;
} else if(questionResponseThree === 'n' || questionResponseThree === 'no') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}

// Question 4
let questionResponseFour = prompt("Do you think I speak fluent Portugese? Please answer yes or no.").toLowerCase();

if(questionResponseFour === 'n' || questionResponseFour === 'no') {
  //console.log("You are right!")
  alert("You are right!");
  uberCount++;
} else if(questionResponseFour === 'y' || questionResponseFour === 'yes') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}

// Question 5
let questionResponseFive = prompt("Do you think I was married in Europe? Please answer yes or no.").toLowerCase();

if(questionResponseFive === 'y' || questionResponseFive === 'yes') {
  //console.log("You are right!")
  alert("You are right!")
  uberCount++;
} else if(questionResponseFive === 'n' || questionResponseFive === 'no') {
  alert("Sorry, but you are wrong."); 
} else {
  alert("Please answer yes or no.");
}


// Question 6

let count = 0;


for(let i = 1; i <= 4; i++) {
  let promptPullQuestionSix = prompt('Do you know how many pets I have?  You have up to 4 guesses to pick a number between 1 and 10.');

  let questionResponseSix = Number(promptPullQuestionSix);

  if(questionResponseSix === 4) {
    alert('You are right!');
    //console.log('You are right!')
    uberCount++;
    break;
  }else if(questionResponseSix < 4 && questionResponseSix > 0) {
    alert('Sorry, but you are too low.');
  }else if(questionResponseSix > 4 && questionResponseSix <= 10) {
    alert('Sorry, but you are too high.');
  }else if(questionResponseSix < 1 || questionResponseSix > 10) {
    alert('Please guess a number between 1 and 10.');
  }

  count += i;
}

if(count === 4) {
  alert(`Thank you for playing ${userName}, but you have used up your 4 guesses. The correct answer is 4.`);
}


// Question 7
let worldCupWinners = ['france', 'germany', 'spain', 'italy'];
let maxGuessCount = 6;
let guessCount = 0;
let found = false;

for(let i = 1; i <= maxGuessCount; i++) {
  let worldCupResponse = prompt('Teams from Europe have won the last 4 FIFA World Cups (soccer).  Can you name one of the winning national teams? You have up to 6 guesses to make at least one correct choice!').toLowerCase();


  for(let j = 0; j < worldCupWinners.length; j++) {
    if(worldCupWinners[j] === worldCupResponse) {
      alert('You are right! The correct answers are France, Germany, Spain and Italy');
      //console.log('You are right!')
      uberCount++;
      found = true;
    }

  }
  if(found === true){break;}
  alert('Sorry, you are incorrect. Please try again.');
 
  guessCount += i;
}
if(guessCount === 6) {
  alert(`Thank you for playing ${userName}, but you have used up your 6 guesses. The correct answers are France, Germany, Spain and Italy.`);
}




//User Score

alert(`Thank you for answering all of those questions.  You got ${uberCount} questions correct out of 7.`)
















