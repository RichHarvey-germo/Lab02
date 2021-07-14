"use strict";

alert("Welcome to my 🌎 of Fun!");

let userName= prompt('What is your name?');
  // console.log(userName);

alert('Hello ' + userName + "! Welcome to the site. Let's play a......guessing game!");

function marcoFavColor() {
  let favoriteColor = prompt('Is my favorite color purple?');
  let color = favoriteColor.toLowerCase();
  if (color == 'y' || color == 'yes'){
    alert('That is correct!');
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

function marcoFavFood() {
  let favoriteFood = prompt('Is my favorite food MRE syled Cheese Tortellini?');
  let food = favoriteFood.toLowerCase();
  if (food == 'y' || food == 'yes'){
    alert('That is incorrect!');
    return;
  }
  if (food == 'n' || food == 'no'){
    alert('That is correct');
    return;
  }
  else {
    alert("That answer is not accepted. Try again.");
    return;
  }
}
marcoFavFood()

function marcoLearnFly() {
  let learnFly = prompt('Am I learning how to fly planes?');
  let fly = learnFly.toLowerCase();
  if (fly == 'y' || fly == 'yes'){
    alert('That is correct!');
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

function marcoMarineCorps() {
  let marineCorps = prompt('Was I ever in the Marine Corps?');
  let marine = marineCorps.toLowerCase();
  if (marine == 'y' || marine == 'yes'){
    alert('That is correct!');
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

function marcoMoneyBags() {
  let moneyBags = prompt('Am I going to be hood riiiich💰💰💰?');
  let money = moneyBags.toLowerCase();
  if (money == 'y' || money == 'yes'){
    alert("Most Definitely💵💵💵💵💵💵💵!!! That's absolutely the right answer " + userName + "!");
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

alert("Thanks for playing " + userName + "! Hope to see you again! Don't forget to hit the like and subscribe button, I'm posting one new project every week!😎");