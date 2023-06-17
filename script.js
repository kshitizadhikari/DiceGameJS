var dice = document.querySelectorAll("img");
var dice1 = dice[0];
var dice2 = dice[1];

var win = document.querySelectorAll(".win h2");
var p1 = win[0];
var p2 = win[1];

var p1Win = 0;
var p2Win = 0;

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var abc = getRandomNumber(1, 6);

function rollDice() {
  randomNum1 = getRandomNumber(1, 6);
  randomNum2 = getRandomNumber(1, 6);
  dice1.setAttribute("src", "images/dice" + randomNum1 + ".png");
  dice2.setAttribute("src", "images/dice" + randomNum2 + ".png");

  delay(1000).then(() => {
    if (randomNum1 > randomNum2) {
      alert("Player1 Won");
      p1.textContent = "Win: " + ++p1Win;
    } else if (randomNum1 == randomNum2) {
      alert("Draw !!");
    } else {
      alert("Player2 Won");
      p2.textContent = "Win: " + ++p2Win;
    }
  });
}
