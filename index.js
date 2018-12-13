function rollDice() {
  return (Math.floor(Math.random()*6) + 1);
}

function setDiceImage(imgNumber, diceNumber) {
  document.querySelector(imgNumber).setAttribute("src", "images/dice" + diceNumber + ".png");
}

function playDicee() {
  var dice1Number = rollDice();
  var dice2Number = rollDice();

  setDiceImage(".img1", dice1Number);
  setDiceImage(".img2", dice2Number);

  var header = document.querySelector("h2");

  if (dice1Number > dice2Number) {
    header.textContent = "Player 1 Wins!";
  }
  else if (dice2Number > dice1Number) {
    header.textContent = "Player 2 Wins!";
  }
  else {
    header.textContent = "It's a Tie.";
  }
}
