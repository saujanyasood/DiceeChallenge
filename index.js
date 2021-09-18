var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var imageAddressOne = "images/dice" + randomNumber1 + ".png";
var imageAddressTwo = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").src = imageAddressOne;
document.querySelector(".img2").src = imageAddressTwo;

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "It's a Draw! 🤝";
}
