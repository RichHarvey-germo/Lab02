"use strict";

alert("Welcome to my 🌎 of Fun!");/// First alert, welcoming User to the page
var score = 0;/// Variable that keeps track of all correct answers entered, and scored
let userName= prompt('What is your name?');
  console.log(userName);

alert('Hello ' + userName + "! Welcome to the site. Let's play a......guessing game!");

function marcoFavColor(){
  let favoriteColor = prompt('Is my favorite color purple?');
  let color = favoriteColor.toLowerCase();
  if (color == 'y' || color == 'yes'){
    alert('That is correct!');
    score++
    return;
  }
  if (color == 'n' || color == 'no'){
    alert('That is incorrect');
    return;
  }
  else {
    alert("That answer is not accepted. Try again.");
    return;
  }
}
marcoFavColor()


function marcoFavFood(){
  let favoriteFood = prompt('Is my favorite food MRE syled Cheese Tortellini?');
  let food = favoriteFood.toLowerCase();
  if (food == 'y' || food == 'yes'){
    alert('That is incorrect!');
    return;
  }
  if (food == 'n' || food == 'no'){
    alert('That is correct');
    score++
    return;
  }
  else {
    alert("That answer is not accepted. Try again.");
    return;
  }
}
marcoFavFood()


function marcoLearnFly(){
  let learnFly = prompt('Am I learning how to fly planes?');
  let fly = learnFly.toLowerCase();
  if (fly == 'y' || fly == 'yes'){
    alert('That is correct!');
    score++
    return;
  }
  if (fly == 'n' || fly == 'no'){
    alert('That is incorrect');
    return;
  }
  else {
    alert("That answer is not accepted. Try again.");
    return;
  }
}
marcoLearnFly()

function marcoMarineCorps(){
  let marineCorps = prompt('Was I ever in the Marine Corps?');
  let marine = marineCorps.toLowerCase();
  if (marine == 'y' || marine == 'yes'){
    alert('That is correct!');
    score++
    return;
  }
  if (marine == 'n' || marine == 'no'){
    alert('That is incorrect');
    return;
  }
  else {
    alert("That answer is not accepted. Try again.");
    return;
  }
}
marcoMarineCorps()

function marcoMoneyBags(){
  let moneyBags = prompt('Am I going to be hood riiiich💰💰💰?');
  let money = moneyBags.toLowerCase();
  if (money == 'y' || money == 'yes'){
    alert("Most Definitely💵💵💵💵💵💵💵!!! That's absolutely the right answer " + userName + "!");
    score++
    return;
  }
  if (money == 'n' || money == 'no'){
    alert('That is incorrect...but you already knew that😏');
    return;
  }
  else {
    alert("That answer is not accepted. Try again.");
    return;
  }
}
marcoMoneyBags()

function multQues(){
  for (let i = 0; i < 4; i++) {
    let numb=23
    let guessNumber = prompt('Guess my favorite number that is between 1 and 100');
    if (guessNumber < numb) {
      alert("Sorry that number is too low.");
      console.log(guessNumber)
    }
    if (guessNumber > numb) {
      alert("Sorry that number is too high.");
      console.log(guessNumber)
    }
    if (guessNumber == numb) {
      alert("You got it! That is my favorite lucky number!");
      score++
      console.log(guessNumber)
      return;
    }
  }
  alert("Sorry! You've ran out of chances! Thanks for playing, come back again soon " + userName + "!");
}
multQues() 

function multChoiceQues(){

  const multArray =["Traveling", "Food", "Weapons Range", "Gym", "Concerts", "Beer Gardens"];
  for ( let i = 0; i < 6; i++){

    var multArrayQues = prompt("Bonus Round!: Can you guess one of my six hobbies?");
    var targetQues =  multArrayQues.toLowerCase()
    
    for ( let i = 0; i < multArray.length; i++){
      if ( targetQues == multArray[i].toLowerCase()){
        score++
        alert("You got it right! Congratulations " + userName + "! You've completed the Guessing Game! Great work (⌐■_■)");
        return; 
      }
    }
    alert("Good try! Guess again, my friend.")
  }

  alert("Oooooooo-weee! You almost had it! Better luck next time " + userName + "!" + multArray)
}
multChoiceQues()

alert("Thanks for playing " + userName + "! Hope to see you again! Don't forget to hit the like and subscribe button, I'm posting one new project every week! 😎 Your final score is " + score + " out of 7!");

debugger;