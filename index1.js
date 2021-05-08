
//for changing in css style.
var randomNumber1=Math.floor(Math.random()*6) + 1;

//using concatenation for changing image number to select.
var randomDiceImage= "dice" + randomNumber1 + ".png"; 
var randomImageSource="images/" + randomDiceImage ;

//for changing the images.
var x=document.querySelectorAll("img")[0] ;
x.setAttribute("src",randomImageSource);

//for dice 2
var randomNumber2=Math.floor(Math.random()*6) + 1 ;
var randomDiceImage="dice" + randomNumber2 + ".png" ;
var randomImageSource2 = "images/" + randomDiceImage ;
var y= document.querySelectorAll("img")[1] ;
y.setAttribute("src", randomImageSource2);

//Manipulating HTML text.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").textContent = "Draw!";
  }