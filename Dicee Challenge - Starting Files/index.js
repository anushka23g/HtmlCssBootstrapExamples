

var randomNumber1 = Math.floor(Math.random()*6) +1;


var randomNumber2 = Math.floor(Math.random()*6) +1;

var path1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute('src',path1);


var path2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute('src',path2);

if(randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
  document.querySelector("h1").innerHTML = "It's a draw";
}
