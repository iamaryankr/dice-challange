//for first person
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomNum1 + ".png";
var randomImgSrc = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc);

//for second person
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNum2 + ".png";
var randomImgSrc2 = "images/" + randomDiceImg2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSrc2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 wins !";
}
else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 wins !";
}
else{
    document.querySelector("h1").innerHTML = "Draw !";
}
