$(".gameStart .btn").fadeToggle("slow", "linear");

$("#showGame").addClass("load");

document.getElementById("inputText").focus();

let word = ["Warszawa", "Kraków", "Poznań", "Rzeszów", "Szczecin", "Gdańsk", "Wrocław", "Lublin"];

let draw = word[Math.floor(Math.random() * word.length)];

let drawLength = draw.length;

let emptyPasswordLine = [];

let underscore = "_";

for (i = 0; i < draw.length; i++) {
  emptyPasswordLine.push(underscore);
}

document.getElementById("password").innerHTML = emptyPasswordLine.join("");

let x = 10;
document.getElementById("moves").innerHTML = "Ruchy: " + x;

function othername() {
  let guess = document.getElementById("inputText").value;

  guess = guess.toLowerCase();

  let checkIncludes = draw.includes(guess);
  console.log(checkIncludes);
  let found = false;

  if (guess.length != 1) {
    alert("Wpisz jedną literę")
    document.getElementById("moves").innerHTML = "Ruchy: " + x;

  } else {
    for (i = 0; i < draw.length; i++) {
      if (draw[i].toLowerCase() === guess) {
        console.log(guess);
        emptyPasswordLine[i] = draw[i];
        found = true;
        document.getElementById("password").innerHTML = emptyPasswordLine.join("");
      }
    } if (found != true) {
      x -= 1;
      alert("Zła litera")
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

var input = document.getElementById("enter");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});