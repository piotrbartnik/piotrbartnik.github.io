$(".gameStart .btn").fadeToggle("slow", "linear");

$("#showGame").addClass("load");

document.getElementById("inputText").focus();

var word = ["Warszawa", "Kraków", "Poznań", "Rzeszów", "Szczecin", "Gdańsk", "Wrocław", "Lublin"];

var draw = word[Math.floor(Math.random() * word.length)];

var drawLength = draw.length;

var emptyPasswordLine = [];

var underscore = "_";

for (i = 0; i < draw.length; i++) {
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

    if (guess === null) {
        alert("Wpisz literę");
    } else if (guess.length != 1) {
        alert("Wpisz tylko jedna literę")
    } else if (checkIncludes == false) {
        x -= 1;
        alert("Zła litera")
        document.getElementById("moves").innerHTML = "Ruchy: " + x;
    } else {
        for (i = 0; i < draw.length; i++) {
            if (draw[i].toLowerCase() == guess) {
                emptyPasswordLine[i] = draw[i];
                document.getElementById("password").innerHTML = emptyPasswordLine.join("");
            }
        }
    }
    document.getElementById("myForm").reset();
    document.getElementById("inputText").focus();

    if (x == 0) {
        alert("Game over!");
        window.location.reload(true);
    }
}