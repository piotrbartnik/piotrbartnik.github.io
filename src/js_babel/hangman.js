"use strict";

$(".gameStart .btn").fadeToggle("slow", "linear");
$("#showGame").addClass("load");
var input = document.getElementById("enter");
$("form").submit(function (e) {
  e.preventDefault();
  document.getElementById("enter").click();
});
document.getElementById("inputText").focus();
var word = ["Warszawa", "Kraków", "Poznań", "Rzeszów", "Szczecin", "Gdańsk", "Wrocław", "Lublin"];
var draw = word[Math.floor(Math.random() * word.length)];
var drawLength = draw.length;
var emptyPasswordLine = [];
var underscore = "_";

for (var i = 0; i < draw.length; i++) {
  emptyPasswordLine.push(underscore);
}

document.getElementById("password").innerHTML = emptyPasswordLine.join("");
var x = 10;
document.getElementById("moves").innerHTML = "Ruchy: " + x;

function othername() {
  var guess = document.getElementById("inputText").value;
  guess = guess.toLowerCase();
  var checkIncludes = draw.includes(guess);
  console.log(checkIncludes);
  var found = false;

  if (guess.length != 1) {
    alert("Wpisz jedną literę");
    document.getElementById("moves").innerHTML = "Ruchy: " + x;
  } else {
    for (var _i = 0; _i < draw.length; _i++) {
      if (draw[_i].toLowerCase() === guess) {
        console.log(guess);
        emptyPasswordLine[_i] = draw[_i];
        found = true;
        document.getElementById("password").innerHTML = emptyPasswordLine.join("");
      }
    }

    if (found != true) {
      x -= 1;
      alert("Zła litera");
      document.getElementById("moves").innerHTML = "Ruchy: " + x;
    }
  }

  document.getElementById("myForm").reset();
  document.getElementById("inputText").focus();

  if (x == 0) {
    alert("Game over!");
    window.location.reload(true);
  }
}