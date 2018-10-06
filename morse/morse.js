const textInput = document.getElementById("input");
const btn = document.getElementById("btn");
const textOutput = document.getElementById("output");

const morseAlphabet = { "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--", "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.", ")": "-.--.-" };

function type(text, time) {
  for (let i = 0; i < text.length; i++) {
    let j = i;
    setTimeout(
      (function(x) {
        return function() {
          textInput.value += text.charAt(i);
        };
      })(i),
      time * i
    );
  }
}

type("Type text to translate here", 100);

textInput.addEventListener("keyup", function() {
  textInput.style.height = "5px";
  textInput.style.height = textInput.scrollHeight + "px";
  console.log("x");
});

function output() {
  let inputArray = textInput.value.toLowerCase().split("");
  inputArray.map(a => a === ' ' ? a === 'stop' : false);
  console.log(inputArray)
  let outputArray = [];
  for (let i=0; i <inputArray.length; i++) {
    console.log(outputArray.push(morseAlphabet[inputArray[i]]))

  }
  textOutput.innerHTML = outputArray.join('x')
}

btn.addEventListener('click', output);
